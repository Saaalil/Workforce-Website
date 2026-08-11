import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";

export function CaseFilePage() {
  return (
    <section className="section section-page">
      <Seo page={PAGE_SEO["/docs/case-file"]} />
      <Reveal>
        <p className="section-label">Docs</p>
        <h1 className="section-title">Case file</h1>
        <p className="section-lead">
          A WorkforceCase is versioned JSON under{" "}
          <span className="mono">.workforce/cases/</span>. Treat it as an API:
          validate, commit, and share across harnesses.
        </p>
      </Reveal>
      <Reveal className="doc-block">
        <h2>Lifecycle</h2>
        <pre className="code-block">{`workforce init --apply
# agent: workforce_assemble → workforce_contract
workforce case create --from-stdin --apply
workforce handoff <id> --from BE --to SEC --summary "…" --apply
workforce review <id> --apply
workforce learn propose <id> --event missed_gate --narrative "…"`}</pre>
      </Reveal>
      <Reveal className="doc-block">
        <h2>Schema</h2>
        <p>
          JSON Schema ships in the package as{" "}
          <span className="mono">schemas/workforce-case.schema.json</span>.
          Required fields include request, scope, roster, commitments, gates,
          handoffs, artifacts, and events.
        </p>
      </Reveal>
    </section>
  );
}
