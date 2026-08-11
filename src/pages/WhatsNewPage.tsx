import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { CHANGELOG, PACKAGE, PODS_CATALOG, WHATS_NEW } from "../data";
import { V2Outcomes, V1VsV2Table } from "../components/V2Sections";

export function WhatsNewPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">v{PACKAGE.version} · latest</p>
        <h1 className="section-title">What’s new in V2</h1>
        <p className="section-lead">
          <strong>Delivery protocol:</strong> assemble → contract → handoff →
          review → learn. Specialist packs and pods remain.
        </p>
      </Reveal>

      <Reveal>
        <V2Outcomes />
      </Reveal>

      <Reveal>
        <V1VsV2Table />
      </Reveal>

      <div className="whats-list">
        {WHATS_NEW.map((item, i) => (
          <Reveal
            key={item.flag}
            className="whats-item"
            delayMs={Math.min(i * 35, 140)}
          >
            <span className="prompt-flag">{item.call}</span>
            <h3 className="specialty-name">{item.title}</h3>
            <p className="whats-item-body">{item.body}</p>
            <p className="whats-item-when">{item.when}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="section-label">Still shipping</p>
        <h2 className="use-title">Pods</h2>
        <p className="section-lead use-lead">
          WEB / DP / AIP / PLAT / SHIP — roster presets before a single specialty
          executes.
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
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="section-label">Changelog</p>
        <h2 className="use-title">Package history</h2>
      </Reveal>
      <div className="whats-list">
        {CHANGELOG.slice(0, 6).map((rel) => (
          <Reveal key={rel.version} className="whats-item">
            <span className="prompt-flag">v{rel.version}</span>
            <h3 className="specialty-name">
              {rel.title}{" "}
              <span className="fg-dim" style={{ fontWeight: 400 }}>
                · {rel.date}
              </span>
            </h3>
            <ul className="plain-list">
              {rel.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="hero-actions">
        <Link className="btn btn-primary" to="/guide">
          Step-by-step
        </Link>
        <Link className="btn btn-ghost" to="/install">
          Install MCP
        </Link>
      </Reveal>
    </section>
  );
}
