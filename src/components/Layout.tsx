import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { Mark, Loader } from "./Brand";
import { NAV } from "../data";

export function Layout() {
  const [booted, setBooted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setBooted(true), reduced ? 0 : 900);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.getElementById("main");
    main?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <>
      <Loader done={booted} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="shell">
        <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
          <Link className="nav-brand" to="/" aria-label="Workforce home">
            <Mark size={22} />
            <span>Workforce</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-link is-active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="nav-cta" to="/install">
            Get started
          </Link>
        </header>

        <main id="main" tabIndex={-1} className="main">
          <div key={location.pathname} className="page-enter">
            <Outlet />
          </div>
        </main>

        <footer className="footer">
          <div className="footer-meta">
            <span>workforce-mcp · v1.2</span>
            <span className="footer-sep" aria-hidden>
              ·
            </span>
            <span>install once · specialist context on demand</span>
          </div>
          <div className="footer-social">
            <span className="footer-by">by Salil</span>
            <a
              href="https://github.com/Saaalil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://x.com/HiremathSalil"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
