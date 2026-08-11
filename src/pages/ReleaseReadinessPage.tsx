import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { CaseFileDemo } from "../components/CaseFileDemo";

export function ReleaseReadinessPage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/release-readiness"]} />
      <Reveal>
        <p className="section-label">ICP wedge</p>
        <h1 className="section-title">Release readiness for agent-authored PRs</h1>
        <p className="section-lead">
          Built for 5–50 eng B2B SaaS teams shipping TypeScript web/API changes
          where agent drafts create review and release-risk anxiety — starting
          with auth, payments, and protected paths.
        </p>
      </Reveal>

      <Reveal className="rr-steps">
        <ol>
          <li>
            <strong>Assemble</strong> the smallest roster (e.g. ARCH → BE → SEC →
            QA).
          </li>
          <li>
            <strong>Contract</strong> commitments and required evidence into a
            case file.
          </li>
          <li>
            <strong>Review</strong> before merge — gates fail closed when
            evidence is missing.
          </li>
        </ol>
        <p>
          <Link className="inline-link" to="/install">
            Install path
          </Link>{" "}
          ·{" "}
          <Link className="inline-link" to="/docs/case-file">
            Case schema
          </Link>
        </p>
      </Reveal>

      <Reveal>
        <CaseFileDemo />
      </Reveal>
    </section>
  );
}
