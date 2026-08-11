import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { PACKAGE, V2_PROOF } from "../data";
import { V2ProofGrid } from "../components/V2Sections";

export function EvalsPage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/evals"]} />
      <Reveal>
        <p className="section-label">Proof</p>
        <h1 className="section-title">Deterministic evals</h1>
        <p className="section-lead">
          V2 roster and gate fixtures run <strong>without LLM calls</strong> and
          without network. If an OAuth task does not include security, or empty
          evidence claims ready_to_merge, the evaluator fails — that is the
          product working.
        </p>
      </Reveal>

      <Reveal className="doc-block">
        <h2>How to run</h2>
        <pre className="code-block">{`npm run eval
# fixtures: scripts/eval/cases/*.json`}</pre>
        <p style={{ marginTop: "0.75rem" }}>
          <a
            className="inline-link"
            href={`${PACKAGE.githubUrl}/tree/main/scripts/eval`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse fixtures on GitHub
          </a>
        </p>
      </Reveal>

      <Reveal className="doc-block">
        <h2>What we assert</h2>
        <ul className="plain-list">
          <li>OAuth / SSO / payments include security + backend + QA</li>
          <li>Webhook verification includes security</li>
          <li>Incidents / rollbacks include SRE / ops ownership</li>
          <li>Never default to all 14 specialties</li>
          <li>Required gate IDs present on the contract</li>
          <li>Review honesty: missing evidence ≠ ready</li>
        </ul>
      </Reveal>

      <Reveal className="doc-block">
        <h2>Example fixtures</h2>
        <ul className="plain-list mono-ish">
          <li>oauth-sso.json</li>
          <li>webhook-verify.json</li>
          <li>payment-retry.json</li>
          <li>pii-migration.json</li>
          <li>prod-incident.json</li>
          <li>rollback-auth.json</li>
          <li>rag-regression.json · checkout-ui.json · …</li>
        </ul>
      </Reveal>

      <Reveal>
        <V2ProofGrid />
      </Reveal>

      <Reveal>
        <p className="section-lead">
          Also see:{" "}
          {V2_PROOF.map((p, i) => (
            <span key={p.title}>
              {i > 0 ? " · " : null}
              <Link className="inline-link" to={p.link}>
                {p.linkLabel}
              </Link>
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
