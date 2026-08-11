import { useEffect, useId, useState } from "react";
import { ACTIVE_USERS, PACKAGE } from "../data";

type Slide = "users" | "npm";

/**
 * Cycles active users (editable dashboard count) ↔ npm weekly downloads.
 */
export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  const [npmCount, setNpmCount] = useState<number | null>(null);
  const [npmStatus, setNpmStatus] = useState<"loading" | "ok" | "failed">(
    "loading"
  );
  const [slide, setSlide] = useState<Slide>("users");
  const [paused, setPaused] = useState(false);
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
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, npmStatus]);

  const npmFormatted =
    npmCount !== null ? npmCount.toLocaleString("en-US") : null;

  if (compact) {
    return (
      <div className="npm-dl npm-dl-compact stats-cycle-compact">
        <span className="npm-dl-label">users</span>
        <strong className="npm-dl-count">{ACTIVE_USERS.labelCount}</strong>
        {npmFormatted ? (
          <>
            <span className="stats-cycle-sep" aria-hidden>
              ·
            </span>
            <span className="npm-dl-label">npm/wk</span>
            <strong className="npm-dl-count">{npmFormatted}</strong>
          </>
        ) : null}
      </div>
    );
  }

  const showUsers = slide === "users" || npmStatus !== "ok";

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
      <div className="stats-cycle-dots" role="tablist" aria-label="Stats">
        <button
          type="button"
          role="tab"
          aria-selected={showUsers}
          className={showUsers ? "stats-dot is-active" : "stats-dot"}
          onClick={() => {
            setSlide("users");
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
          onClick={() => {
            setSlide("npm");
            setPaused(true);
          }}
          disabled={npmStatus !== "ok"}
        >
          npm
        </button>
      </div>

      {showUsers ? (
        <a
          className="npm-dl stats-slide"
          href={ACTIVE_USERS.href}
          aria-label={`${ACTIVE_USERS.labelCount} ${ACTIVE_USERS.label}`}
        >
          <div className="npm-dl-top">
            <span className="npm-dl-label">{ACTIVE_USERS.label}</span>
            <span className="npm-dl-live" aria-hidden>
              dashboard
            </span>
          </div>
          <div className="npm-dl-row">
            <strong className="npm-dl-count">{ACTIVE_USERS.labelCount}</strong>
          </div>
          <p className="npm-dl-note">{ACTIVE_USERS.note}</p>
        </a>
      ) : (
        <a
          className="npm-dl stats-slide"
          href={PACKAGE.npmUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${npmFormatted} npm package downloads last week`}
        >
          <div className="npm-dl-top">
            <span className="npm-dl-label">npm downloads / week</span>
            <span className="npm-dl-live" aria-hidden>
              live
            </span>
          </div>
          <div className="npm-dl-row">
            <strong className="npm-dl-count">{npmFormatted}</strong>
          </div>
          <p className="npm-dl-note">
            Verified package downloads · not user accounts
          </p>
        </a>
      )}
    </div>
  );
}
