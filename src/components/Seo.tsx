import { useEffect } from "react";
import { absoluteUrl, type PageSeo } from "../lib/seo";

/** Client-side document metadata. Pair with static prerender for indexing. */
export function Seo({ page }: { page: PageSeo }) {
  useEffect(() => {
    document.title = page.title;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.head.querySelector(
        `meta[${attr}="${name}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", page.description);
    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:url", absoluteUrl(page.path), true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", page.title);
    setMeta("twitter:description", page.description);

    let link = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = absoluteUrl(page.path);

    const existing = document.getElementById("workforce-jsonld");
    if (existing) existing.remove();
    if (page.jsonLd) {
      const script = document.createElement("script");
      script.id = "workforce-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(page.jsonLd);
      document.head.appendChild(script);
    }
  }, [page]);

  return null;
}
