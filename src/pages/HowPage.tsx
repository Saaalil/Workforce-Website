import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { V2Guide } from "../components/V2Guide";
import {
  V2Outcomes,
  V2ProofGrid,
  V1VsV2Table,
  V2GatesList,
  V2ToolsList,
} from "../components/V2Sections";
import { CaseFileDemo } from "../components/CaseFileDemo";
import { PAGE_SEO } from "../lib/seo";

export function HowPage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/how"]} />
      <Reveal>
        <p className="section-label">How V2 works</p>
        <h1 className="section-title">
          From request to release decision
        </h1>
        <p className="section-lead">
          Workforce V2 is a <strong>local delivery protocol</strong> for AI
          coding agents. Specialist context (V1) still loads with{" "}
          <span className="mono">workforce/SEC</span> and friends. V2 adds a
          shared case file so ownership and evidence survive chat sessions and
          host switches.
        </p>
        <p className="section-lead" style={{ marginTop: "0.75rem" }}>
          Positioning:{" "}
          <em>
            shared team memory, clear ownership, and proof of delivery
          </em>
          .
        </p>
      </Reveal>

      <Reveal>
        <V2Outcomes />
      </Reveal>

      <Reveal>
        <V1VsV2Table />
      </Reveal>

      <Reveal>
        <V2Guide />
      </Reveal>

      <Reveal>
        <CaseFileDemo />
      </Reveal>

      <Reveal>
        <V2ToolsList />
      </Reveal>

      <Reveal>
        <V2GatesList />
      </Reveal>

      <Reveal className="doc-block">
        <h2>Security model (non-negotiable)</h2>
        <ul className="plain-list">
          <li>
            <strong>MCP</strong> (<span className="mono">dist/index.js</span>) —
            no filesystem, shell, network, or eval in our published file.
          </li>
          <li>
            <strong>CLI</strong> (<span className="mono">dist/workforce.js</span>
            ) — explicit local writes to <span className="mono">.workforce/</span>
            ; network disallowed.
          </li>
          <li>
            Case files are safe to commit: no secrets, no absolute paths, no
            credential-bearing URLs.
          </li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <Link className="inline-link" to="/install">
            Install + host configs
          </Link>{" "}
          ·{" "}
          <Link className="inline-link" to="/docs/case-file">
            Case schema
          </Link>{" "}
          ·{" "}
          <Link className="inline-link" to="/evals">
            Evals
          </Link>
        </p>
      </Reveal>

      <Reveal>
        <V2ProofGrid />
      </Reveal>

      <Reveal>
        <p className="section-label">Still available</p>
        <h2 className="use-title">V1 specialties & pods</h2>
        <p className="section-lead">
          Load <span className="mono">workforce/UI</span>,{" "}
          <span className="mono">workforce/DE</span>, pods like{" "}
          <span className="mono">workforce/WEB</span>, or run{" "}
          <span className="mono">workforce/discuss</span> — same as before. V2
          does not remove them; it wraps high-risk work in a reviewable case.
        </p>
        <p>
          <Link className="inline-link" to="/specialists">
            Specialty catalog
          </Link>{" "}
          ·{" "}
          <Link className="inline-link" to="/tools">
            Full tool list
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
