export type PageSeo = {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
};

export const SITE_ORIGIN = "https://workforce-website-psi.vercel.app";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p === "/" ? "" : p}`;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/how": {
    title: "How Workforce V2 works — delivery protocol",
    description:
      "Step-by-step: init, assemble, contract, handoff, review, learn. Shared case files, release gates, filesystem-free MCP.",
    path: "/how",
  },
  "/": {
    title: "Workforce V2 — Shared team memory for AI coding agents",
    description:
      "Workforce V2 turns agent-written changes into shared delivery cases: scoped work, named owners, reviewable evidence, and a release decision.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Workforce",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Shared team memory, ownership, and proof of delivery for AI coding agents.",
    },
  },
  "/release-readiness": {
    title: "Release readiness — Workforce",
    description:
      "Evidence-backed release gates for high-risk agent-authored PRs. Local case files, no hidden MCP filesystem access.",
    path: "/release-readiness",
  },
  "/docs/case-file": {
    title: "Case file schema — Workforce",
    description:
      "Versioned WorkforceCase JSON: roster, commitments, gates, handoffs, and evidence.",
    path: "/docs/case-file",
  },
  "/evals": {
    title: "Evals — Workforce",
    description:
      "Deterministic roster and gate fixtures — no LLM calls in the V2 evaluator.",
    path: "/evals",
  },
  "/design-partners": {
    title: "Design partners — Workforce",
    description:
      "Early access for teams shipping agent-authored changes who want accountable delivery cases.",
    path: "/design-partners",
  },
  "/install": {
    title: "Install Workforce — MCP + local CLI",
    description:
      "Add the MCP server, run workforce init, assemble a case, and review before merge.",
    path: "/install",
  },
};
