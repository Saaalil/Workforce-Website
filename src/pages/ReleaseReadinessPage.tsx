import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { CaseFileDemo } from "../components/CaseFileDemo";
import { V2GatesList } from "../components/V2Sections";

export function ReleaseReadinessPage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/release-readiness"]} />
      <Reveal>
        <p className="section-label">Primary wedge</p>
        <h1 className="section-title">
          Release readiness for agent-authored PRs
        </h1>
        <p className="section-lead">
          Built for 5–50 eng B2B SaaS teams shipping TypeScript web/API changes
          where agent drafts create review anxiety — especially auth, payments,
          webhooks, and protected paths.
        </p>
      </Reveal>

      <Reveal className="doc-block">
        <h2>What “ready” means here</h2>
        <p className="section-lead use-lead">
          Not “the agent said it works.” A Workforce case where commitments are
          complete, required gates have evidence, and{" "}
          <span className="mono">workforce review</span> returns{" "}
          <span className="mono">ready</span> for your release intent (
          <span className="mono">draft_pr</span> vs{" "}
          <span className="mono">ready_to_merge</span>).
        </p>
        <ul className="plain-list" style={{ marginTop: "1rem" }}>
          <li>
            Protected paths (e.g. <span className="mono">auth/</span>) without
            security evidence → blocked / fail
          </li>
          <li>
            Tests not supplied as <span className="mono">result: pass</span> →
            cannot invent a pass
          </li>
          <li>
            Open or blocked commitments → not ready for merge intent
          </li>
        </ul>
      </Reveal>

      <Reveal>
        <h2 className="use-title">OAuth / SSO example</h2>
        <p className="section-lead use-lead">
          Request: <em>Add enterprise OAuth with SSO enforcement</em>. Typical
          roster: <span className="mono">ARCH → BE → SEC → QA</span>. UI and DS
          excluded with reasons. Security gate stays blocked until threat-model
          notes exist — then review can move to ready.
        </p>
      </Reveal>

      <Reveal>
        <CaseFileDemo />
      </Reveal>

      <Reveal>
        <V2GatesList />
      </Reveal>

      <Reveal className="hero-actions">
        <Link className="btn btn-primary" to="/guide">
          Step-by-step
        </Link>
        <Link className="btn btn-ghost" to="/install">
          Install MCP
        </Link>
      </Reveal>
    </section>
  );
}
