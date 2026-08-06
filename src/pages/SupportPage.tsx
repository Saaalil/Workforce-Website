import { Reveal } from "../components/Reveal";
import { NpmWeeklyDownloads } from "../components/NpmWeeklyDownloads";
import { PACKAGE } from "../data";

export function SupportPage() {
  return (
    <section className="section section-page">
      <Reveal>
        <p className="section-label">Support</p>
        <h1 className="section-title">Stuck? Reach out</h1>
        <p className="section-lead">
          Install hiccups, MCP connection errors, specialty/pod questions — or
          Antigravity setup — ping Salil directly. GitHub issues are welcome
          too for packs and docs.
        </p>
      </Reveal>

      <div className="support-list">
        <Reveal className="support-row support-row-contact" delayMs={20}>
          <div className="support-meta">
            <span className="prompt-flag">Contact</span>
            <h2 className="specialty-name">{PACKAGE.author}</h2>
            <p>
              Fastest path when something breaks. DM on X or email — include your
              Cursor/Claude setup and the error log if you have one.
            </p>
            <p className="support-contact-lines">
              <a href={PACKAGE.xUrl} target="_blank" rel="noopener noreferrer">
                {PACKAGE.xHandle}
              </a>
              <span className="footer-sep" aria-hidden>
                ·
              </span>
              <a href={`mailto:${PACKAGE.email}`}>{PACKAGE.email}</a>
            </p>
          </div>
          <div className="support-contact-actions">
            <a
              className="btn btn-primary"
              href={PACKAGE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on X
            </a>
            <a className="btn btn-ghost" href={`mailto:${PACKAGE.email}`}>
              Email Salil
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={30}>
        <NpmWeeklyDownloads />
      </Reveal>

      <div className="support-list">
        <Reveal className="support-row" delayMs={40}>
          <div className="support-meta">
            <span className="prompt-flag">npm</span>
            <h2 className="specialty-name">{PACKAGE.name}</h2>
            <p>
              Install with npx in Cursor or Claude. Current release{" "}
              <span className="mono">v{PACKAGE.version}</span> — pods (WEB/DP/AIP),
              Manager, discuss, postmortem, delegate.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href={PACKAGE.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on npm
          </a>
        </Reveal>

        <Reveal className="support-row" delayMs={90}>
          <div className="support-meta">
            <span className="prompt-flag">GitHub · core MCP</span>
            <h2 className="specialty-name">Workforce-MCP</h2>
            <p>
              Source for role packs, tools, and the MCP server. Contribute
              specialties, discuss formats, smoke tests, or docs — fork and open
              a PR.
            </p>
          </div>
          <a
            className="btn btn-ghost"
            href={PACKAGE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </Reveal>

        <Reveal className="support-row" delayMs={140}>
          <div className="support-meta">
            <span className="prompt-flag">GitHub · website</span>
            <h2 className="specialty-name">Workforce-Website</h2>
            <p>
              This docs site. Fixes to install copy, catalogs, and what’s-new
              land here.
            </p>
          </div>
          <a
            className="btn btn-ghost"
            href={PACKAGE.websiteRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website repo
          </a>
        </Reveal>
      </div>

      <Reveal>
        <p className="section-label">Quick install</p>
        <pre className="support-snippet">
          <code>{`npx -y ${PACKAGE.name}`}</code>
        </pre>
        <p className="section-lead use-lead">
          Or add the{" "}
          <span className="mono">mcpServers.workforce</span> block from Install
          — always prefer npx over a local{" "}
          <span className="mono">node_modules</span> path.
        </p>
      </Reveal>
    </section>
  );
}
