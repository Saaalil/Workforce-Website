import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { NpmWeeklyDownloads } from "../components/NpmWeeklyDownloads";
import { PACKAGE, WHATS_NEW } from "../data";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <Reveal className="hero-kicker" delayMs={40}>
          Specialist context · one install
        </Reveal>
        <h1 className="hero-brand">
          <Reveal delayMs={90}>
            <span>Workforce</span>
          </Reveal>
        </h1>
        <Reveal delayMs={160}>
          <p className="hero-line">
            Need specialist work — UI, data, ML, SRE — without doing all the
            setup yourself? Install once and get the best context and prompts
            for whatever you’re building.
          </p>
        </Reveal>
        <Reveal className="hero-actions" delayMs={230}>
          <Link className="btn btn-primary" to="/install">
            Install MCP
          </Link>
          <Link className="btn btn-ghost" to="/whats-new">
            What’s new
          </Link>
        </Reveal>
        <Reveal className="hero-meta" delayMs={320}>
          <span>
            <strong>one</strong> package
          </span>
          <span>
            <strong>14</strong> specialties
          </span>
          <span>
            <strong>5</strong> pods
          </span>
        </Reveal>
        <Reveal delayMs={380}>
          <NpmWeeklyDownloads />
        </Reveal>
      </section>

      <section className="section home-whats" aria-labelledby="whats-new-heading">
        <Reveal>
          <p className="section-label">v{PACKAGE.version}</p>
          <h2 id="whats-new-heading" className="section-title">
            What’s new
          </h2>
          <p className="section-lead">
            v{PACKAGE.version}: pods like{" "}
            <span className="mono">workforce/WEB</span>, plus Manager, discuss,
            and postmortem theater. Same dark theme, same short flags.
          </p>
        </Reveal>

        <div className="whats-list whats-list-home">
          {WHATS_NEW.map((item, i) => (
            <Reveal
              key={item.flag}
              className="whats-item"
              delayMs={Math.min(i * 35, 140)}
            >
              <span className="prompt-flag">{item.call}</span>
              <h3 className="specialty-name">{item.title}</h3>
              <p className="whats-item-body">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="hero-actions orch-actions">
          <Link className="btn btn-primary" to="/whats-new">
            Explore orchestration
          </Link>
          <Link className="btn btn-ghost" to="/support">
            npm & GitHub
          </Link>
        </Reveal>
      </section>
    </>
  );
}
