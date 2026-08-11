import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { V2Guide } from "../components/V2Guide";
import { PAGE_SEO } from "../lib/seo";

export function GuidePage() {
  return (
    <section className="section section-page section-wide">
      <Seo page={PAGE_SEO["/guide"]} />
      <Reveal>
        <p className="section-label">Workflow</p>
        <h1 className="section-title">First case — step by step</h1>
        <p className="section-lead">
          Already installed the MCP? Run a delivery case from init through
          review. Need host configs first?{" "}
          <Link className="inline-link" to="/install">
            Go to Install
          </Link>
          .
        </p>
      </Reveal>

      <Reveal>
        <V2Guide showCta />
      </Reveal>
    </section>
  );
}
