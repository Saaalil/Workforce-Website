import { useId, useState } from "react";
import {
  CLAUDE_CLI_CMD,
  CLAUDE_CLI_CMD_WIN,
  CLAUDE_GUIDE,
  CLAUDE_MCP_JSON,
  CURSOR_CONFIG,
  CURSOR_GUIDE,
  LOCAL_CONFIG,
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
  const [host, setHost] = useState<"cursor" | "claude">("cursor");
  const [configTab, setConfigTab] = useState<"npx" | "local">("npx");
  const [cliTab, setCliTab] = useState<"unix" | "win" | "json">("unix");
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const hostId = useId();
  const configId = useId();
  const { copiedKey, errorKey, copy } = useCopy();

  const ideConfig = configTab === "npx" ? CURSOR_CONFIG : LOCAL_CONFIG;
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
          Add Workforce once, then call prompts like{" "}
          <span className="mono">workforce/UI</span> or{" "}
          <span className="mono">workforce/FE</span>. Same MCP for Cursor-style
          IDEs and Claude Code / CLI harnesses.
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
                  For Cursor and other MCP-capable IDEs that use an{" "}
                  <span className="mono">mcpServers</span> JSON config.
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
                    <pre
                      key={configTab}
                      className="code-fade"
                      dangerouslySetInnerHTML={{
                        __html: highlightJson(ideConfig),
                      }}
                    />
                  </div>
                  <div className="copy-row">
                    <button
                      type="button"
                      className={`copy-btn${copiedKey === "ide" ? " is-success" : ""}${errorKey === "ide" ? " is-error" : ""}`}
                      onClick={() => copy("ide", ideConfig)}
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
          <h2 className="use-title">Call the prompt. Get the specialty.</h2>
          <p className="section-lead use-lead">
            After install, reload MCP and pick a Workforce prompt —{" "}
            <span className="mono">workforce/UI</span>,{" "}
            <span className="mono">workforce/DE</span>, and so on. Your agent
            runs it through <span className="mono">workforce_as</span> and
            loads that specialty’s full context.
          </p>

          <ol className="use-steps">
            <li>Install + reload MCP</li>
            <li>
              Call <span className="mono">workforce/…</span> with your task
            </li>
            <li>Answer the specialty’s discovery questions, then ship</li>
          </ol>
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
