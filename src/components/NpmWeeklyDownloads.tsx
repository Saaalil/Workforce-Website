import { useEffect, useId, useState } from "react";
import { PACKAGE } from "../data";

type Point = { day: string; downloads: number };

type Status = "loading" | "ready" | "error";

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function sparklinePath(points: Point[], w: number, h: number): string {
  if (points.length < 2) return "";
  const max = Math.max(...points.map((p) => p.downloads), 1);
  const step = w / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * step;
      const y = h - (p.downloads / max) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  const gid = useId().replace(/:/g, "");
  const [status, setStatus] = useState<Status>("loading");
  const [weekly, setWeekly] = useState<number | null>(null);
  const [series, setSeries] = useState<Point[]>([]);

  useEffect(() => {
    const pkg = encodeURIComponent(PACKAGE.name);
    const ctrl = new AbortController();

    async function load() {
      try {
        const [pointRes, rangeRes] = await Promise.all([
          fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`, {
            signal: ctrl.signal,
          }),
          fetch(`https://api.npmjs.org/downloads/range/last-week/${pkg}`, {
            signal: ctrl.signal,
          }),
        ]);
        if (!pointRes.ok) throw new Error(`point ${pointRes.status}`);
        const point = (await pointRes.json()) as { downloads: number };
        setWeekly(point.downloads);

        if (rangeRes.ok) {
          const range = (await rangeRes.json()) as { downloads: Point[] };
          setSeries(range.downloads ?? []);
        }
        setStatus("ready");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setStatus("error");
      }
    }

    void load();
    return () => ctrl.abort();
  }, []);

  const path = sparklinePath(series, 120, 36);
  const label =
    status === "loading"
      ? "…"
      : status === "error"
        ? "—"
        : formatCount(weekly ?? 0);

  if (compact) {
    return (
      <a
        className="npm-dl npm-dl-compact"
        href={PACKAGE.npmUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Weekly downloads on npm (live)"
      >
        <span className="npm-dl-label">weekly downloads</span>
        <strong className="npm-dl-count">{label}</strong>
      </a>
    );
  }

  return (
    <a
      className="npm-dl"
      href={PACKAGE.npmUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Weekly npm downloads: ${label}`}
    >
      <div className="npm-dl-top">
        <span className="npm-dl-label">Weekly downloads</span>
        <span className="npm-dl-live" aria-hidden>
          live
        </span>
      </div>
      <div className="npm-dl-row">
        <strong className="npm-dl-count">{label}</strong>
        {path ? (
          <svg
            className="npm-dl-spark"
            viewBox="0 0 120 36"
            width="120"
            height="36"
            aria-hidden
          >
            <defs>
              <linearGradient id={`npm-grad-${gid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(243,241,238,0.35)" />
                <stop offset="100%" stopColor="rgba(243,241,238,0)" />
              </linearGradient>
            </defs>
            <path
              d={`${path} L120 36 L0 36 Z`}
              fill={`url(#npm-grad-${gid})`}
            />
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        ) : null}
      </div>
      <span className="npm-dl-pkg">{PACKAGE.name}</span>
    </a>
  );
}
