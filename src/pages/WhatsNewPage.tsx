import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { PACKAGE, WHATS_NEW } from "../data";

export function WhatsNewPage() {
  return (
    <section className="section section-page section-wide">
      <Reveal>
        <p className="section-label">v{PACKAGE.version}</p>
        <h1 className="section-title">Orchestrate the roster</h1>
        <p className="section-lead">
          Manager, discuss, postmortem theater, and delegate — so your agent
          sequences specialties instead of dumping every craft at once. Live on{" "}
          <span className="mono">npx -y {PACKAGE.name}</span>.
        </p>
      </Reveal>

      <div className="flow orch-flow">
        <Reveal className="flow-step" delayMs={40}>
          <span className="n">01</span>
          <h2>Discuss</h2>
          <p>
            Put the idea (or failure) on the table. Every relevant specialty
            speaks — challenges, risks, asks.
          </p>
        </Reveal>
        <Reveal className="flow-step" delayMs={100}>
          <span className="n">02</span>
          <h2>Delegate</h2>
          <p>
            Manager breaks the goal into specialty-owned slices with order and
            acceptance.
          </p>
        </Reveal>
        <Reveal className="flow-step" delayMs={160}>
          <span className="n">03</span>
          <h2>Execute one</h2>
          <p>
            Call a single{" "}
            <span className="mono">workforce/FLAG</span>, ship the slice, then
            handoff.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <p className="section-label">In this release</p>
        <h2 className="use-title">Manager · discuss · postmortem · delegate</h2>
      </Reveal>

      <div className="whats-list">
        {WHATS_NEW.map((item, i) => (
          <Reveal
            key={item.flag}
            className="whats-item"
            delayMs={Math.min(i * 40, 160)}
          >
            <div className="whats-item-head">
              <span className="prompt-flag">{item.call}</span>
              <h3 className="specialty-name">{item.title}</h3>
            </div>
            <p className="whats-item-body">{item.body}</p>
            <p className="prompt-catalog-when">
              <span className="mono">When:</span> {item.when}
            </p>
            <code className="call-chip">{item.call}</code>
          </Reveal>
        ))}
      </div>

      <Reveal className="orch-spotlight">
        <p className="section-label">Spotlight</p>
        <h2 className="use-title">Postmortem theater</h2>
        <p className="section-lead use-lead">
          Topic = the failure story. Full cast — ARCH through MGR — each owns{" "}
          <strong>one</strong> corrective action. No empty seats, no laundry
          lists. Then pick the first{" "}
          <span className="mono">workforce/FLAG</span> to execute.
        </p>
        <div className="orch-example">
          <span className="specialty-prompt-label">Example</span>
          <code>
            workforce/postmortem — checkout 500s after deploy; payments partial
            charge
          </code>
        </div>
        <p className="orch-note">
          Or{" "}
          <span className="mono">
            workforce_discuss format=postmortem_theater
          </span>
          . Roles subset is ignored — full cast always.
        </p>
      </Reveal>

      <Reveal className="hero-actions orch-actions">
        <Link className="btn btn-primary" to="/install">
          Install v{PACKAGE.version}
        </Link>
        <Link className="btn btn-ghost" to="/tools">
          All tools & prompts
        </Link>
      </Reveal>
    </section>
  );
}
