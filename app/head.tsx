import React from "react";

export default function Head() {
  return (
    <>
      {/* Explicit link tags to ensure crawlers see the favicons */}
      <link
        rel="icon"
        href="/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />
      <link
        rel="icon"
        href="/favicon-48x48.png"
        sizes="48x48"
        type="image/png"
      />
      <link
        rel="icon"
        href="/favicon-96x96.png"
        sizes="96x96"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        sizes="180x180"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Basic structured data to help Google show organization info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Heuristic System",
            url: "https://heuristicsystem.com",
            logo: "https://heuristicsystem.com/Logo_icon.png",
            sameAs: [],
            description:
              "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
          }),
        }}
      />
    </>
  );
}
