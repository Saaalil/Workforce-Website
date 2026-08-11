import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { V2Guide } from "../components/V2Guide";
import { PACKAGE } from "../data";

export function CaseFilePage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/docs/case-file"]} />
      <Reveal>
        <p className="section-label">Docs</p>
        <h1 className="section-title">Case file — the V2 API</h1>
        <p className="section-lead">
          A <span className="mono">WorkforceCase</span> is versioned JSON under{" "}
          <span className="mono">.workforce/cases/</span>. Treat it as an API:
          validate, commit, and share across harnesses. Schema ships as{" "}
          <span className="mono">schemas/workforce-case.schema.json</span> in{" "}
          <span className="mono">{PACKAGE.name}</span>.
        </p>
      </Reveal>

      <Reveal className="doc-block">
        <h2>File layout</h2>
        <pre className="code-block">{`.workforce/
├── config.json          # defaults + protectedPaths
├── cases/               # YYYY-MM-DD-slug-id.json
├── reviews/             # review artifacts
├── learnings/           # proposed / accepted policies
└── README.md

AGENTS.md                # <!-- workforce:start --> … <!-- workforce:end -->`}</pre>
      </Reveal>

      <Reveal className="doc-block">
        <h2>What the case contains</h2>
        <ul className="plain-list">
          <li>
            <strong>request</strong> — raw ask, goal, risk level
          </li>
          <li>
            <strong>scope</strong> — in / out / constraints / assumptions
          </li>
          <li>
            <strong>roster</strong> — selected, excluded + reasons, execution
            order
          </li>
          <li>
            <strong>commitments</strong> — per-role statement, acceptance,
            evidence, status
          </li>
          <li>
            <strong>gates</strong> — scope, security, test-evidence, handoff,
            release
          </li>
          <li>
            <strong>handoffs</strong> — from → to, summary, artifacts,
            unresolved
          </li>
          <li>
            <strong>events</strong> — created, planned, handoff, reviewed,
            learned, status_changed
          </li>
        </ul>
      </Reveal>

      <Reveal className="doc-block">
        <h2>CLI reference</h2>
        <pre className="code-block">{`workforce init [--apply] [--force] [--allow-no-git] [--json]
workforce inspect [--json]
workforce doctor [--json]

workforce case create --from <file> --apply
workforce case create --from-stdin --apply
workforce case list | show | validate | status …

workforce handoff <id> --from <ROLE> --to <ROLE> --summary <text> --apply
workforce review <id> [--changed-files <file>] [--tests <file>] --apply
workforce learn propose <id> --event <…> --narrative <text>
workforce learn accept <proposal-id> --apply`}</pre>
        <p style={{ marginTop: "0.75rem", color: "var(--fg-muted)" }}>
          Writes require <span className="mono">--apply</span>. Default is
          dry-run.
        </p>
      </Reveal>

      <Reveal>
        <V2Guide compact showInstallCta={false} />
      </Reveal>

      <Reveal className="hero-actions">
        <Link className="btn btn-primary" to="/install">
          Install guide
        </Link>
        <a
          className="btn btn-ghost"
          href={`${PACKAGE.githubUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub package
        </a>
      </Reveal>
    </section>
  );
}
