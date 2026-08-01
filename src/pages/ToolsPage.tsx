import { TOOLS } from "../data";
import { Reveal } from "../components/Reveal";

export function ToolsPage() {
  return (
    <section className="section section-page">
      <Reveal>
        <p className="section-label">MCP surface</p>
        <h1 className="section-title">Tools</h1>
        <p className="section-lead">
          Tools power the MCP. Day to day, call a specialty prompt —{" "}
          <span className="mono">workforce/UI</span>,{" "}
          <span className="mono">workforce/FE</span>,{" "}
          <span className="mono">workforce/DE</span> — and the agent loads
          the right context for that work.
        </p>
      </Reveal>

      <div className="tools">
        {TOOLS.map((t, i) => (
          <Reveal key={t.name} className="tool" delayMs={i * 50}>
            <code>{t.name}</code>
            <p>{t.blurb}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
