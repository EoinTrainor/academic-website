"use client";

import { useEffect, useRef, useState } from "react";
import ScientificFigure from "./ScientificFigure";
import { withBasePath } from "@/lib/basePath";

type FallbackFigureProps = {
  label: string;
  src: string;
  caption?: string;
  aspect?: "wide" | "square" | "tall";
};

/**
 * Shows the real image once it has loaded. Until then, and if the file is
 * missing, it shows the site's standard placeholder panel, so a figure that
 * has not been added yet never renders as a broken-image icon.
 */
export default function FallbackFigure({ label, src, caption, aspect = "wide" }: FallbackFigureProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<"loading" | "ok" | "failed">("loading");

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete) setState(img.naturalWidth > 0 ? "ok" : "failed");
  }, []);

  return (
    <div>
      {state !== "ok" ? <ScientificFigure label={label} caption={caption} aspect={aspect} /> : null}
      <figure className={state === "ok" ? "" : "hidden"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={withBasePath(src)}
          alt={label}
          className="w-full h-auto"
          onLoad={() => setState("ok")}
          onError={() => setState("failed")}
        />
        {caption ? (
          <figcaption className="mt-1 text-xs text-paper-dim/80 leading-relaxed">{caption}</figcaption>
        ) : null}
      </figure>
    </div>
  );
}
