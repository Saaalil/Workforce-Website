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
  {
    flag: "MGR",
    name: "Manager / Delivery Lead",
    achieves:
      "Breaks work into specialty-owned slices, sequences handoffs, and runs multi-role reviews — who does what, in what order, with clear acceptance.",
    bestFor:
      "New initiatives, cross-specialty features, “who should own this?”, scrum-style alignment before craft work.",
    stats: [
      { label: "default tools", value: "discuss + delegate" },
      { label: "rule", value: "one specialty at a time" },
      { label: "output", value: "ownership plan" },
    ],
    when: "Need to decide which specialties own which parts — or run a multi-POV discussion first.",
    prompt:
      "workforce/MGR — break “express checkout” into specialty slices with order, acceptance, and first workforce/FLAG to call",
  },
];

/** Compact grid still used if needed */
export const FLAGS = SPECIALISTS.map(({ flag, name }) => ({ flag, name }));

export const USAGE_PROMPTS = SPECIALISTS.map((s) => ({
  flag: s.flag,
  when: s.when,
  prompt: s.prompt,
}));

/** MCP tools — what calling each one achieves */
export const TOOLS = [
  {
    name: "workforce_assemble",
    achieves:
      "V2 — recommend the smallest specialist roster, order, exclusions, and risks for a delivery request.",
  },
  {
    name: "workforce_contract",
    achieves:
      "V2 — build a draft WorkforceCase (commitments, gates, scope) + Markdown summary. Persist with the CLI.",
  },
  {
    name: "workforce_review",
    achieves:
      "V2 — evidence vs commitments → ready / not_ready / blocked. Never invents passes.",
  },
  {
    name: "workforce_learn",
    achieves:
      "V2 — policy proposal from incident/rollback/missed gate. Human must accept via CLI.",
  },
  {
    name: "workforce_list_roles",
    achieves:
      "See the full catalog: short flags, aliases, what each specialty owns and does not own — so you pick the right context before loading one.",
  },
  {
    name: "workforce_as",
    achieves:
      "Load full specialist context for a task (identity, stack defaults, quality bars, anti-patterns, handoffs). The agent investigates, then replies with Goal / Blocking questions / Assumptions / Plan and stops until you approve.",
  },
  {
    name: "workforce_specialize",
    achieves:
      "Same as workforce_as — an alias if your agent or UI prefers this name.",
  },
  {
    name: "workforce_consult",
    achieves:
      "Mid-work check against an already-loaded specialty’s quality bars and decision frameworks — unblock a decision without switching specialties.",
  },
  {
    name: "workforce_handoff",
    achieves:
      "Switch specialist context cleanly (e.g. ARCH→FE, DE→AI, OPS→SRE) with findings and artifacts carried forward for the next slice of work.",
  },
  {
    name: "workforce_discuss",
    achieves:
      "Multi-specialty meeting — scrum, critique, premortem, war room, retro, design review, or postmortem theater (full cast, one corrective action per specialty).",
  },
  {
    name: "workforce_delegate",
    achieves:
      "Manager-style ownership plan: which specialty owns which slice, in what order, with acceptance checks and workforce/FLAG invoke hints.",
  },
  {
    name: "workforce_list_pods",
    achieves:
      "See pod roster presets (WEB, DP, AIP, PLAT, SHIP) — fixed specialty bands, not craft specialties.",
  },
  {
    name: "workforce_pod",
    achieves:
      "Run a pod: member POVs + delegation table + first workforce/FLAG. Execute one specialty at a time after.",
  },
] as const;

/** Orchestration prompts (not a craft specialty — facilitate multi-role work). */
export const ORCHESTRATION_PROMPTS = [
  {
    flag: "discuss",
    name: "Discuss (multi-specialty)",
    achieves:
      "Scrum-style (or critique / premortem / war room / retro / design review / postmortem theater) round-table — challenges from each specialty POV, then a recommended sequence. Postmortem theater always seats every specialty.",
    when: "Before building something cross-cutting, after an incident, or when you want every craft’s objections on the table.",
    calls: [
      "workforce/discuss",
      "workforce/scrum",
      "workforce/postmortem",
      "workforce/postmortem_theater",
    ],
  },
  {
    flag: "delegate",
    name: "Delegate (ownership plan)",
    achieves:
      "Break a goal into specialty-owned slices with order, acceptance checks, and workforce/FLAG invoke hints.",
    when: "After discuss, or whenever you ask “who should do what?”",
    calls: ["workforce/delegate", "workforce/plan_work"],
  },
  {
    flag: "WEB",
    name: "Pods (roster presets)",
    achieves:
      "WEB / DP / AIP / PLAT / SHIP — fixed specialty bands with member POVs and a delegation table. Specialty AI ≠ pod AIP.",
    when: "You know the craft band but need sequencing before a single specialty.",
    calls: [
      "workforce/WEB",
      "workforce/DP",
      "workforce/AIP",
      "workforce/PLAT",
      "workforce/SHIP",
    ],
  },
] as const;

/**
 * Every MCP prompt chip Cursor shows under Workforce, grouped by specialty.
 * Primary call first; aliases are the same specialty context.
 */
export const PROMPT_GROUPS = SPECIALISTS.map((s) => {
  const aliasMap: Record<string, string[]> = {
    ARCH: [
      "workforce/architect",
      "workforce/ARCH",
      "workforce/sa",
      "workforce/software_architect",
      "workforce/system_architect",
    ],
    UI: [
      "workforce/ui_designer",
      "workforce/UI",
      "workforce/uid",
      "workforce/ux",
      "workforce/ux_designer",
      "workforce/ui_design",
      "workforce/product_designer",
    ],
    FE: [
      "workforce/frontend",
      "workforce/FE",
      "workforce/front_end",
      "workforce/web_frontend",
    ],
    BE: [
      "workforce/backend",
      "workforce/BE",
      "workforce/back_end",
      "workforce/api",
    ],
    DE: [
      "workforce/data_engineer",
      "workforce/DE",
      "workforce/data_eng",
      "workforce/etl",
    ],
    DS: ["workforce/data_scientist", "workforce/DS"],
    ML: [
      "workforce/ml_engineer",
      "workforce/ML",
      "workforce/mle",
      "workforce/model_engineer",
    ],
    AI: [
      "workforce/ai_engineer",
      "workforce/AI",
      "workforce/aie",
      "workforce/llm",
      "workforce/rag",
    ],
    OPS: [
      "workforce/ops",
      "workforce/platform_eng",
      "workforce/platform_engineer",
      "workforce/doe",
    ],
    SRE: [
      "workforce/sre",
      "workforce/site_reliability",
      "workforce/site_reliability_engineer",
    ],
    MON: ["workforce/monitoring", "workforce/MON"],
    SEC: ["workforce/security", "workforce/SEC"],
    QA: ["workforce/qa", "workforce/qe"],
    MGR: [
      "workforce/manager",
      "workforce/MGR",
      "workforce/em",
      "workforce/eng_manager",
      "workforce/engineering_manager",
      "workforce/delivery_lead",
      "workforce/scrum_master",
    ],
  };

  return {
    flag: s.flag,
    name: s.name,
    achieves: s.achieves,
    when: s.when,
    calls: aliasMap[s.flag] ?? [`workforce/${s.flag}`],
  };
});

export const CURSOR_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "@saaalil/workforce-mcp"]
    }
  }
}`;

/** After `npm i @saaalil/workforce-mcp` — only works in that project folder */
export const NPM_INSTALL_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "@saaalil/workforce-mcp"]
    }
  }
}`;

export const NPM_INSTALL_CMD = `npm i @saaalil/workforce-mcp`;

export const NPM_INSTALL_NOTE =
  "npm i installs the package into a Node project. For Cursor MCP, still use npx (recommended). Do not point Cursor at ./node_modules/... unless that package is installed in the same workspace.";

export const LOCAL_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "node",
      "args": ["/absolute/path/to/Workforce-MCP/dist/index.js"]
    }
  }
}`;

export const CLAUDE_CLI_CMD = `claude mcp add --scope user workforce -- npx -y @saaalil/workforce-mcp`;

export const CLAUDE_CLI_CMD_WIN = `claude mcp add --scope user workforce -- cmd /c npx -y @saaalil/workforce-mcp`;

export const CLAUDE_MCP_JSON = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "@saaalil/workforce-mcp"]
    }
  }
}`;

export type GuideStep = {
  title: string;
  body: string;
};

/** Google Antigravity — ~/.gemini/config/mcp_config.json or .agents/mcp_config.json */
export const ANTIGRAVITY_CONFIG = `{
  "mcpServers": {
    "workforce": {
      "command": "npx",
      "args": ["-y", "@saaalil/workforce-mcp@1.5.0"]
    }
  }
}`;

export const ANTIGRAVITY_CONFIG_PATHS =
  "Global: ~/.gemini/config/mcp_config.json · Workspace: .agents/mcp_config.json";

export const ANTIGRAVITY_GUIDE: GuideStep[] = [
  {
    title: "Open MCP Servers",
    body: "In Antigravity IDE: … on the agent panel → MCP Servers → Manage MCP Servers → View raw config. Or edit mcp_config.json directly.",
  },
  {
    title: "Paste the Workforce server",
    body: "Add the workforce entry under mcpServers (stdio via npx). Use @1.5.0 or later for V2 case protocol + CLI.",
  },
  {
    title: "Save and refresh",
    body: "Save mcp_config.json, hit Refresh in Manage MCP Servers (or restart the agent session) until workforce shows connected.",
  },
  {
    title: "Optional — allow tools",
    body: "In MCP Tools permissions, add mcp(workforce/*) with Allow if you don’t want to approve every Workforce tool call.",
  },
  {
    title: "Call a specialty or pod",
    body: "Same prompts as Cursor: workforce/WEB, workforce/DE, workforce/MGR, workforce/discuss, …",
  },
];

export const CURSOR_GUIDE: GuideStep[] = [
  {
    title: "Open MCP settings",
    body: "In Cursor: Settings → MCP. In other AI IDEs (Windsurf, VS Code + MCP, etc.): open the MCP / tools config — usually a JSON file with an mcpServers block.",
  },
  {
    title: "Add the Workforce server",
    body: "Use npx (recommended — no project install). Or npm i @saaalil/workforce-mcp in a project and point node at node_modules. Local clone is for contributors.",
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
    body: "Run the command below (uses the published npm package @saaalil/workforce-mcp). --scope user makes it available across projects. On native Windows, use the cmd /c variant so npx spawns correctly.",
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
  { to: "/how", label: "How V2 works" },
  { to: "/release-readiness", label: "Release readiness" },
  { to: "/install", label: "Step-by-step" },
  { to: "/docs/case-file", label: "Case file" },
  { to: "/evals", label: "Proof" },
  { to: "/design-partners", label: "Partners" },
] as const;

export const PACKAGE = {
  name: "@saaalil/workforce-mcp",
  version: "1.5.0",
  npmUrl: "https://www.npmjs.com/package/@saaalil/workforce-mcp",
  githubUrl: "https://github.com/Saaalil/Workforce-MCP",
  websiteRepoUrl: "https://github.com/Saaalil/Workforce-Website",
  xUrl: "https://x.com/HiremathSalil",
  xHandle: "@HiremathSalil",
  email: "salilhiremath2712@gmail.com",
  author: "Salil Hiremath",
} as const;

/**
 * Active users from the external dashboard.
 * Edit `label` / `count` here when the dashboard number changes.
 */
export const ACTIVE_USERS = {
  label: "Active users",
  /** Display string shown on the site (keep short: "1.2k") */
  labelCount: "1.2k",
  /** Exact integer for aria / analytics */
  count: 1200,
  note: "From external dashboard · active installs",
  href: "/design-partners",
} as const;

/** What V2 actually delivers — outcomes, not slogans */
export const V2_OUTCOMES = [
  {
    title: "A versioned delivery case",
    body: "Every high-risk change gets a committed WorkforceCase under .workforce/cases/ — goal, scope, roster, commitments, gates, handoffs, and events. Portable across Cursor, Claude Code, and Antigravity.",
  },
  {
    title: "Smallest necessary roster",
    body: "workforce_assemble recommends who must own the slice (e.g. ARCH → BE → SEC → QA) and names who is excluded — with reasons. Never dumps all 14 specialties by default.",
  },
  {
    title: "Evidence-backed merge decision",
    body: "workforce review compares the contract to supplied diffs and test evidence. Missing security or test proof fails closed — filenames never invent a pass.",
  },
  {
    title: "Learning without silent policy drift",
    body: "Incidents and missed gates become learn proposals. Humans accept via CLI. Nothing auto-promotes into your repo policies.",
  },
] as const;

/** V1 vs V2 — proof of the product shift */
export const V1_VS_V2 = [
  {
    v1: "Specialist prose in the chat",
    v2: "Versioned case + machine-readable contract",
  },
  {
    v1: "You pick a role manually",
    v2: "Minimal roster with explicit exclusions",
  },
  {
    v1: "Handoff is another prompt",
    v2: "Handoff records owner, artifacts, unresolved items",
  },
  {
    v1: "Quality bars are suggestions",
    v2: "Gates with required evidence and statuses",
  },
  {
    v1: "Context dies when you switch hosts",
    v2: "Committed .workforce/ travels with the repo",
  },
  {
    v1: "“Looks done” is agent judgment",
    v2: "Review verdict: ready / not_ready / blocked",
  },
] as const;

/** End-to-end guide used on Home, How, and Install */
export const V2_GUIDE_STEPS = [
  {
    n: "01",
    title: "Connect the MCP server",
    detail:
      "Add @saaalil/workforce-mcp via npx in Cursor, Claude Code, or Antigravity. V1 specialty prompts keep working. V2 tools appear as workforce_assemble, workforce_contract, workforce_review, workforce_learn.",
    command: 'npx -y @saaalil/workforce-mcp',
  },
  {
    n: "02",
    title: "Initialize the local workspace",
    detail:
      "Run the workforce CLI once in the Git repo. Creates .workforce/ (cases, reviews, learnings) and a marked block in AGENTS.md so every harness sees the same protocol. Writes require --apply.",
    command:
      "npm exec --yes --package=@saaalil/workforce-mcp workforce init --apply",
  },
  {
    n: "03",
    title: "Assemble the roster",
    detail:
      "Ask your agent to call workforce_assemble with the request (e.g. enterprise OAuth + SSO). You get recommended roles, execution order, excluded specialties, and risks — deterministic rules, not vibes.",
    command: "workforce_assemble · task: Add enterprise OAuth with SSO",
  },
  {
    n: "04",
    title: "Create the delivery contract",
    detail:
      "Call workforce_contract with the accepted assembly. You receive a draft WorkforceCase (JSON) plus Markdown summary. Persist it explicitly — MCP never writes your disk.",
    command: "workforce case create --from-stdin --apply",
  },
  {
    n: "05",
    title: "Execute one specialty at a time",
    detail:
      "Load workforce/ARCH, then BE, SEC, QA (or whatever the roster named). Record each handoff with summary, decisions, artifacts, and unresolved assumptions so the next owner starts cold without losing state.",
    command:
      'workforce handoff <case-id> --from BE --to SEC --summary "…" --apply',
  },
  {
    n: "06",
    title: "Review before merge",
    detail:
      "Attach changed files and test evidence. workforce review (CLI or MCP) returns gate results and a verdict. ready_to_merge fails if security or tests are missing — especially on protected paths like auth/.",
    command: "workforce review <case-id> --intent ready_to_merge --apply",
  },
  {
    n: "07",
    title: "Learn from misses",
    detail:
      "If a PR is rejected or a gate was skipped, workforce_learn proposes a future policy. Accept only with workforce learn accept <id> --apply.",
    command:
      'workforce learn propose <case-id> --event missed_gate --narrative "…"',
  },
] as const;

/** Concrete proof points we can defend publicly */
export const V2_PROOF = [
  {
    title: "12 deterministic eval fixtures",
    body: "OAuth, webhooks, PII migrations, incidents, RAG — roster and gate expectations run with no LLM calls (npm run eval).",
    link: "/evals",
    linkLabel: "See methodology",
  },
  {
    title: "MCP stays filesystem-free",
    body: "dist/index.js is audited for no fs / shell / eval / network. Local state is only via the explicit workforce CLI.",
    link: "/how",
    linkLabel: "Security model",
  },
  {
    title: "JSON Schema as an API",
    body: "schemas/workforce-case.schema.json and review/learn schemas ship in the package for CI and external agents.",
    link: "/docs/case-file",
    linkLabel: "Case file docs",
  },
  {
    title: "Gates fail closed",
    body: "Empty evidence cannot pass ready_to_merge. Protected-path changes require security evidence — not a filename that looks secure.",
    link: "/release-readiness",
    linkLabel: "Release readiness",
  },
] as const;

export const V2_GATES = [
  {
    id: "scope",
    meaning: "Commitments not blocked; assumptions marked, not invented",
  },
  {
    id: "security",
    meaning: "Threat/authz evidence when SEC is on roster or protected paths change",
  },
  {
    id: "test-evidence",
    meaning: "At least one supplied test with result: pass for merge/release",
  },
  {
    id: "handoff",
    meaning: "Multi-role cases record at least one accountable handoff",
  },
  {
    id: "release",
    meaning: "Other required gates clear for ready_to_merge / release",
  },
] as const;

export const V2_TOOLS = [
  {
    name: "workforce_assemble",
    achieves:
      "Recommend the smallest specialist roster, execution order, exclusions with reasons, and named risks. nextAction = create_contract.",
  },
  {
    name: "workforce_contract",
    achieves:
      "Turn an accepted assembly into a validated draft WorkforceCase + Markdown summary. Does not write files — persist with the CLI.",
  },
  {
    name: "workforce_review",
    achieves:
      "Compare a supplied case and evidence to commitments/gates. Verdict: ready | not_ready | blocked. Never invents test or security passes.",
  },
  {
    name: "workforce_learn",
    achieves:
      "Turn an incident, rollback, rejected PR, or missed gate into a policy proposal. Accept only via CLI.",
  },
] as const;

export type ChangelogRelease = {
  version: string;
  date: string;
  title: string;
  highlights: string[];
};

/** Full package history shown on /whats-new */
export const CHANGELOG: ChangelogRelease[] = [
  {
    version: "1.5.0",
    date: "2026-08-11",
    title: "V2 delivery protocol — case files, CLI, review gates",
    highlights: [
      "Local workforce CLI: init, case, handoff, review, learn (filesystem explicit; MCP stays read-only)",
      "MCP tools: workforce_assemble, workforce_contract, workforce_review, workforce_learn",
      "Deterministic roster/gates/eval fixtures; schemas exported as JSON Schema",
      "Positioning: shared team memory, ownership, and proof of delivery",
    ],
  },
  {
    version: "1.4.4",
    date: "2026-08-06",
    title: "End-to-end finished product context",
    highlights: [
      "Constitution: ship the full user-visible thing — real copy + themed photos/assets from the web by default (license-clear sources)",
      "No more gray-box / lorem demos unless the user asked for a stub",
      "FE + UI packs: hard bars against placeholder media; prefer Unsplash/Pexels/Wikimedia/Openverse or user assets",
    ],
  },
  {
    version: "1.4.3",
    date: "2026-08-06",
    title: "Now available in Antigravity as well!",
    highlights: [
      "Works in Google Antigravity IDE / CLI via mcp_config.json (stdio + npx) — same specialties and pods as Cursor",
      "Fixed double shebang that crashed npx on 1.4.1 (use @1.4.3 or later)",
      "Install docs: Antigravity tab with copy-paste config + MCP Tools Allow tip (mcp(workforce/*))",
      "MCP SDK kept external; packs/icons embedded (scanner-safe package surface)",
    ],
  },
  {
    version: "1.4.2",
    date: "2026-08-02",
    title: "Clear malware-looking package alerts",
    highlights: [
      "Stop bundling MCP SDK into our file so AJV new Function is not attributed to Workforce",
      "Embed specialty packs and icons at build time",
      "Drop runtime websiteUrl from server metadata",
    ],
  },
  {
    version: "1.4.1",
    date: "2026-08-02",
    title: "Supply-chain hardening",
    highlights: [
      "Safe local frontmatter parser (removed gray-matter/js-yaml)",
      "SECURITY.md trust boundary docs",
      "Hiring framing removed from product copy",
    ],
  },
  {
    version: "1.4.0",
    date: "2026-08-02",
    title: "Pods — roster presets",
    highlights: [
      "Pods: WEB (UI+FE+BE), DP (DS+DE), AIP (DS+DE+ML+AI), PLAT (OPS+SRE+MON), SHIP (SEC+BE+FE+QA)",
      "Tools: workforce_pod, workforce_list_pods — member POVs → delegation → one specialty",
      "Prompts: workforce/WEB, workforce/DP, workforce/AIP, workforce/PLAT, workforce/SHIP",
      "Specialty workforce/AI kept separate from intelligence pod AIP",
      "ADR-0001 documents pod contracts; site Specialists + What’s new catalogs pods",
    ],
  },
  {
    version: "1.3.0",
    date: "2026-08-01",
    title: "Manager + discuss + delegate",
    highlights: [
      "New specialty MGR — delivery lead: sequence work, don’t craft everything",
      "workforce_discuss / workforce/discuss — scrum, critique, premortem, war_room, retro, design_review",
      "postmortem_theater — full cast, one corrective action per specialty",
      "workforce_delegate / workforce/delegate — ownership plan with order + acceptance",
      "Prompts: workforce/MGR, workforce/postmortem, workforce/scrum, workforce/plan_work",
    ],
  },
  {
    version: "1.2.1",
    date: "2026-08-01",
    title: "Install path clarity",
    highlights: [
      "Docs warn against node ./node_modules MCP paths (MODULE_NOT_FOUND)",
      "Recommend npx -y @saaalil/workforce-mcp for Cursor / Claude",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-08-01",
    title: "Brand + contractor intake",
    highlights: [
      "MCP server brand icons and website URL metadata",
      "Constitution: investigate → Goal / Blocking questions / Assumptions / Plan → stop",
      "All specialty briefs framed for production-grade contractor intake",
    ],
  },
  {
    version: "1.0.0 → 1.1.x",
    date: "2026-07 / 2026-08",
    title: "Initial specialist MCP",
    highlights: [
      "First public package: specialist context packs (not a hiring tool)",
      "13 craft specialties: ARCH, UI, FE, BE, DE, DS, ML, AI, OPS, SRE, MON, SEC, QA",
      "Tools: workforce_as / specialize, list_roles, consult, handoff",
      "Slash prompts workforce/FLAG + aliases; short-flag resolution",
      "Role packs: stack defaults, quality bars, anti-patterns, discovery questions",
    ],
  },
];

export type WhatsNewItem = {
  flag: string;
  title: string;
  body: string;
  call: string;
  when: string;
};

/** Featured on home + /whats-new */
export const WHATS_NEW: WhatsNewItem[] = [
  {
    flag: "V2",
    title: "Delivery protocol — case files & review gates",
    body: "Assemble a minimal roster, write a versioned WorkforceCase, hand off with artifacts, and review against evidence before merge. Local CLI for .workforce/; MCP tools stay read-only.",
    call: "workforce_assemble",
    when: "High-risk agent-authored PRs (auth, payments, protected paths)",
  },
  {
    flag: "CLI",
    title: "Explicit workforce CLI",
    body: "workforce init / case / handoff / review / learn. Writes require --apply. No hidden MCP filesystem access — the security model stays intact.",
    call: "workforce init --apply",
    when: "First time in a repo, or before merge review",
  },
  {
    flag: "E2E",
    title: "End-to-end finished product",
    body: "Specialty briefs still expect the full deliverable: real copy, themed photos/assets from license-clear web sources by default — not lorem and gray boxes.",
    call: "Constitution",
    when: "Any user-visible build (sites, apps, landing pages)",
  },
  {
    flag: "AGY",
    title: "Cursor · Claude · Antigravity",
    body: "Same V2 protocol across tested stdio hosts. Specialty packs and pods (WEB, DP, AIP) remain available alongside assemble/contract/review.",
    call: "Install",
    when: "You’re switching harnesses mid-delivery",
  },
];

export type PodCatalogItem = {
  flag: string;
  title: string;
  description: string;
  members: string;
  memberFlags: string[];
  memberCount: number;
  sequence: string;
  when: string;
  call: string;
  prompt: string;
  note?: string;
};

export const PODS_CATALOG: PodCatalogItem[] = [
  {
    flag: "WEB",
    title: "Web product pod",
    description:
      "UI + FE + BE — design and ship a user-facing surface with API contracts. Member POVs, then one specialty at a time (not all three coding at once).",
    members: "UI · FE · BE",
    memberFlags: ["UI", "FE", "BE"],
    memberCount: 3,
    sequence: "UI → FE + BE (after UI handoff) → optional QA later",
    when: "Landing pages, app UI, CRUD products, marketing + API-backed flows",
    call: "workforce/WEB",
    prompt:
      "workforce/WEB — plan express checkout UI + API: design, frontend, and backend slices with order and acceptance",
  },
  {
    flag: "DP",
    title: "Data product pod",
    description:
      "DS + DE — decision rigor meets governed pipelines. Lock the metric/estimand, then ship contracts, SLAs, and replayable marts.",
    members: "DS · DE",
    memberFlags: ["DS", "DE"],
    memberCount: 2,
    sequence:
      "DS (estimand/metric) → DE (contracts/pipelines) — or DE first if warehouse already framed",
    when: "Marts, SLAs, experiment specs, analytics products, decision metrics",
    call: "workforce/DP",
    prompt:
      "workforce/DP — design the orders gold mart with freshness SLA and the primary decision metric it serves",
  },
  {
    flag: "AIP",
    title: "Intelligence pod",
    description:
      "DS + DE + ML + AI — LLM/agent/RAG or model lifecycle with data and eval discipline. Not the same as specialty workforce/AI alone.",
    members: "DS · DE · ML · AI",
    memberFlags: ["DS", "DE", "ML", "AI"],
    memberCount: 4,
    sequence: "DS → DE → AI or ML (pick one path) → evals before widen",
    when: "RAG, agents, ranking models, feature pipelines tied to model/LLM products",
    call: "workforce/AIP",
    prompt:
      "workforce/AIP — plan a RAG help assistant for checkout: data contracts, retrieval, evals, and cost caps",
    note: "Specialty workforce/AI ≠ pod workforce/AIP",
  },
  {
    flag: "PLAT",
    title: "Platform / reliability pod",
    description:
      "OPS + SRE + MON — path to prod, SLOs/error budgets, and telemetry that explains the system under load.",
    members: "OPS · SRE · MON",
    memberFlags: ["OPS", "SRE", "MON"],
    memberCount: 3,
    sequence: "OPS (path to prod) → SRE (SLOs) → MON (telemetry/alerts)",
    when: "CI/CD, environments, SLOs, incidents, observability baselines",
    call: "workforce/PLAT",
    prompt:
      "workforce/PLAT — define CI/CD, checkout SLOs, and golden-signal alerts for the payment path",
  },
  {
    flag: "SHIP",
    title: "Ship / release gate pod",
    description:
      "SEC + BE + FE + QA — harden authz and critical journeys, then gate the release. No skipped threat pass.",
    members: "SEC · BE · FE · QA",
    memberFlags: ["SEC", "BE", "FE", "QA"],
    memberCount: 4,
    sequence: "SEC (threat pass) → BE/FE fixes → QA release gate",
    when: "Pre-prod hardening, auth/money paths, release candidates",
    call: "workforce/SHIP",
    prompt:
      "workforce/SHIP — release-gate express checkout: threat model, API/UI fixes, and P0 e2e gate",
  },
];

export const POD_COUNT = PODS_CATALOG.length;
export const SPECIALIST_COUNT = SPECIALISTS.length;