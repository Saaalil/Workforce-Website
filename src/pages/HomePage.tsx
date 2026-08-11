import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { NpmWeeklyDownloads } from "../components/NpmWeeklyDownloads";
import { CaseFileDemo } from "../components/CaseFileDemo";
import { BeforeAfter } from "../components/BeforeAfter";
import { DesignPartnerCTA } from "../components/DesignPartnerCTA";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";
import { track } from "../lib/analytics";

export function HomePage() {
  return (
    <>
      <Seo page={PAGE_SEO["/"]} />
      <section className="hero">
        <Reveal className="hero-kicker" delayMs={40}>
          Local-first delivery protocol
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
            Workforce turns an agent-written change into a shared delivery case:
            scoped work, named owners, reviewable evidence, and a release
            decision.
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
            Start a release case
          </Link>
          <Link
            className="btn btn-ghost"
            to="/release-readiness"
            onClick={() =>
              track("landing_cta_clicked", { route: "/", cta: "oauth_example" })
            }
          >
            See a real OAuth example
          </Link>
        </Reveal>
        <Reveal className="hero-trust" delayMs={300}>
          Local-first case files · no hidden MCP filesystem access · works
          across agent hosts
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
        <CaseFileDemo />
      </Reveal>

      <Reveal>
        <BeforeAfter />
      </Reveal>

      <Reveal>
        <DesignPartnerCTA />
      </Reveal>
    </>
  );
}
