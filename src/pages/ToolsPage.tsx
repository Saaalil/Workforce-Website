import { TOOLS, PROMPT_GROUPS } from "../data";
import { Reveal } from "../components/Reveal";

export function ToolsPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">MCP surface</p>
        <h1 className="section-title">Tools & prompts</h1>
        <p className="section-lead">
          Underscore names are tools. Slash names are specialty prompts — call{" "}
          <span className="mono">workforce/UI</span> or{" "}
          <span className="mono">workforce/DE</span> to load that context.
        </p>
      </Reveal>

      <Reveal>
        <p className="section-label">Tools</p>
        <h2 className="use-title">What each tool achieves</h2>
      </Reveal>

      <div className="tools">
        {TOOLS.map((t, i) => (
          <Reveal key={t.name} className="tool" delayMs={i * 40}>
            <code>{t.name}</code>
            <p>{t.achieves}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="use-block">
          <p className="section-label">Specialty prompts</p>
          <h2 className="use-title">What each call achieves</h2>
          <p className="section-lead use-lead">
            Any chip in a group loads the same specialty. Prefer the short flag
            — <span className="mono">workforce/UI</span>,{" "}
            <span className="mono">workforce/FE</span>,{" "}
            <span className="mono">workforce/DE</span>.
          </p>
        </div>
      </Reveal>

      <div className="prompt-catalog">
        {PROMPT_GROUPS.map((g, i) => (
          <Reveal
            key={g.flag}
            className="prompt-catalog-item"
            delayMs={Math.min(i * 25, 180)}
          >
            <div className="prompt-catalog-head">
              <span className="prompt-flag">workforce/{g.flag}</span>
              <h3 className="specialty-name">{g.name}</h3>
            </div>
            <p className="prompt-catalog-achieves">{g.achieves}</p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {g.when}
            </p>
            <div className="call-chips" aria-label={`Calls for ${g.name}`}>
              {g.calls.map((c) => (
                <code key={c} className="call-chip">
                  {c}
                </code>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
