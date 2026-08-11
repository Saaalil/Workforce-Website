import { useEffect, useId, useState } from "react";
import { ACTIVE_USERS, PACKAGE } from "../data";

type Slide = "users" | "npm";

/**
 * One counter card. Cycles the number + label between active users and npm/week.
 */
export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  const [npmCount, setNpmCount] = useState<number | null>(null);
  const [npmStatus, setNpmStatus] = useState<"loading" | "ok" | "failed">(
    "loading"
  );
  const [slide, setSlide] = useState<Slide>("users");
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const labelId = useId();

  useEffect(() => {
    let cancelled = false;
    const url = `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(PACKAGE.name)}`;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("npm"))))
      .then((data: { downloads?: number }) => {
        if (cancelled) return;
        if (typeof data.downloads === "number") {
          setNpmCount(data.downloads);
          setNpmStatus("ok");
        } else {
          setNpmStatus("failed");
        }
      })
      .catch(() => {
        if (!cancelled) setNpmStatus("failed");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (paused || npmStatus !== "ok") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setSlide((s) => (s === "users" ? "npm" : "users"));
      setTick((t) => t + 1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, npmStatus]);

  const npmFormatted =
    npmCount !== null ? npmCount.toLocaleString("en-US") : "…";

  const showUsers = slide === "users" || npmStatus !== "ok";
  const value = showUsers ? ACTIVE_USERS.labelCount : npmFormatted;
  const label = showUsers ? ACTIVE_USERS.label : "npm downloads / week";
  const note = showUsers
    ? ACTIVE_USERS.note
    : "Verified package downloads · not user accounts";
  const badge = showUsers ? "dashboard" : "live";
  const href = showUsers ? ACTIVE_USERS.href : PACKAGE.npmUrl;

  if (compact) {
    return (
      <a
        className="npm-dl npm-dl-compact"
        href={href}
        target={showUsers ? undefined : "_blank"}
        rel={showUsers ? undefined : "noopener noreferrer"}
      >
        <span className="npm-dl-label">{showUsers ? "users" : "npm/wk"}</span>
        <strong className="npm-dl-count">{value}</strong>
      </a>
    );
  }

  return (
    <div
      className="stats-cycle"
      id={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <a
        className="npm-dl stats-one-card"
        href={href}
        target={showUsers ? undefined : "_blank"}
        rel={showUsers ? undefined : "noopener noreferrer"}
        aria-label={`${value} ${label}`}
      >
        <div className="npm-dl-top">
          <div className="stats-cycle-dots" role="tablist" aria-label="Metric">
            <button
              type="button"
              role="tab"
              aria-selected={showUsers}
              className={showUsers ? "stats-dot is-active" : "stats-dot"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSlide("users");
                setTick((t) => t + 1);
                setPaused(true);
              }}
            >
              Users
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!showUsers}
              className={!showUsers ? "stats-dot is-active" : "stats-dot"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (npmStatus === "ok") {
                  setSlide("npm");
                  setTick((t) => t + 1);
                  setPaused(true);
                }
              }}
              disabled={npmStatus !== "ok"}
            >
              npm
            </button>
          </div>
          <span className="npm-dl-live" aria-hidden>
            {badge}
          </span>
        </div>

        <p className="npm-dl-label stats-metric-label" key={`l-${tick}`}>
          {label}
        </p>
        <div className="npm-dl-row">
          <strong className="npm-dl-count stats-metric-value" key={`v-${tick}`}>
            {value}
          </strong>
        </div>
        <p className="npm-dl-note" key={`n-${tick}`}>
          {note}
        </p>
        {!paused && npmStatus === "ok" && (
          <span className="stats-progress" aria-hidden />
        )}
      </a>
    </div>
  );
}
