import type { ReactElement } from "react";
import cursorLogo from "../assets/hosts/cursor-icon.png";
import openCodeLogo from "../assets/hosts/opencode-logo.svg";
import commandCodeLogo from "../assets/hosts/commandcode-icon.png";
import metaLogo from "../assets/hosts/meta-icon.png";
import claudeLogo from "../assets/hosts/claude-icon.png";
import openAiLogo from "../assets/hosts/openai-icon.png";
import antigravityLogo from "../assets/hosts/antigravity.png";

type HostItem = {
  id: string;
  name: string;
  src: string;
};

const HOSTS: HostItem[] = [
  { id: "cursor", name: "Cursor", src: cursorLogo },
  { id: "opencode", name: "OpenCode", src: openCodeLogo },
  { id: "commandcode", name: "Command Code", src: commandCodeLogo },
  { id: "metacode", name: "Meta Code", src: metaLogo },
  { id: "claudecode", name: "Claude Code", src: claudeLogo },
  { id: "codex", name: "Codex", src: openAiLogo },
  { id: "antigravity", name: "Antigravity", src: antigravityLogo },
];

function HostChip({ host }: { host: HostItem }): ReactElement {
  return (
    <span className="host-chip">
      <img
        className="host-logo"
        src={host.src}
        alt=""
        width={28}
        height={28}
        decoding="async"
        draggable={false}
      />
      <span className="host-chip-name">{host.name}</span>
    </span>
  );
}

export function HostsMarquee({ label = "Works with" }: { label?: string }) {
  const loop = [...HOSTS, ...HOSTS];

  return (
    <div
      className="hosts-marquee"
      aria-label={`${label}: ${HOSTS.map((h) => h.name).join(", ")}`}
    >
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
