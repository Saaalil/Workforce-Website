export type Specialist = {
  flag: string;
  name: string;
  achieves: string;
  bestFor: string;
  stats: { label: string; value: string }[];
  when: string;
  prompt: string;
};

export const SPECIALISTS: Specialist[] = [
  {
    flag: "ARCH",
    name: "Architecture",
    achieves:
      "One-way-door decisions, ADRs, service boundaries, NFR/SLO framing before you rewrite the stack.",
    bestFor:
      "Major refactors, greenfield systems, microservices vs monolith calls, multi-tenant or multi-region bets.",
    stats: [
      { label: "discovery gates", value: "10" },
      { label: "default shape", value: "modular monolith" },
      { label: "output", value: "ADRs + C4" },
    ],
    when: "Need to plan major changes or pick an architecture you can’t casually undo.",
    prompt:
      "workforce/ARCH — plan a major architecture change for our SaaS: modular monolith vs services, Postgres, auth, and rollout risks",
  },
  {
    flag: "UI",
    name: "UI / Product Design",
    achieves:
      "Outcome-led UX, WCAG 2.2 specs, all component states, eng-ready handoff — not pretty mockups with no metric.",
    bestFor:
      "Marketing sites, product redesigns, design systems, checkout/onboarding flows, brand-constrained UI.",
    stats: [
      { label: "a11y bar", value: "WCAG 2.2 AA" },
      { label: "must-ask", value: "10" },
      { label: "focus", value: "outcomes first" },
    ],
    when: "Need a landing page, redesign, or design system that actually ships.",
    prompt:
      "workforce/UI — design a minimal Vercel-style docs site for our product; primary metric is install completion",
  },
  {
    flag: "FE",
    name: "Frontend",
    achieves:
      "RSC-first Next/React builds, routing, performance budgets (LCP/INP/CLS), accessible interactive UI.",
    bestFor:
      "App UIs, docs sites, dashboards, design-to-code, fixing routing/animation/perf debt.",
    stats: [
      { label: "LCP target", value: "<2.5s" },
      { label: "INP target", value: "<200ms" },
      { label: "default", value: "RSC-first" },
    ],
    when: "Need to implement or fix the frontend — routes, motion, Core Web Vitals.",
    prompt:
      "workforce/FE — fix client routing with React Router and add page transitions without jank; keep a11y",
  },
  {
    flag: "BE",
    name: "Backend",
    achieves:
      "Contract-first APIs, idempotent writes, Postgres models, timeouts/retries, OpenAPI you can hand to FE.",
    bestFor:
      "REST/gRPC services, auth APIs, billing webhooks, internal platforms, API versioning.",
    stats: [
      { label: "API style", value: "OpenAPI 3.1" },
      { label: "default DB", value: "Postgres" },
      { label: "mutations", value: "idempotent" },
    ],
    when: "Need APIs, data models, or production service hardening.",
    prompt:
      "workforce/BE — design the auth and billing API contracts with idempotency keys and problem+json errors",
  },
  {
    flag: "DE",
    name: "Data Engineering",
    achieves:
      "Reliable pipelines, lakehouse/dbt medallion, SLAs, contracts, replayable jobs — not notebook→cron.",
    bestFor:
      "Warehouses, ETL/ELT, event ingestion, feature tables for ML, analytics marts.",
    stats: [
      { label: "layers", value: "bronze→gold" },
      { label: "tests", value: "dbt in CI" },
      { label: "ops", value: "SLA + owner" },
    ],
    when: "Need pipelines, gold tables, or trustworthy data products.",
    prompt:
      "workforce/DE — design a dbt gold mart for orders with freshness SLA, grain, and backfill plan",
  },
  {
    flag: "DS",
    name: "Data Science",
    achieves:
      "Decision-grade experiments, estimands, causal/predictive rigor, model cards — not vanity dashboards.",
    bestFor:
      "A/B tests, churn/forecast models, pricing experiments, metric design, go/no-go memos.",
    stats: [
      { label: "pre-register", value: "metric + MDE" },
      { label: "output", value: "decision memo" },
      { label: "hand off to", value: "ML" },
    ],
    when: "Need experiments, analysis, or a model spec before production.",
    prompt:
      "workforce/DS — design an A/B test for checkout; primary metric, MDE, and analysis plan",
  },
  {
    flag: "ML",
    name: "ML Engineering",
    achieves:
      "Train/serve parity, feature stores, registry aliases, canary + rollback, drift monitoring.",
    bestFor:
      "Production models, batch/realtime scoring, champion/challenger, retrain pipelines.",
    stats: [
      { label: "parity", value: "train = serve" },
      { label: "promote", value: "shadow→canary" },
      { label: "rollback", value: "alias swap" },
    ],
    when: "Need a model in production that can roll back in minutes.",
    prompt:
      "workforce/ML — productionize the churn model with Feast features, MLflow @champion, and canary",
  },
  {
    flag: "AI",
    name: "AI / RAG / Agents",
    achieves:
      "RAG and agents with evals in CI, traces, cost/latency budgets, citations — not dump-PDF-and-pray.",
    bestFor:
      "Chat over docs, tool-using agents, support copilots, internal knowledge systems.",
    stats: [
      { label: "ship gate", value: "eval CI" },
      { label: "RAG", value: "hybrid+rerank" },
      { label: "default", value: "LangGraph" },
    ],
    when: "Need a production LLM feature with evals and guardrails.",
    prompt:
      "workforce/AI — build RAG over our docs with hybrid retrieval, citations, and a golden-set CI gate",
  },
  {
    flag: "OPS",
    name: "Platform / DevOps",
    achieves:
      "CI/CD golden paths, IaC, preview envs, secrets, safe deploys — Friday deploys without heroics.",
    bestFor:
      "GitHub Actions, Terraform/Pulumi, container platforms, developer self-service.",
    stats: [
      { label: "changes", value: "via CI" },
      { label: "secrets", value: "OIDC/short-lived" },
      { label: "rollback", value: "documented" },
    ],
    when: "Need pipelines, infra as code, or a paved road to prod.",
    prompt:
      "workforce/OPS — set up GitHub Actions + Terraform golden path with preview envs and rollback",
  },
  {
    flag: "SRE",
    name: "Site Reliability",
    achieves:
      "SLOs, error budgets, incident response, production readiness — reliability as a product.",
    bestFor:
      "Launch readiness, on-call health, SEV playbooks, capacity and toil reduction.",
    stats: [
      { label: "P0 journeys", value: "SLO’d" },
      { label: "alerts", value: "symptom-based" },
      { label: "budget", value: "written policy" },
    ],
    when: "Need SLOs, incident process, or launch reliability review.",
    prompt:
      "workforce/SRE — define SLOs and error budgets for checkout; paging policy and runbook stubs",
  },
  {
    flag: "MON",
    name: "Observability",
    achieves:
      "OTel metrics/logs/traces, actionable alerts, cardinality control — diagnose in minutes, not hours.",
    bestFor:
      "Instrumenting services, RUM, dashboards for P0 journeys, cutting alert noise.",
    stats: [
      { label: "standard", value: "OpenTelemetry" },
      { label: "traces", value: "cross-service" },
      { label: "alerts", value: "+ runbook URL" },
    ],
    when: "Need telemetry, dashboards, or quieter on-call.",
    prompt:
      "workforce/MON — instrument the critical path with OTel; golden signals and burn alerts",
  },
  {
    flag: "SEC",
    name: "Security",
    achieves:
      "Threat models, authn/z review, secrets/supply-chain baselines, AI tool risk — controls that reduce blast radius.",
    bestFor:
      "Auth redesigns, multi-tenant isolation, pre-launch reviews, LLM/tool permissioning.",
    stats: [
      { label: "model", value: "STRIDE" },
      { label: "authz", value: "server-side" },
      { label: "tenancy", value: "no IDOR" },
    ],
    when: "Need threat modeling, authz hardening, or a security gate before GA.",
    prompt:
      "workforce/SEC — threat-model our multi-tenant API; IDOR tests and secret-handling baseline",
  },
  {
    flag: "QA",
    name: "Quality / Testing",
    achieves:
      "Risk-based strategy, Playwright on P0 paths, release gates, flake discipline — confidence without 10k brittle tests.",
    bestFor:
      "Release readiness, e2e critical journeys, contract tests, a11y/perf smoke gates.",
    stats: [
      { label: "e2e focus", value: "3–10 P0" },
      { label: "flake", value: "quarantine" },
      { label: "pyramid", value: "unit→e2e" },
    ],
    when: "Need a test plan or release gate that catches real escapes.",
    prompt:
      "workforce/QA — build a Playwright suite for auth + checkout P0 paths and a CI release gate",
  },
];

/** Compact grid still used if needed */
export const FLAGS = SPECIALISTS.map(({ flag, name }) => ({ flag, name }));

export const USAGE_PROMPTS = SPECIALISTS.map((s) => ({
  flag: s.flag,
  when: s.when,
  prompt: s.prompt,
}));

export const TOOLS = [
  {
    name: "workforce_as",
    blurb: "Load full specialist context for the work at hand.",
  },
  {
    name: "workforce_specialize",
    blurb: "Alias of workforce_as.",
  },
  {
    name: "workforce_list_roles",
    blurb: "Catalog of flags, aliases, owns / does-not-own.",
  },
  {
    name: "workforce_consult",
    blurb: "Mid-task check against a specialty’s quality bars.",
  },
  {
    name: "workforce_handoff",
    blurb: "Switch context — ARCH→FE, DE→AI, OPS→SRE.",
  },
] as const;

export const CURSOR_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "workforce-mcp"]
    }
  }
}`;

export const LOCAL_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "node",
      "args": ["/absolute/path/to/Workforce-MCP/dist/index.js"]
    }
  }
}`;

export const CLAUDE_CLI_CMD = `claude mcp add --scope user workforce -- npx -y workforce-mcp`;

export const CLAUDE_CLI_CMD_WIN = `claude mcp add --scope user workforce -- cmd /c npx -y workforce-mcp`;

export const CLAUDE_MCP_JSON = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "workforce-mcp"]
    }
  }
}`;

export type GuideStep = {
  title: string;
  body: string;
};

export const CURSOR_GUIDE: GuideStep[] = [
  {
    title: "Open MCP settings",
    body: "In Cursor: Settings → MCP. In other AI IDEs (Windsurf, VS Code + MCP, etc.): open the MCP / tools config — usually a JSON file with an mcpServers block.",
  },
  {
    title: "Add the Workforce server",
    body: "Paste the config below (npx is the fast path). Or point command at a local build of Workforce-MCP if you cloned the repo.",
  },
  {
    title: "Save and enable",
    body: "Save the file. Toggle the server on if your IDE has a switch. Wait for the green status next to workforce.",
  },
  {
    title: "Reload if needed",
    body: "Restart the agent / reload MCP tools so prompts like workforce/UI and workforce/FE appear.",
  },
  {
    title: "Call a specialty",
    body: "In chat, run a Workforce prompt — e.g. workforce/UI — with your task. The agent loads that specialist context.",
  },
];

export const CLAUDE_GUIDE: GuideStep[] = [
  {
    title: "Install Claude Code",
    body: "Have the Claude Code CLI (or another CLI coding harness that supports MCP stdio servers) available on your PATH.",
  },
  {
    title: "Add Workforce via CLI",
    body: "Run the command below. --scope user makes it available across projects. On native Windows, use the cmd /c variant so npx spawns correctly.",
  },
  {
    title: "Confirm it’s registered",
    body: "Run claude mcp list (or your harness’s MCP list command) and check that workforce is present.",
  },
  {
    title: "Start a session",
    body: "Open a project in the CLI. Use /mcp if your harness has it to verify the server is connected.",
  },
  {
    title: "Call a specialty",
    body: "Ask for workforce/UI, workforce/FE, workforce/DE, etc. with your task — same prompts as in Cursor.",
  },
];

export const NAV = [
  { to: "/how", label: "How it works" },
  { to: "/specialists", label: "Specialists" },
  { to: "/install", label: "Install" },
  { to: "/tools", label: "Tools" },
] as const;
