import { useEffect, useId, useState } from "react";
import { track } from "../lib/analytics";

export type DemoStep =
  | "request"
  | "assemble"
  | "contract"
  | "handoff"
  | "review"
  | "learn";

const STEPS: { id: DemoStep; label: string; blurb: string }[] = [
  {
    id: "request",
    label: "Request",
    blurb: "A high-risk change arrives as plain language.",
  },
  {
    id: "assemble",
    label: "Assemble",
    blurb: "Smallest roster with exclusions explained.",
  },
  {
    id: "contract",
    label: "Contract",
    blurb: "Versioned case: scope, commitments, gates.",
  },
  {
    id: "handoff",
    label: "Handoff",
    blurb: "One owner at a time; artifacts stay in the case.",
  },
  {
    id: "review",
    label: "Review",
    blurb: "Evidence vs commitments — ready or blocked.",
  },
  {
    id: "learn",
    label: "Learn",
    blurb: "Missed gates become policy proposals, not silent drift.",
  },
];

const EXAMPLE = {
  request: "Add enterprise OAuth with SSO enforcement",
  order: ["ARCH", "BE", "SEC", "QA"],
  excluded: [
    { role: "UI", reason: "No user-facing surface in this slice" },
    { role: "DS", reason: "No experiment or metric redesign" },
  ],
};

type Gate = { id: string; status: "pass" | "fail" | "blocked" | "pending" };

function gatesFor(step: DemoStep): Gate[] {
  if (step === "review" || step === "learn") {
    return [
      { id: "scope", status: "pass" },
      { id: "security", status: "pass" },
      { id: "test-evidence", status: "pass" },
      { id: "handoff", status: "pass" },
      { id: "release", status: "pass" },
    ];
  }
  if (step === "handoff") {
    return [
      { id: "scope", status: "pass" },
      { id: "security", status: "blocked" },
      { id: "test-evidence", status: "pending" },
      { id: "handoff", status: "pass" },
      { id: "release", status: "pending" },
    ];
  }
  return [
    { id: "scope", status: "pending" },
    { id: "security", status: "pending" },
    { id: "test-evidence", status: "pending" },
    { id: "handoff", status: "pending" },
    { id: "release", status: "pending" },
  ];
}

export function CaseFileDemo() {
  const [step, setStep] = useState<DemoStep>("request");
  const [paused, setPaused] = useState(false);
  const tablistId = useId();
  const gates = gatesFor(step);
  const verdict =
    step === "review" || step === "learn"
      ? "ready"
      : step === "handoff"
        ? "blocked"
        : "draft";

  useEffect(() => {
    track("case_demo_step_viewed", { route: "/", step });
  }, [step]);

  // Auto-cycle steps; pause on hover/focus/manual pick; respect reduced motion
  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setStep((current) => {
        const i = STEPS.findIndex((s) => s.id === current);
        return STEPS[(i + 1) % STEPS.length]!.id;
      });
    }, 3800);
    return () => window.clearInterval(id);
  }, [paused]);

  const goTo = (next: DemoStep) => {
    setStep(next);
    setPaused(true);
  };

  return (
    <div
      className="case-demo"
      aria-labelledby={`${tablistId}-title`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="case-demo-head">
        <p className="section-label" id={`${tablistId}-title`}>
          Interactive example
        </p>
        <h2 className="section-title">One request → a reviewable case</h2>
        <p className="section-lead">
          Example labeled sample — not live repository data. Auto-cycles;
          hover or use arrow keys to pause and explore.
        </p>
      </div>

      <div
        className="case-demo-tabs"
        role="tablist"
        aria-label="Delivery steps"
        onKeyDown={(e) => {
          const i = STEPS.findIndex((s) => s.id === step);
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            goTo(STEPS[(i + 1) % STEPS.length]!.id);
          }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            goTo(STEPS[(i - 1 + STEPS.length) % STEPS.length]!.id);
          }
        }}
      >
        {STEPS.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`${tablistId}-${s.id}`}
            aria-selected={step === s.id}
            aria-controls={`${tablistId}-panel`}
            className={
              step === s.id ? "case-demo-tab is-active" : "case-demo-tab"
            }
            onClick={() => goTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        className="case-demo-panel"
        role="tabpanel"
        id={`${tablistId}-panel`}
        aria-labelledby={`${tablistId}-${step}`}
      >
        <p className="case-demo-blurb">
          {STEPS.find((s) => s.id === step)?.blurb}
        </p>

        <div className="case-demo-grid">
          <div className="case-file" aria-label="Example case file">
            <div className="case-file-top">
              <span className="mono">.workforce/cases/…-oauth-….json</span>
              <span className={`case-verdict case-verdict-${verdict}`}>
                {verdict}
              </span>
            </div>
            <p className="case-file-request">
              <strong>Request.</strong> {EXAMPLE.request}
            </p>

            {(step === "assemble" ||
              step === "contract" ||
              step === "handoff" ||
              step === "review" ||
              step === "learn") && (
              <div className="case-roster">
                <p className="case-label">Roster</p>
                <p className="mono case-order">{EXAMPLE.order.join(" → ")}</p>
                <ul className="case-excluded">
                  {EXAMPLE.excluded.map((e) => (
                    <li key={e.role}>
                      <span className="mono">{e.role}</span> excluded — {e.reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(step === "contract" ||
              step === "handoff" ||
              step === "review" ||
              step === "learn") && (
              <div className="case-commitments">
                <p className="case-label">Commitments</p>
                <ul>
                  <li>ARCH — boundaries + one-way doors</li>
                  <li>BE — OIDC contracts + failure modes</li>
                  <li>SEC — threat model + authz decisions</li>
                  <li>QA — falsifiable SSO acceptance tests</li>
                </ul>
              </div>
            )}

            {step === "handoff" && (
              <p className="case-handoff mono">
                handoff BE → SEC · artifact: docs/threat-model.md · unresolved:
                IdP claim mapping
              </p>
            )}

            {step === "learn" && (
              <p className="case-learn">
                Learning proposal: protected <span className="mono">auth/</span>{" "}
                paths require security evidence before{" "}
                <span className="mono">ready_to_merge</span>. Accept via CLI —
                never auto-promoted.
              </p>
            )}
          </div>

          <div className="gate-board" aria-label="Release gates">
            <p className="case-label">Gates</p>
            <ul className="gate-list">
              {gates.map((g) => (
                <li key={g.id} className={`gate-item gate-${g.status}`}>
                  <span className="mono">{g.id}</span>
                  <span>{g.status}</span>
                </li>
              ))}
            </ul>
            {step === "handoff" && (
              <p className="gate-note">
                Security gate blocked until threat-model evidence is attached —
                filenames alone never count as a pass.
              </p>
            )}
            {(step === "review" || step === "learn") && (
              <p className="gate-note gate-note-ok">
                After tests + threat notes: verdict <strong>ready</strong>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
