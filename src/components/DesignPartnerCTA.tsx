import { Link } from "react-router-dom";
import { PACKAGE } from "../data";
import { track } from "../lib/analytics";

export function DesignPartnerCTA() {
  return (
    <section className="section design-cta" aria-labelledby="design-cta-title">
      <p className="section-label">Design partners</p>
      <h2 id="design-cta-title" className="section-title">
        Ship with us while V2 hardens
      </h2>
      <p className="section-lead">
        Looking for 5–50 eng B2B SaaS teams using Cursor or Claude Code on
        high-risk agent-authored PRs. Weekly ritual: one completed case, gate
        usefulness, reviewer trust.
      </p>
      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href={`mailto:${PACKAGE.email}?subject=Workforce%20design%20partner`}
          onClick={() =>
            track("design_partner_cta_clicked", {
              route: "/design-partners",
              cta: "email",
            })
          }
        >
          Email {PACKAGE.email}
        </a>
        <Link
          className="btn btn-ghost"
          to="/design-partners"
          onClick={() =>
            track("design_partner_cta_clicked", {
              route: "/",
              cta: "learn_more",
            })
          }
        >
          Partner brief
        </Link>
      </div>
    </section>
  );
}
