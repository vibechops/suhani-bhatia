"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { reels } from "../lib/reels";

function ReelCard({
  reel,
  playing,
  onToggle,
}: {
  reel: (typeof reels)[number];
  playing: boolean;
  onToggle: () => void;
}) {
  const wrap = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReady(true);
      },
      { rootMargin: "240px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!el || !ready) return;
    if (playing) {
      el.muted = false;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [playing, ready]);

  return (
    <figure className="reel-card" ref={wrap}>
      <button
        type="button"
        className="reel-hit"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={`${playing ? "Pause" : "Play"} ${reel.label}`}
      >
        <video
          ref={video}
          poster={reel.poster}
          src={ready ? reel.src : undefined}
          muted={false}
          playsInline
          loop
          preload={ready ? "metadata" : "none"}
          aria-label={`Field reel: ${reel.label}`}
        />
        <span className={`reel-cue${playing ? " on" : ""}`} aria-hidden="true">
          {playing ? "Pause" : "Play"}
        </span>
      </button>
      <figcaption>{reel.label}</figcaption>
    </figure>
  );
}

export function ReelStrip({ note }: { note?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="reel-strip" aria-label="Field and colloquy reels">
      <div className="sec-head">
        <div>
          <p className="kicker">Field & colloquy</p>
          <h2>On camera</h2>
        </div>
        {note ? (
          <p className="hero-links">
            <Link href="/work/rural-colloquy">Archive note</Link>
          </p>
        ) : null}
      </div>
      <div className="reel-row">
        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            reel={reel}
            playing={active === reel.id}
            onToggle={() => setActive((id) => (id === reel.id ? null : reel.id))}
          />
        ))}
      </div>
    </section>
  );
}
