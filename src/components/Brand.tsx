/** Official Workforce mark — hexagon W (PNG for exact brand match). */
export function Mark({ size = 18 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden
      className="brand-mark"
      style={{ width: size, height: size }}
    />
  );
}

/** Inline SVG variant (inherits currentColor) for mono contexts. */
export function MarkSvg({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      aria-hidden
      className="brand-mark-svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M64 14 L106 38 L106 90 L64 114 L22 90 L22 38 Z" />
        <path d="M42 38 V66 C42 79 51 86 64 86 C77 86 86 79 86 66 V38" />
        <path d="M52 78 L64 66 L76 78" />
      </g>
    </svg>
  );
}

export function Loader({ done }: { done: boolean }) {
  return (
    <div
      className={`loader${done ? " is-done" : ""}`}
      aria-hidden={done}
      role="status"
      aria-live="polite"
      aria-label={done ? undefined : "Loading Workforce"}
    >
      <div className="loader-mark">
        <div className="loader-word">
          <Mark size={26} />
          <span>Workforce</span>
        </div>
        <div className="loader-bar" aria-hidden>
          <span />
        </div>
      </div>
    </div>
  );
}
