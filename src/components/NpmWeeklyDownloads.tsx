import { useEffect, useId, useState } from "react";
import { PACKAGE } from "../data";

/**
 * Honest npm weekly downloads only — no fabricated user counts or synthetic charts.
 */
export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "failed">("loading");
  const labelId = useId();

  useEffect(() => {
    let cancelled = false;
    const url = `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(PACKAGE.name)}`;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("npm"))))
      .then((data: { downloads?: number }) => {
        if (cancelled) return;
        if (typeof data.downloads === "number") {
          setCount(data.downloads);
          setStatus("ok");
        } else {
          setStatus("failed");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("failed");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="npm-dl npm-dl-early" id={labelId} aria-busy="true">
        <span className="npm-dl-label">npm downloads / week</span>
        <strong className="npm-dl-count">…</strong>
      </div>
    );
  }

  if (status === "failed" || count === null) {
    return (
      <a className="npm-dl npm-dl-early" href="/design-partners" id={labelId}>
        <span className="npm-dl-label">Status</span>
        <strong className="npm-dl-count">Early access</strong>
      </a>
    );
  }

  const formatted = count.toLocaleString("en-US");

  if (compact) {
    return (
      <a
        className="npm-dl npm-dl-compact"
        href={PACKAGE.npmUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${formatted} npm downloads last week`}
      >
        <span className="npm-dl-label">npm / wk</span>
        <strong className="npm-dl-count">{formatted}</strong>
      </a>
    );
  }

  return (
    <a
      className="npm-dl"
      href={PACKAGE.npmUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${formatted} npm package downloads last week`}
    >
      <div className="npm-dl-top">
        <span className="npm-dl-label">npm downloads / week</span>
      </div>
      <div className="npm-dl-row">
        <strong className="npm-dl-count">{formatted}</strong>
      </div>
      <p className="npm-dl-note">Verified package downloads · not user accounts</p>
    </a>
  );
}
