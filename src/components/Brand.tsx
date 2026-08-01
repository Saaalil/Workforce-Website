export function Mark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <rect width="18" height="18" rx="5" fill="currentColor" />
      <path
        d="M4.5 13V5h1.9l2.4 4.3L11.2 5H13v8h-1.5V8.7L9.2 12.4H8.2L5.9 8.7V13H4.5z"
        fill="#080809"
      />
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
          <Mark size={22} />
          <span>Workforce</span>
        </div>
        <div className="loader-bar" aria-hidden>
          <span />
        </div>
      </div>
    </div>
  );
}
