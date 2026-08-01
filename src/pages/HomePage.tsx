import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function HomePage() {
  return (
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
        <Link className="btn btn-ghost" to="/how">
          How it works
        </Link>
      </Reveal>
      <Reveal className="hero-meta" delayMs={320}>
        <span>
          <strong>one</strong> package
        </span>
        <span>
          <strong>13</strong> specialties
        </span>
        <span>
          <strong>zero</strong> per-project skill installs
        </span>
      </Reveal>
    </section>
  );
}
