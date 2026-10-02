import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://aspirelearningcentre.com';
const DEFAULT_TITLE = 'ASPIRE Learning Centre — Offline Coaching for Std. 8–12, NEET & JEE';
const DEFAULT_DESC = 'Official website of ASPIRE Learning Centre. Focused offline coaching, structured preparation, expert faculty, and personal academic guidance for Std. 8–12, NEET, and JEE Main & Advanced in Kausa, Mumbra, Thane.';

export default function PageSEO({
  title,
  description = DEFAULT_DESC,
  schema = null,
  canonicalPath
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title 
      ? `${title} | ASPIRE Learning Centre, Mumbra`
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Canonical URL
    const fullPath = canonicalPath || location.pathname;
    const canonicalUrl = `${BASE_URL}${fullPath === '/' ? '' : fullPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    const updateOG = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOG('og:title', formattedTitle);
    updateOG('og:description', description);
    updateOG('og:url', canonicalUrl);

    // 5. Schema JSON-LD
    let scriptTag = document.getElementById('page-json-ld');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic schema tag on unmount if needed
      const tag = document.getElementById('page-json-ld');
      if (tag) tag.remove();
    };
  }, [title, description, schema, canonicalPath, location.pathname]);

  return null;
}
