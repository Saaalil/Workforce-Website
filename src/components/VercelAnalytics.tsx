import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

/**
 * Vite SPA helper: keep Vercel Web Analytics in sync with React Router.
 */
export function VercelAnalytics() {
  const location = useLocation();
  const path = location.pathname + location.search;

  useEffect(() => {
    window.va?.("pageview", { route: location.pathname, path });
  }, [location.pathname, path]);

  return (
    <Analytics
      mode="production"
      framework="vite"
      route={location.pathname}
      path={path}
    />
  );
}
