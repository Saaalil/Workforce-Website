import type { ReactElement } from "react";

/** Supported MCP hosts — infinite left-scrolling logo bar */

type HostItem = {
  id: string;
  name: string;
  Mark: () => ReactElement;
};

function CursorMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="currentColor"
        d="M4 4.5 19.5 12 4 19.5V14l8-2-8-2V4.5Z"
      />
    </svg>
  );
}

function OpenCodeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M8 7 3.5 12 8 17M16 7l4.5 5L16 17M13.2 5.5 10.8 18.5"
      />
    </svg>
  );
}

function CommandCodeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 8.5H6a2 2 0 0 0 0 4h2.5M15.5 8.5H18a2 2 0 0 1 0 4h-2.5M8.5 15.5H6a2 2 0 0 1 0-4h2.5M15.5 15.5H18a2 2 0 0 0 0-4h-2.5M8.5 8.5v7M15.5 8.5v7"
      />
    </svg>
  );
}

function MetaCodeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M3.5 15.5c1.8-4.5 3.2-7 5-7 1.6 0 2.4 2.2 3.5 5.5S14.2 19 15.5 19c1.8 0 3.2-2.5 5-7"
      />
    </svg>
  );
}

function ClaudeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="currentColor"
        d="M12 3.2 14.6 9l5.9.4-4.5 3.8 1.4 5.8L12 15.8 6.6 19l1.4-5.8L3.5 9.4 9.4 9 12 3.2Z"
        opacity="0.92"
      />
    </svg>
  );
}

function AntigravityMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="host-mark">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8L12 3.5Z"
      />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

const HOSTS: HostItem[] = [
  { id: "cursor", name: "Cursor", Mark: CursorMark },
  { id: "opencode", name: "OpenCode", Mark: OpenCodeMark },
  { id: "commandcode", name: "Command Code", Mark: CommandCodeMark },
  { id: "metacode", name: "Meta Code", Mark: MetaCodeMark },
  { id: "claudecode", name: "Claude Code", Mark: ClaudeMark },
  { id: "antigravity", name: "Antigravity", Mark: AntigravityMark },
];

function HostChip({ host }: { host: HostItem }) {
  const { Mark } = host;
  return (
    <span className="host-chip">
      <Mark />
      <span className="host-chip-name">{host.name}</span>
    </span>
  );
}

export function HostsMarquee({ label = "Works with" }: { label?: string }) {
  const loop = [...HOSTS, ...HOSTS];

  return (
    <div className="hosts-marquee" aria-label={`${label}: ${HOSTS.map((h) => h.name).join(", ")}`}>
      <p className="hosts-marquee-label">{label}</p>
      <div className="hosts-marquee-viewport">
        <div className="hosts-marquee-track">
          {loop.map((host, i) => (
            <HostChip key={`${host.id}-${i}`} host={host} />
          ))}
        </div>
      </div>
    </div>
  );
}
