"use client";
import { useState } from "react";

interface SpokespersonVideoProps {
  scriptId: string;
  label?: string;
  embedUrl?: string;        // HeyGen / Synthesia embed URL once generated
  thumbnailUrl?: string;    // Optional thumbnail image
  aspectRatio?: "16/9" | "9/16" | "1/1";
}

export default function SpokespersonVideo({
  scriptId,
  label = "Watch the overview",
  embedUrl,
  thumbnailUrl,
  aspectRatio = "16/9",
}: SpokespersonVideoProps) {
  const [playing, setPlaying] = useState(false);

  const paddingTop =
    aspectRatio === "9/16" ? "177.78%" :
    aspectRatio === "1/1"  ? "100%"    : "56.25%";

  const maxWidth =
    aspectRatio === "9/16" ? "280px" : "100%";

  if (playing && embedUrl) {
    return (
      <div style={{ position: "relative", paddingTop, maxWidth, width: "100%" }}>
        <iframe
          src={embedUrl}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 16, border: "none" }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title={label}
        />
      </div>
    );
  }

  return (
    <div style={{ maxWidth, width: "100%" }}>
      <button
        onClick={() => embedUrl ? setPlaying(true) : undefined}
        className="relative w-full rounded-2xl overflow-hidden border border-electric-subtle bg-ca-slate group cursor-pointer"
        style={{ paddingTop }}
        aria-label={`Play video: ${label}`}
        title={embedUrl ? `Play: ${label}` : `Video coming soon — Script ID: ${scriptId}`}
      >
        {/* Thumbnail or placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ca-slate to-ca-charcoal">
          {thumbnailUrl ? (
            <img src={thumbnailUrl} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-60" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
              {/* Animated waveform placeholder */}
              <div className="flex items-end gap-1 h-12 opacity-40">
                {[3,5,8,6,4,7,9,5,6,4,8,5,3,7,6].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-ca-electric rounded-full"
                    style={{ height: `${h * 5}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-ca-muted text-xs font-mono">{scriptId}</span>
            </div>
          )}

          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 group-hover:bg-black/10 transition-all">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${embedUrl ? "bg-ca-electric" : "bg-ca-slate border border-ca-muted/30"}`}>
              {embedUrl ? (
                <svg className="w-6 h-6 text-ca-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-ca-muted" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium text-ca-white/80 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
              {embedUrl ? label : "Video coming soon"}
            </span>
          </div>
        </div>
      </button>

      {/* Label below */}
      {!embedUrl && (
        <p className="mt-2 text-center text-xs text-ca-muted/60 font-mono">
          [{scriptId}] — Replace with HeyGen/Synthesia embed URL
        </p>
      )}
    </div>
  );
}
