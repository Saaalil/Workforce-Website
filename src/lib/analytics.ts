/** Anonymous product analytics — never send case content, repos, or PII. */
export type AnalyticsEvent =
  | "landing_cta_clicked"
  | "case_demo_step_viewed"
  | "host_selected"
  | "config_copied"
  | "init_command_copied"
  | "first_case_prompt_copied"
  | "design_partner_cta_clicked";

type Payload = {
  route?: string;
  host?: string;
  cta?: string;
  step?: string;
};

export function track(event: AnalyticsEvent, payload: Payload = {}): void {
  try {
    const data: Record<string, string> = {};
    if (payload.route) data.route = payload.route;
    if (payload.host) data.host = payload.host;
    if (payload.cta) data.cta = payload.cta;
    if (payload.step) data.step = payload.step;
    // Vercel Analytics custom events (injected at runtime)
    const va = (window as unknown as {
      va?: (event: string, properties?: unknown) => void;
    }).va;
    va?.("event", { name: event, ...data });
  } catch {
    /* analytics must never break UX */
  }
}
