"use client";
import { useEffect, useRef, useState } from "react";
import { pictures } from "@/data/pictures";

export default function Gallery() {
  const [current, setCurrent] = useState(null); // index gambar yang terbuka
  const trigger = useRef(null);
  const closeBtn = useRef(null);
  const open = current !== null;
  const total = pictures.length;

  const close = () => {
    setCurrent(null);
    trigger.current?.focus();
  };
  const go = (step) => setCurrent((c) => (c + step + total) % total);

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const pic = open ? pictures[current] : null;

  return (
    <>
      <div className="grid">
        {pictures.map((p, i) => (
          <button
            key={p.src}
            aria-label={`Buka: ${p.alt}`}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setCurrent(i);
            }}
          >
            <img src={p.thumb} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button ref={closeBtn} className="lb-close" aria-label="Tutup" onClick={close}>&times;</button>
          <button className="lb-prev" aria-label="Sebelumnya" onClick={() => go(-1)}>&#8249;</button>
          <img src={pic.src} alt={pic.alt} />
          <button className="lb-next" aria-label="Berikutnya" onClick={() => go(1)}>&#8250;</button>
          <div className="lb-cap">{pic.alt} ({current + 1}/{total})</div>
        </div>
      )}
    </>
  );
}
