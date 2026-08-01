import { SPECIALISTS } from "../data";
import { Reveal } from "../components/Reveal";

export function SpecialistsPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">Catalog</p>
        <h1 className="section-title">Specialist prompts</h1>
        <p className="section-lead">
          What each specialty can achieve, which projects it fits, and how to
          call it — install once, then use{" "}
          <span className="mono">workforce/UI</span>,{" "}
          <span className="mono">workforce/FE</span>, and the rest.
        </p>
      </Reveal>

      <div className="stat-strip">
        <Reveal className="stat" delayMs={40}>
          <strong>13</strong>
          <span>specialties</span>
        </Reveal>
        <Reveal className="stat" delayMs={80}>
          <strong>8–12</strong>
          <span>discovery questions each</span>
        </Reveal>
        <Reveal className="stat" delayMs={120}>
          <strong>1</strong>
          <span>install for all of them</span>
        </Reveal>
      </div>

      <div className="specialty-list">
        {SPECIALISTS.map((s, i) => (
          <Reveal key={s.flag} className="specialty" delayMs={Math.min(i * 25, 200)}>
            <div className="specialty-head">
              <div>
                <div className="specialty-flag">workforce/{s.flag}</div>
                <h2 className="specialty-name">{s.name}</h2>
              </div>
              <p className="specialty-when">
                <span className="mono">When:</span> {s.when}
              </p>
            </div>

            <div className="specialty-grid">
              <div>
                <h3>Can achieve</h3>
                <p>{s.achieves}</p>
              </div>
              <div>
                <h3>Best for projects like</h3>
                <p>{s.bestFor}</p>
              </div>
            </div>

            <div className="specialty-stats">
              {s.stats.map((st) => (
                <div key={st.label} className="specialty-stat">
                  <strong>{st.value}</strong>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>

            <div className="specialty-prompt">
              <span className="specialty-prompt-label">Example prompt</span>
              <code>{s.prompt}</code>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
