const ROWS = [
  {
    before: "Vague prompt",
    after: "Versioned case file",
  },
  {
    before: "Assumed roles",
    after: "Explicit roster + exclusions",
  },
  {
    before: "Chat memory only",
    after: "Committed `.workforce/` contract",
  },
  {
    before: "“Looks done”",
    after: "Evidence-backed gate result",
  },
  {
    before: "Context lost between hosts",
    after: "Portable case across harnesses",
  },
] as const;

export function BeforeAfter() {
  return (
    <section className="section before-after" aria-labelledby="before-after-title">
      <p className="section-label">Difference</p>
      <h2 id="before-after-title" className="section-title">
        Same agents. Accountable delivery.
      </h2>
      <p className="section-lead">
        Workforce does not replace code review or CI — it makes agent-assisted
        delivery inspectable.
      </p>
      <div className="ba-table" role="table" aria-label="Before and after">
        <div className="ba-row ba-head" role="row">
          <div role="columnheader">Generic agent workflow</div>
          <div role="columnheader">Workforce protocol</div>
        </div>
        {ROWS.map((row) => (
          <div className="ba-row" role="row" key={row.before}>
            <div role="cell">{row.before}</div>
            <div role="cell">{row.after}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
