import { Reveal } from "../components/Reveal";

export function HowPage() {
  return (
    <section className="section section-page">
      <Reveal>
        <p className="section-label">How it works</p>
        <h1 className="section-title">Name the work. Get the specialist.</h1>
        <p className="section-lead">
          Need UI, data pipelines, SRE, or backend depth? Call the MCP prompt —{" "}
          <span className="mono">workforce/UI</span>,{" "}
          <span className="mono">workforce/FE</span>,{" "}
          <span className="mono">workforce/DE</span>,{" "}
          <span className="mono">workforce/SRE</span> — and your agent loads
          full specialist context for that work. Install once. No extra setup
          per project.
        </p>
      </Reveal>

      <div className="flow">
        <Reveal className="flow-step" delayMs={40}>
          <span className="n">01</span>
          <h2>Install the package</h2>
          <p>
            Add{" "}
            <span className="mono">@saaalil/workforce-mcp</span> via npx in
            Cursor/Claude — one MCP for every specialty.
          </p>
        </Reveal>
        <Reveal className="flow-step" delayMs={100}>
          <span className="n">02</span>
          <h2>Discuss, then specialize</h2>
          <p>
            Optional:{" "}
            <span className="mono">workforce/discuss</span> or{" "}
            <span className="mono">workforce/postmortem</span> across every
            craft, then{" "}
            <span className="mono">workforce/delegate</span> — then load one
            flag at a time.
          </p>
        </Reveal>
        <Reveal className="flow-step" delayMs={160}>
          <span className="n">03</span>
          <h2>Ship with full context</h2>
          <p>
            Stack defaults, quality bars, contractor intake — ready for that
            work.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <p className="section-label">Not a skill dump</p>
        <h2 className="use-title">vs skill directories</h2>
        <p className="section-lead">
          Places like{" "}
          <a href="https://www.skills.sh/" rel="noreferrer" target="_blank">
            skills.sh
          </a>{" "}
          shine at installing many small procedures. Workforce is a{" "}
          <strong>coherent roster</strong>: specialties with bars, discuss /
          delegate orchestration, and one specialty executing at a time —
          not another shopping cart of prompts.
        </p>
      </Reveal>
    </section>
  );
}
