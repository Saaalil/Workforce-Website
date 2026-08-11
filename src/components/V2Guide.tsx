import { Link } from "react-router-dom";
import { useState } from "react";
import { V2_GUIDE_STEPS } from "../data";
import { track } from "../lib/analytics";

export function V2Guide({
  compact = false,
  showCta = false,
}: {
  compact?: boolean;
  /** Optional footer links — never embeds Install host configs */
  showCta?: boolean;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCmd = async (cmd: string) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(cmd);
      window.setTimeout(() => setCopied((c) => (c === cmd ? null : c)), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="v2-guide" aria-labelledby="v2-guide-title">
      <header className="v2-guide-head">
        <p className="section-label">Step-by-step</p>
        <h2 id="v2-guide-title" className="section-title">
          {compact ? "First case in six steps" : "Run a delivery case"}
        </h2>
        <p className="section-lead">
          MCP tools return data. The CLI persists it. Write commands need{" "}
          <span className="mono">--apply</span>. Install the server separately on{" "}
          <Link className="inline-link" to="/install">
            Install
          </Link>
          .
        </p>
      </header>

      <ol className="v2-guide-timeline">
        {V2_GUIDE_STEPS.map((step, i) => (
          <li key={step.n} className="v2-guide-step">
            <span className="v2-guide-n" aria-hidden>
              {step.n}
            </span>
            <div className="v2-guide-body">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
              <div className="v2-guide-cmd-row">
                <code className="v2-guide-cmd">{step.command}</code>
                <button
                  type="button"
                  className={`copy-btn${copied === step.command ? " is-success" : ""}`}
                  onClick={() => copyCmd(step.command)}
                >
                  {copied === step.command ? "copied" : "copy"}
                </button>
              </div>
            </div>
            {i < V2_GUIDE_STEPS.length - 1 ? (
              <span className="v2-guide-line" aria-hidden />
            ) : null}
          </li>
        ))}
      </ol>

      {showCta && (
        <div className="hero-actions v2-guide-cta">
          <Link
            className="btn btn-primary"
            to="/install"
            onClick={() =>
              track("landing_cta_clicked", {
                route: "/guide",
                cta: "need_install",
              })
            }
          >
            Need MCP install?
          </Link>
          <Link className="btn btn-ghost" to="/docs/case-file">
            Case file reference
          </Link>
        </div>
      )}
    </section>
  );
}
