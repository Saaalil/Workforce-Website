import { DesignPartnerCTA } from "../components/DesignPartnerCTA";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { PAGE_SEO } from "../lib/seo";

export function DesignPartnersPage() {
  return (
    <section className="section section-page">
      <Seo page={PAGE_SEO["/design-partners"]} />
      <Reveal>
        <p className="section-label">Early access</p>
        <h1 className="section-title">Design partners</h1>
        <p className="section-lead">
          No fake pricing. No fabricated logos. If you run agent-authored PRs
          through Cursor or Claude Code and care about release risk, we want
          weekly feedback — not vanity metrics.
        </p>
      </Reveal>
      <Reveal className="doc-block">
        <h2>What we ask</h2>
        <ul className="plain-list">
          <li>Init Workforce in one real repository</li>
          <li>Complete one delivery case per week</li>
          <li>Note gate usefulness, false positives, reviewer trust</li>
        </ul>
        <h2>What you get</h2>
        <ul className="plain-list">
          <li>Direct line to the maintainer</li>
          <li>Influence on gate policy and CLI UX</li>
          <li>Optional anonymized case study (only with approval)</li>
        </ul>
      </Reveal>
      <DesignPartnerCTA />
    </section>
  );
}
