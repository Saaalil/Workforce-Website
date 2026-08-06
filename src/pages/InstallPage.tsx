import { useId, useState } from "react";
import {
  CLAUDE_CLI_CMD,
  CLAUDE_CLI_CMD_WIN,
  CLAUDE_GUIDE,
  CLAUDE_MCP_JSON,
  CURSOR_CONFIG,
  CURSOR_GUIDE,
  ANTIGRAVITY_CONFIG,
  ANTIGRAVITY_CONFIG_PATHS,
  ANTIGRAVITY_GUIDE,
  LOCAL_CONFIG,
  NPM_INSTALL_CMD,
  NPM_INSTALL_CONFIG,
  ORCHESTRATION_PROMPTS,
  PROMPT_GROUPS,
  TOOLS,
  USAGE_PROMPTS,
} from "../data";
import { Reveal } from "../components/Reveal";

function highlightJson(src: string) {
  return src
    .replace(/("(?:\\.|[^"\\])*")\s*:/g, '<span class="k">$1</span>:')
    .replace(/: ("(?:\\.|[^"\\])*")/g, ': <span class="s">$1</span>')
    .replace(/\[("(?:\\.|[^"\\])*")\]/g, '[<span class="s">$1</span>]')
    .replace(/([{}\[\],])/g, '<span class="p">$1</span>');
}

function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setErrorKey(null);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1500);
    } catch {
      setErrorKey(key);
      window.setTimeout(() => setErrorKey((k) => (k === key ? null : k)), 1800);
    }
  };

  return { copiedKey, errorKey, copy };
}

export function InstallPage() {
  const [host, setHost] = useState<"cursor" | "claude" | "antigravity">(
    "cursor"
  );
  const [configTab, setConfigTab] = useState<"npx" | "npm" | "local">("npx");
  const [cliTab, setCliTab] = useState<"unix" | "win" | "json">("unix");
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const hostId = useId();
  const configId = useId();
  const { copiedKey, errorKey, copy } = useCopy();

  const ideConfig =
    configTab === "npx"
      ? CURSOR_CONFIG
      : configTab === "npm"
        ? NPM_INSTALL_CONFIG
        : LOCAL_CONFIG;
  const ideCopyText =
    configTab === "npm"
      ? `${NPM_INSTALL_CMD}\n\n${NPM_INSTALL_CONFIG}`
      : ideConfig;
  const cliSnippet =
    cliTab === "unix"
      ? CLAUDE_CLI_CMD
      : cliTab === "win"
        ? CLAUDE_CLI_CMD_WIN
        : CLAUDE_MCP_JSON;

  const copyPrompt = async (flag: string, prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(flag);
      window.setTimeout(() => setCopiedPrompt(null), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">Setup</p>
        <h1 className="section-title">Install in under two minutes</h1>
        <p className="section-lead">
          Published on npm as{" "}
          <a
            className="inline-link"
            href="https://www.npmjs.com/package/@saaalil/workforce-mcp"
            target="_blank"
            rel="noopener noreferrer"
          >
            @saaalil/workforce-mcp
          </a>
          . Works in <strong>Cursor</strong>, <strong>Claude</strong>, and{" "}
          <strong>Google Antigravity</strong>. Prefer{" "}
          <span className="mono">npx</span> — use{" "}
          <span className="mono">@1.4.3</span>+ (fixes the old shebang crash).
        </p>
      </Reveal>

      <Reveal>
        <div className="guide">
          <div
            className="install-tabs guide-host-tabs"
            role="tablist"
            aria-label="Install target"
          >
            <button
              type="button"
              role="tab"
              id={`${hostId}-cursor`}
              aria-selected={host === "cursor"}
              aria-controls={`${hostId}-panel`}
              tabIndex={host === "cursor" ? 0 : -1}
              className={`install-tab${host === "cursor" ? " is-active" : ""}`}
              onClick={() => setHost("cursor")}
            >
              Cursor / AI IDE
            </button>
            <button
              type="button"
              role="tab"
              id={`${hostId}-claude`}
              aria-selected={host === "claude"}
              aria-controls={`${hostId}-panel`}
              tabIndex={host === "claude" ? 0 : -1}
              className={`install-tab${host === "claude" ? " is-active" : ""}`}
              onClick={() => setHost("claude")}
            >
              Claude Code / CLI
            </button>
            <button
              type="button"
              role="tab"
              id={`${hostId}-antigravity`}
              aria-selected={host === "antigravity"}
              aria-controls={`${hostId}-panel`}
              tabIndex={host === "antigravity" ? 0 : -1}
              className={`install-tab${host === "antigravity" ? " is-active" : ""}`}
              onClick={() => setHost("antigravity")}
            >
              Antigravity
            </button>
          </div>

          <div
            className="guide-panel"
            role="tabpanel"
            id={`${hostId}-panel`}
            aria-labelledby={`${hostId}-${host}`}
          >
            {host === "cursor" ? (
              <>
                <p className="guide-intro">
                  For Cursor and other MCP-capable IDEs. Package:{" "}
                  <span className="mono">@saaalil/workforce-mcp</span>.{" "}
                  <span className="mono">npx</span> runs the published server
                  with no project install. <span className="mono">npm i</span>{" "}
                  installs it into the repo — then use the{" "}
                  <span className="mono">node_modules</span> path in MCP config.
                </p>
                <ol className="guide-steps">
                  {CURSOR_GUIDE.map((step, i) => (
                    <li key={step.title} className="guide-step">
                      <span className="guide-n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="guide-snippet-label">MCP config</p>
                <div className="install">
                  <div
                    className="install-tabs"
                    role="tablist"
                    aria-label="Config variant"
                  >
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-npx`}
                      aria-selected={configTab === "npx"}
                      aria-controls={`${configId}-panel`}
                      tabIndex={configTab === "npx" ? 0 : -1}
                      className={`install-tab${configTab === "npx" ? " is-active" : ""}`}
                      onClick={() => setConfigTab("npx")}
                    >
                      npx
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-npm`}
                      aria-selected={configTab === "npm"}
                      aria-controls={`${configId}-panel`}
                      tabIndex={configTab === "npm" ? 0 : -1}
                      className={`install-tab${configTab === "npm" ? " is-active" : ""}`}
                      onClick={() => setConfigTab("npm")}
                    >
                      npm install
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-local`}
                      aria-selected={configTab === "local"}
                      aria-controls={`${configId}-panel`}
                      tabIndex={configTab === "local" ? 0 : -1}
                      className={`install-tab${configTab === "local" ? " is-active" : ""}`}
                      onClick={() => setConfigTab("local")}
                    >
                      local clone
                    </button>
                  </div>
                  <div
                    className="install-body"
                    role="tabpanel"
                    id={`${configId}-panel`}
                    aria-labelledby={`${configId}-${configTab}`}
                  >
                    {configTab === "npm" ? (
                      <div key="npm" className="code-fade npm-install-block">
                        <p className="npm-install-note">
                          Optional: add the package to a Node project (what
                          npmjs shows). This alone does{" "}
                          <strong>not</strong> configure Cursor.
                        </p>
                        <pre>{NPM_INSTALL_CMD}</pre>
                        <p className="npm-install-note">
                          For Cursor MCP, still use{" "}
                          <span className="mono">npx</span> (same as the npx
                          tab). Never point{" "}
                          <span className="mono">command: node</span> at{" "}
                          <span className="mono">./node_modules/...</span>{" "}
                          unless that folder exists in the open workspace.
                        </p>
                        <pre
                          dangerouslySetInnerHTML={{
                            __html: highlightJson(NPM_INSTALL_CONFIG),
                          }}
                        />
                      </div>
                    ) : (
                      <pre
                        key={configTab}
                        className="code-fade"
                        dangerouslySetInnerHTML={{
                          __html: highlightJson(ideConfig),
                        }}
                      />
                    )}
                  </div>
                  <div className="copy-row">
                    <button
                      type="button"
                      className={`copy-btn${copiedKey === "ide" ? " is-success" : ""}${errorKey === "ide" ? " is-error" : ""}`}
                      onClick={() => copy("ide", ideCopyText)}
                    >
                      {errorKey === "ide"
                        ? "copy failed"
                        : copiedKey === "ide"
                          ? "copied"
                          : "copy"}
                    </button>
                  </div>
                </div>
              </>
            ) : host === "antigravity" ? (
              <>
                <p className="guide-intro">
                  <strong>Now available in Antigravity as well!</strong> Google
                  Antigravity IDE / CLI use{" "}
                  <span className="mono">mcp_config.json</span> (
                  {ANTIGRAVITY_CONFIG_PATHS}). Same Workforce tools and prompts
                  as Cursor.
                </p>
                <ol className="guide-steps">
                  {ANTIGRAVITY_GUIDE.map((step, i) => (
                    <li key={step.title} className="guide-step">
                      <span className="guide-n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="guide-snippet-label">mcp_config.json</p>
                <div className="install">
                  <div className="install-body" role="tabpanel">
                    <pre
                      className="code-fade"
                      dangerouslySetInnerHTML={{
                        __html: highlightJson(ANTIGRAVITY_CONFIG),
                      }}
                    />
                  </div>
                  <div className="copy-row">
                    <button
                      type="button"
                      className={`copy-btn${copiedKey === "agy" ? " is-success" : ""}${errorKey === "agy" ? " is-error" : ""}`}
                      onClick={() => copy("agy", ANTIGRAVITY_CONFIG)}
                    >
                      {errorKey === "agy"
                        ? "copy failed"
                        : copiedKey === "agy"
                          ? "copied"
                          : "copy"}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="guide-intro">
                  For Claude Code and other CLI coding harnesses that speak MCP
                  over stdio.
                </p>
                <ol className="guide-steps">
                  {CLAUDE_GUIDE.map((step, i) => (
                    <li key={step.title} className="guide-step">
                      <span className="guide-n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="guide-snippet-label">CLI / project config</p>
                <div className="install">
                  <div
                    className="install-tabs"
                    role="tablist"
                    aria-label="CLI variant"
                  >
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-unix`}
                      aria-selected={cliTab === "unix"}
                      aria-controls={`${configId}-cli-panel`}
                      tabIndex={cliTab === "unix" ? 0 : -1}
                      className={`install-tab${cliTab === "unix" ? " is-active" : ""}`}
                      onClick={() => setCliTab("unix")}
                    >
                      macOS / Linux
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-win`}
                      aria-selected={cliTab === "win"}
                      aria-controls={`${configId}-cli-panel`}
                      tabIndex={cliTab === "win" ? 0 : -1}
                      className={`install-tab${cliTab === "win" ? " is-active" : ""}`}
                      onClick={() => setCliTab("win")}
                    >
                      Windows
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id={`${configId}-json`}
                      aria-selected={cliTab === "json"}
                      aria-controls={`${configId}-cli-panel`}
                      tabIndex={cliTab === "json" ? 0 : -1}
                      className={`install-tab${cliTab === "json" ? " is-active" : ""}`}
                      onClick={() => setCliTab("json")}
                    >
                      .mcp.json
                    </button>
                  </div>
                  <div
                    className="install-body"
                    role="tabpanel"
                    id={`${configId}-cli-panel`}
                    aria-labelledby={`${configId}-${cliTab}`}
                  >
                    {cliTab === "json" ? (
                      <pre
                        key="json"
                        className="code-fade"
                        dangerouslySetInnerHTML={{
                          __html: highlightJson(CLAUDE_MCP_JSON),
                        }}
                      />
                    ) : (
                      <pre key={cliTab} className="code-fade">
                        {cliSnippet}
                      </pre>
                    )}
                  </div>
                  <div className="copy-row">
                    <button
                      type="button"
                      className={`copy-btn${copiedKey === "cli" ? " is-success" : ""}${errorKey === "cli" ? " is-error" : ""}`}
                      onClick={() => copy("cli", cliSnippet)}
                    >
                      {errorKey === "cli"
                        ? "copy failed"
                        : copiedKey === "cli"
                          ? "copied"
                          : "copy"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="use-block">
          <p className="section-label">How to use</p>
          <h2 className="use-title">Every call — what you can achieve</h2>
          <p className="section-lead use-lead">
            After install, reload MCP. You’ll see tools (
            <span className="mono">workforce_as</span>, …) and specialty
            prompts (<span className="mono">workforce/UI</span>, …). Call a
            specialty with your task; the agent investigates, then returns Goal
            / Blocking questions / Assumptions / Plan and waits for your OK.
          </p>

          <ol className="use-steps">
            <li>Install + reload MCP</li>
            <li>
              Call a tool or <span className="mono">workforce/…</span> prompt
              with your task
            </li>
            <li>Approve the plan (or answer 0–3 blocking questions), then ship</li>
          </ol>
        </div>
      </Reveal>

      <Reveal>
        <p className="guide-snippet-label">Tools</p>
        <h3 className="use-subtitle">Underscore calls — control the MCP</h3>
      </Reveal>

      <div className="achieve-list">
        {TOOLS.map((t, i) => (
          <Reveal
            key={t.name}
            className="achieve-row"
            delayMs={Math.min(i * 30, 120)}
          >
            <code className="call-chip">{t.name}</code>
            <p>{t.achieves}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="use-block use-block-tight">
          <p className="guide-snippet-label">Orchestration</p>
          <h3 className="use-subtitle">Discuss → delegate → execute</h3>
          <p className="section-lead use-lead">
            Multi-specialty meeting, then an ownership plan — then load one craft
            specialty at a time.
          </p>
        </div>
      </Reveal>

      <div className="prompt-catalog">
        {ORCHESTRATION_PROMPTS.map((g, i) => (
          <Reveal
            key={g.flag}
            className="prompt-catalog-item"
            delayMs={Math.min(i * 20, 80)}
          >
            <div className="prompt-catalog-head">
              <span className="prompt-flag">workforce/{g.flag}</span>
              <h3 className="specialty-name">{g.name}</h3>
            </div>
            <p className="prompt-catalog-achieves">
              <strong>Achieve:</strong> {g.achieves}
            </p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {g.when}
            </p>
            <div className="call-chips" aria-label={`Calls for ${g.name}`}>
              {g.calls.map((c) => (
                <code key={c} className="call-chip">
                  {c}
                </code>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="use-block use-block-tight">
          <p className="guide-snippet-label">Specialty prompts</p>
          <h3 className="use-subtitle">
            Slash calls — load specialist context
          </h3>
          <p className="section-lead use-lead">
            Each group is one specialty. Any chip in the group loads the same
            context — short flags like <span className="mono">workforce/DE</span>{" "}
            are enough.
          </p>
        </div>
      </Reveal>

      <div className="prompt-catalog">
        {PROMPT_GROUPS.map((g, i) => (
          <Reveal
            key={g.flag}
            className="prompt-catalog-item"
            delayMs={Math.min(i * 20, 160)}
          >
            <div className="prompt-catalog-head">
              <span className="prompt-flag">workforce/{g.flag}</span>
              <h3 className="specialty-name">{g.name}</h3>
            </div>
            <p className="prompt-catalog-achieves">
              <strong>Achieve:</strong> {g.achieves}
            </p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {g.when}
            </p>
            <div className="call-chips" aria-label={`Calls for ${g.name}`}>
              {g.calls.map((c) => (
                <code key={c} className="call-chip">
                  {c}
                </code>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="use-block">
          <p className="section-label">Example prompts</p>
          <h2 className="use-title">Copy a starter line</h2>
          <p className="section-lead use-lead">
            Paste into chat after the specialty is selected — or include the{" "}
            <span className="mono">workforce/…</span> call in the same message.
          </p>
        </div>
      </Reveal>

      <div className="prompt-list">
        {USAGE_PROMPTS.map((u, i) => (
          <Reveal
            key={u.flag}
            className="prompt-row"
            delayMs={Math.min(i * 20, 160)}
          >
            <div className="prompt-meta">
              <span className="prompt-flag">workforce/{u.flag}</span>
              <p>{u.when}</p>
            </div>
            <div className="prompt-body">
              <code>{u.prompt}</code>
              <button
                type="button"
                className={`copy-btn${copiedPrompt === u.flag ? " is-success" : ""}`}
                onClick={() => copyPrompt(u.flag, u.prompt)}
              >
                {copiedPrompt === u.flag ? "copied" : "copy"}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
