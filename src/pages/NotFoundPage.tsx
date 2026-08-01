import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

export function NotFoundPage() {
  return (
    <section className="section section-page not-found">
      <Reveal>
        <p className="section-label">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-lead">
          That route doesn’t exist. Head home or jump to install.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost" to="/install">
            Install
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
