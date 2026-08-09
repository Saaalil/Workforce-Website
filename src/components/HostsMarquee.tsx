import type { ReactElement } from "react";
import cursorLogo from "../assets/hosts/cursor-icon.png";
import openCodeLogo from "../assets/hosts/opencode-logo.svg";
import commandCodeLogo from "../assets/hosts/commandcode-icon.png";
import museLogo from "../assets/hosts/meta-icon.png";
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
  { id: "musecode", name: "Muse Code", src: museLogo },
  { id: "claudecode", name: "Claude Code", src: claudeLogo },
  { id: "codex", name: "Codex", src: openAiLogo },
  { id: "antigravity", name: "Antigravity", src: antigravityLogo },
  { id: "t3code", name: "T3 Code", src: "https://t3.gg/favicon.ico" },
  { id: "hermes", name: "Hermes Agent", src: "https://hermes-agent.nousresearch.com/favicon.ico" },
  { id: "gemini", name: "Gemini CLI", src: "https://cdn.simpleicons.org/googlegemini" },
  { id: "cline", name: "Cline", src: "https://cdn.simpleicons.org/cline" },
  { id: "roo", name: "Roo Code", src: "https://roocode.com/favicon.ico" },
  { id: "windsurf", name: "Windsurf", src: "https://codeium.com/favicon.ico" },
  { id: "copilot", name: "GitHub Copilot", src: "https://github.com/favicon.ico" },
  { id: "vscode", name: "VS Code", src: "https://code.visualstudio.com/favicon.ico" },
  { id: "kiro", name: "Kiro", src: "https://kiro.dev/favicon.ico" },
  { id: "goose", name: "Goose", src: "https://raw.githubusercontent.com/aaif-goose/goose/main/ui/desktop/src/images/glyph.svg" },
  { id: "zed", name: "Zed", src: "https://cdn.simpleicons.org/zedindustries" },
  { id: "continue", name: "Continue", src: "https://raw.githubusercontent.com/continuedev/continue/main/docs-site/public/images/continue-logo-light.png" },
  { id: "amazonq", name: "Amazon Q", src: "https://aws.amazon.com/favicon.ico" },
  { id: "jetbrains", name: "JetBrains AI", src: "https://www.jetbrains.com/favicon.ico" },
  { id: "amp", name: "Amp", src: "https://ampcode.com/favicon.ico" },
  { id: "factory", name: "Factory Droid", src: "https://factory.ai/favicon.ico" },
  { id: "crush", name: "Crush", src: "https://charm.land/favicon.ico" },
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
