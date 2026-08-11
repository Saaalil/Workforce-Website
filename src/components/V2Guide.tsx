import { Link } from "react-router-dom";
import { V2_GUIDE_STEPS } from "../data";
import { track } from "../lib/analytics";

export function V2Guide({
  compact = false,
  showInstallCta = true,
}: {
  compact?: boolean;
  showInstallCta?: boolean;
}) {
  return (
    <section className="v2-guide" aria-labelledby="v2-guide-title">
      <p className="section-label">Step-by-step</p>
      <h2 id="v2-guide-title" className="section-title">
        {compact ? "First case in seven steps" : "How to run Workforce V2"}
      </h2>
      <p className="section-lead">
        MCP tools return data. The CLI persists it. Write commands need{" "}
        <span className="mono">--apply</span>.
      </p>
      <ol className="v2-guide-list">
        {V2_GUIDE_STEPS.map((step) => (
          <li key={step.n} className="v2-guide-item">
            <span className="v2-guide-n" aria-hidden>
              {step.n}
            </span>
            <div>
              <h3>{step.title}</h3>
              {!compact && <p>{step.detail}</p>}
              {compact && (
                <p className="v2-guide-compact-detail">{step.detail}</p>
              )}
              <pre className="v2-guide-cmd">
                <code>{step.command}</code>
              </pre>
            </div>
          </li>
        ))}
      </ol>
      {showInstallCta && (
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <Link
            className="btn btn-primary"
            to="/install"
            onClick={() =>
              track("landing_cta_clicked", { route: "/how", cta: "full_install" })
            }
          >
            Full install configs
          </Link>
          <Link className="btn btn-ghost" to="/docs/case-file">
            Case file reference
          </Link>
        </div>
      )}
    </section>
  );
}
