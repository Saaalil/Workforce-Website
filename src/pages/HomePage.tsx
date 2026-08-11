import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { NpmWeeklyDownloads } from "../components/NpmWeeklyDownloads";
import { CaseFileDemo } from "../components/CaseFileDemo";
import { BeforeAfter } from "../components/BeforeAfter";
import { DesignPartnerCTA } from "../components/DesignPartnerCTA";
import { Seo } from "../components/Seo";
import { V2Guide } from "../components/V2Guide";
import {
  V2Outcomes,
  V2ProofGrid,
  V1VsV2Table,
  V2GatesList,
} from "../components/V2Sections";
import { PAGE_SEO } from "../lib/seo";
import { track } from "../lib/analytics";
import { WHATS_NEW } from "../data";

export function HomePage() {
  return (
    <>
      <Seo page={PAGE_SEO["/"]} />
      <section className="hero">
        <Reveal className="hero-kicker" delayMs={40}>
          Workforce V2 · local-first delivery protocol
        </Reveal>
        <h1 className="hero-brand">
          <Reveal delayMs={90}>
            <span>Workforce</span>
          </Reveal>
        </h1>
        <Reveal delayMs={140}>
          <p className="hero-tagline">
            Every coding agent. One accountable engineering team.
          </p>
        </Reveal>
        <Reveal delayMs={180}>
          <p className="hero-line">
            V2 turns an agent-written change into a shared delivery case: scoped
            work, named owners, reviewable evidence, and a release decision you
            can defend in code review.
          </p>
        </Reveal>
        <Reveal className="hero-actions" delayMs={230}>
          <Link
            className="btn btn-primary"
            to="/install"
            onClick={() =>
              track("landing_cta_clicked", { route: "/", cta: "start_case" })
            }
          >
            Step-by-step setup
          </Link>
          <Link
            className="btn btn-ghost"
            to="/how"
            onClick={() =>
              track("landing_cta_clicked", { route: "/", cta: "how_v2" })
            }
          >
            How V2 works
          </Link>
        </Reveal>
        <Reveal className="hero-trust" delayMs={300}>
          Local-first case files · no hidden MCP filesystem access · Cursor /
          Claude Code / Antigravity
        </Reveal>
        <Reveal className="hero-meta" delayMs={340}>
          <span>
            <strong>14</strong> specialties
          </span>
          <span>
            <strong>V2</strong> case protocol
          </span>
          <span>
            <strong>CLI</strong> + MCP
          </span>
        </Reveal>
        <Reveal delayMs={380}>
          <NpmWeeklyDownloads />
        </Reveal>
      </section>

      <Reveal>
        <V2Outcomes />
      </Reveal>

      <Reveal>
        <CaseFileDemo />
      </Reveal>

      <Reveal>
        <V1VsV2Table />
      </Reveal>

      <Reveal>
        <BeforeAfter />
      </Reveal>

      <Reveal>
        <V2Guide compact />
      </Reveal>

      <Reveal>
        <V2GatesList />
      </Reveal>

      <Reveal>
        <V2ProofGrid />
      </Reveal>

      <section className="section home-whats" aria-labelledby="v2-highlights">
        <Reveal>
          <p className="section-label">Highlights</p>
          <h2 id="v2-highlights" className="section-title">
            Why teams adopt V2
          </h2>
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
          <Link className="btn btn-primary" to="/release-readiness">
            OAuth release example
          </Link>
          <Link className="btn btn-ghost" to="/evals">
            Eval fixtures
          </Link>
        </Reveal>
      </section>

      <Reveal>
        <DesignPartnerCTA />
      </Reveal>
    </>
  );
}
