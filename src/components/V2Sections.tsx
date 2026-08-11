import { Link } from "react-router-dom";
import { V2_OUTCOMES, V2_PROOF, V1_VS_V2, V2_GATES, V2_TOOLS } from "../data";

export function V2Outcomes() {
  return (
    <section className="section v2-outcomes" aria-labelledby="v2-outcomes-title">
      <p className="section-label">What V2 achieves</p>
      <h2 id="v2-outcomes-title" className="section-title">
        Shared memory. Clear ownership. Proof of delivery.
      </h2>
      <p className="section-lead">
        Not “14 specialist prompts.” A local protocol that makes agent-authored
        changes inspectable across harnesses.
      </p>
      <div className="v2-card-grid">
        {V2_OUTCOMES.map((o) => (
          <article key={o.title} className="v2-card">
            <h3>{o.title}</h3>
            <p>{o.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function V2ProofGrid() {
  return (
    <section className="section v2-proof" aria-labelledby="v2-proof-title">
      <p className="section-label">Proof</p>
      <h2 id="v2-proof-title" className="section-title">
        Defensible claims only
      </h2>
      <p className="section-lead">
        No fabricated testimonials. These are artifacts you can run or read in
        the open package.
      </p>
      <div className="v2-card-grid">
        {V2_PROOF.map((p) => (
          <article key={p.title} className="v2-card">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <Link className="inline-link" to={p.link}>
              {p.linkLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function V1VsV2Table() {
  return (
    <section className="section before-after" aria-labelledby="v1v2-title">
      <p className="section-label">V1 → V2</p>
      <h2 id="v1v2-title" className="section-title">
        What actually changed
      </h2>
      <p className="section-lead">
        V1 specialty context still works. V2 adds the delivery case on top.
      </p>
      <div className="ba-table" role="table" aria-label="V1 versus V2">
        <div className="ba-row ba-head" role="row">
          <div role="columnheader">V1</div>
          <div role="columnheader">V2</div>
        </div>
        {V1_VS_V2.map((row) => (
          <div className="ba-row" role="row" key={row.v1}>
            <div role="cell">{row.v1}</div>
            <div role="cell">{row.v2}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function V2GatesList() {
  return (
    <section className="section" aria-labelledby="gates-title">
      <p className="section-label">Release gates</p>
      <h2 id="gates-title" className="section-title">
        What “ready” means
      </h2>
      <p className="section-lead">
        Review never claims a test passed unless supplied evidence says{" "}
        <span className="mono">pass</span>.
      </p>
      <ul className="v2-gate-defs">
        {V2_GATES.map((g) => (
          <li key={g.id}>
            <span className="mono">{g.id}</span>
            <span>{g.meaning}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function V2ToolsList() {
  return (
    <section className="section" aria-labelledby="v2-tools-title">
      <p className="section-label">V2 MCP tools</p>
      <h2 id="v2-tools-title" className="section-title">
        Read-only by design
      </h2>
      <p className="section-lead">
        These tools evaluate or construct data the agent passes in. Persistence
        is always an explicit CLI step.
      </p>
      <ul className="v2-tools-list">
        {V2_TOOLS.map((t) => (
          <li key={t.name}>
            <span className="mono">{t.name}</span>
            <p>{t.achieves}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
