import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { CHANGELOG, PACKAGE, PODS_CATALOG, WHATS_NEW } from "../data";

export function WhatsNewPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">v{PACKAGE.version} · latest</p>
        <h1 className="section-title">What’s new</h1>
        <p className="section-lead">
          <strong>Pods</strong> are the headline in {PACKAGE.version} — call{" "}
          <span className="mono">workforce/WEB</span> for UI+FE+BE (roster
          preset, then one specialty). Plus Manager, discuss, and postmortem
          from 1.3. Live on{" "}
          <span className="mono">npx -y {PACKAGE.name}@{PACKAGE.version}</span>.
        </p>
      </Reveal>

      <Reveal>
        <p className="section-label">What is workforce/WEB?</p>
        <h2 className="use-title">A pod — not a specialty</h2>
        <p className="section-lead use-lead">
          <span className="mono">workforce/WEB</span> loads the{" "}
          <strong>Web product pod</strong>: member voices UI · FE · BE, a
          delegation table, then you execute <em>one</em> flag (usually{" "}
          <span className="mono">workforce/UI</span> first). It is not “be
          frontend forever” and not a merged mega-prompt.
        </p>
      </Reveal>

      <Reveal>
        <p className="section-label">v{PACKAGE.version}</p>
        <h2 className="use-title">Pods — roster presets</h2>
        <p className="section-lead use-lead">
          Member POVs → delegation → first{" "}
          <span className="mono">workforce/FLAG</span>. Specialty{" "}
          <span className="mono">AI</span> ≠ pod{" "}
          <span className="mono">AIP</span>.
        </p>
      </Reveal>

      <div className="whats-list">
        {PODS_CATALOG.map((p, i) => (
          <Reveal
            key={p.flag}
            className="whats-item"
            delayMs={Math.min(i * 35, 140)}
          >
            <div className="whats-item-head">
              <span className="prompt-flag">{p.call}</span>
              <h3 className="specialty-name">{p.title}</h3>
            </div>
            <p className="whats-item-body">{p.description}</p>
            <p className="whats-item-body">
              <span className="mono">{p.members}</span>
              {" · "}
              {p.memberCount} specialties
            </p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {p.when}
            </p>
            <code className="call-chip">{p.call}</code>
          </Reveal>
        ))}
      </div>

      <div className="flow orch-flow">
        <Reveal className="flow-step" delayMs={40}>
          <span className="n">01</span>
          <h2>Pod or discuss</h2>
          <p>
            Fixed band (<span className="mono">WEB</span>) or full-table discuss
            — challenges per specialty.
          </p>
        </Reveal>
        <Reveal className="flow-step" delayMs={100}>
          <span className="n">02</span>
          <h2>Delegate</h2>
          <p>Owners, order, acceptance — one primary specialty per slice.</p>
        </Reveal>
        <Reveal className="flow-step" delayMs={160}>
          <span className="n">03</span>
          <h2>Execute one</h2>
          <p>
            Call a single{" "}
            <span className="mono">workforce/FLAG</span>, then handoff.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <p className="section-label">Also shipping with recent releases</p>
        <h2 className="use-title">Manager · discuss · postmortem</h2>
      </Reveal>

      <div className="whats-list">
        {WHATS_NEW.filter((item) => item.flag !== "WEB").map((item, i) => (
          <Reveal
            key={item.flag}
            className="whats-item"
            delayMs={Math.min(i * 40, 160)}
          >
            <div className="whats-item-head">
              <span className="prompt-flag">{item.call}</span>
              <h3 className="specialty-name">{item.title}</h3>
            </div>
            <p className="whats-item-body">{item.body}</p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {item.when}
            </p>
            <code className="call-chip">{item.call}</code>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="section-label">Changelog</p>
        <h2 className="use-title">From 1.0 to {PACKAGE.version}</h2>
        <p className="section-lead use-lead">
          Everything added across published releases of{" "}
          <span className="mono">{PACKAGE.name}</span>.
        </p>
      </Reveal>

      <div className="changelog-list">
        {CHANGELOG.map((rel, i) => (
          <Reveal
            key={rel.version}
            className="changelog-item"
            delayMs={Math.min(i * 40, 160)}
          >
            <div className="changelog-head">
              <span className="prompt-flag">v{rel.version}</span>
              <span className="changelog-date">{rel.date}</span>
            </div>
            <h3 className="specialty-name">{rel.title}</h3>
            <ul className="changelog-bullets">
              {rel.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="hero-actions orch-actions">
        <Link className="btn btn-primary" to="/install">
          Install v{PACKAGE.version}
        </Link>
        <Link className="btn btn-ghost" to="/tools">
          All tools & prompts
        </Link>
      </Reveal>
    </section>
  );
}
