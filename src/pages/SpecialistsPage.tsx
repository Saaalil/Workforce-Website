import {
  PODS_CATALOG,
  POD_COUNT,
  SPECIALISTS,
  SPECIALIST_COUNT,
} from "../data";
import { Reveal } from "../components/Reveal";

export function SpecialistsPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">Catalog</p>
        <h1 className="section-title">Specialists & pods</h1>
        <p className="section-lead">
          Craft specialties load one deep context. Pods are roster presets —
          member POVs, then one specialty at a time. Install once; call{" "}
          <span className="mono">workforce/UI</span> or{" "}
          <span className="mono">workforce/WEB</span>.
        </p>
      </Reveal>

      <div className="stat-strip">
        <Reveal className="stat" delayMs={40}>
          <strong>{SPECIALIST_COUNT}</strong>
          <span>specialties</span>
        </Reveal>
        <Reveal className="stat" delayMs={80}>
          <strong>{POD_COUNT}</strong>
          <span>pods</span>
        </Reveal>
        <Reveal className="stat" delayMs={120}>
          <strong>1</strong>
          <span>install for all of them</span>
        </Reveal>
      </div>

      <Reveal>
        <p className="section-label">Pods</p>
        <h2 className="use-title">Roster presets</h2>
        <p className="section-lead use-lead">
          Fixed specialty bands. Not merged mega-skills — discuss members,
          delegate, execute one <span className="mono">workforce/FLAG</span>.
          Specialty <span className="mono">AI</span> ≠ pod{" "}
          <span className="mono">AIP</span>.
        </p>
      </Reveal>

      <div className="specialty-list pod-list">
        {PODS_CATALOG.map((p, i) => (
          <Reveal
            key={p.flag}
            className="specialty pod-card"
            delayMs={Math.min(i * 30, 160)}
          >
            <div className="specialty-head">
              <div>
                <div className="specialty-flag">{p.call}</div>
                <h2 className="specialty-name">{p.title}</h2>
              </div>
              <p className="specialty-when">
                <span className="mono">When:</span> {p.when}
              </p>
            </div>

            <p className="pod-description">{p.description}</p>

            <div className="specialty-grid">
              <div>
                <h3>Members</h3>
                <p>
                  <span className="mono">{p.members}</span>
                </p>
                <div className="pod-member-chips" aria-label="Member flags">
                  {p.memberFlags.map((f) => (
                    <code key={f} className="call-chip">
                      workforce/{f}
                    </code>
                  ))}
                </div>
              </div>
              <div>
                <h3>Default sequence</h3>
                <p>{p.sequence}</p>
              </div>
            </div>

            <div className="specialty-stats">
              <div className="specialty-stat">
                <strong>{p.memberCount}</strong>
                <span>specialties in pod</span>
              </div>
              <div className="specialty-stat">
                <strong>{p.flag}</strong>
                <span>pod flag</span>
              </div>
              <div className="specialty-stat">
                <strong>1</strong>
                <span>specialty executes next</span>
              </div>
            </div>

            {p.note ? <p className="pod-note">{p.note}</p> : null}

            <div className="specialty-prompt">
              <span className="specialty-prompt-label">Example prompt</span>
              <code>{p.prompt}</code>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="section-label">Specialties</p>
        <h2 className="use-title">Single-craft context</h2>
        <p className="section-lead use-lead">
          What each specialty can achieve, which projects it fits, and how to
          call it.
        </p>
      </Reveal>

      <div className="specialty-list">
        {SPECIALISTS.map((s, i) => (
          <Reveal
            key={s.flag}
            className="specialty"
            delayMs={Math.min(i * 25, 200)}
          >
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
