import { PACKAGE } from "../data";

/** Hardcoded social proof — keep in sync everywhere this number is shown. */
export const USERS_COUNT_LABEL = "1k";
export const USERS_COUNT_FULL = "1,000";

export function NpmWeeklyDownloads({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a
        className="npm-dl npm-dl-compact"
        href={PACKAGE.npmUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${USERS_COUNT_FULL} users`}
      >
        <span className="npm-dl-label">users</span>
        <strong className="npm-dl-count">{USERS_COUNT_LABEL}</strong>
      </a>
    );
  }

  return (
    <a
      className="npm-dl"
      href={PACKAGE.npmUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${USERS_COUNT_FULL} users`}
    >
      <div className="npm-dl-top">
        <span className="npm-dl-label">Users</span>
      </div>
      <div className="npm-dl-row">
        <strong className="npm-dl-count">{USERS_COUNT_LABEL}</strong>
      </div>
      <span className="npm-dl-pkg">{PACKAGE.name}</span>
    </a>
  );
}
