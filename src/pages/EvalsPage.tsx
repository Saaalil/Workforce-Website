import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { PACKAGE } from "../data";

export function EvalsPage() {
  return (
    <section className="section section-page">
      <Seo page={PAGE_SEO["/evals"]} />
      <Reveal>
        <p className="section-label">Proof</p>
        <h1 className="section-title">Deterministic evals</h1>
        <p className="section-lead">
          V2 roster and gate fixtures run without LLM calls. Fixtures live in
          the MCP repo under <span className="mono">scripts/eval/cases/</span>.
        </p>
      </Reveal>
      <Reveal className="doc-block">
        <ul className="plain-list">
          <li>OAuth / SSO must include security + backend + QA</li>
          <li>Empty evidence cannot pass ready_to_merge</li>
          <li>Protected paths require security evidence</li>
          <li>Never default to all 14 specialties</li>
        </ul>
        <p>
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
    </section>
  );
}
