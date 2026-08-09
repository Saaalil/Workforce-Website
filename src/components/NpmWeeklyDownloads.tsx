import { useId } from "react";
import { PACKAGE } from "../data";

/** Hardcoded social proof — keep in sync everywhere this number is shown. */
export const USERS_COUNT_LABEL = "1k";
export const USERS_COUNT_FULL = "1,000";

/** Synthetic upward trend for the sparkline (not live npm data). */
const UPWARD_SERIES = [12, 18, 16, 24, 28, 35, 42, 48, 55, 68, 72, 88];

function sparklinePath(values: number[], w: number, h: number): string {
  if (values.length < 2) return "";
  const max = Math.max(...values, 1);
  const step = w / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = h - (v / max) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  const gid = useId().replace(/:/g, "");
  const path = sparklinePath(UPWARD_SERIES, 120, 36);

  if (compact) {
    return (
      <a
        className="npm-dl npm-dl-compact"
        href={PACKAGE.npmUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${USERS_COUNT_FULL} users`}
      >
        <span className="npm-dl-label">users</span>
        <strong className="npm-dl-count">{USERS_COUNT_LABEL}</strong>
        <span className="npm-dl-live" aria-hidden>
          live
        </span>
      </a>
    );
  }

  return (
    <a
      className="npm-dl"
      href={PACKAGE.npmUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${USERS_COUNT_FULL} users`}
    >
      <div className="npm-dl-top">
        <span className="npm-dl-label">Users</span>
        <span className="npm-dl-live" aria-hidden>
          live
        </span>
      </div>
      <div className="npm-dl-row">
        <strong className="npm-dl-count">{USERS_COUNT_LABEL}</strong>
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
      </div>
      <span className="npm-dl-pkg">{PACKAGE.name}</span>
    </a>
  );
}
