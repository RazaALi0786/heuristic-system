import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider, ToastViewport } from "@/components/toast";
import { Toaster } from "@/components/Toaster";

export const metadata = {
  metadataBase: new URL("https://heuristicsystem.com"),
  title: {
    default: "Heuristic System",
    template: "%s | Heuristic System",
  },
  description:
    "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
  keywords: [
    "Heuristic System",
    "technology consulting",
    "software development",
    "business automation",
    "digital transformation",
  ],
  authors: [{ name: "Heuristic System", url: "https://heuristicsystem.com" }],
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    default: "/Logo_icon.png",
    apple: "/Logo_icon.png",
  },

  openGraph: {
    title: "Heuristic System",
    description:
      "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
    url: "https://heuristicsystem.com",
    images: [
      {
        url: "/Logo_icon.png",
        width: 1200,
        height: 630,
        alt: "Heuristic System logo",
      },
    ],
    siteName: "Heuristic System",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heuristic System",
    description:
      "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
    images: ["/Logo_icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900 bg-white">
        {/* JSON-LD Organization structured data for better rich results */}
        <script
          type="application/ld+json"
          // Note: Next.js will inject this string safely into the document
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Heuristic System",
              url: "https://heuristicsystem.com",
              logo: "https://heuristicsystem.com/Logo_icon.png",
              sameAs: [
                /* add social profiles if any, e.g. "https://twitter.com/yourhandle" */
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1.7329642870",
                  contactType: "customer support",
                },
              ],
            }),
          }}
        />

        <ToastProvider swipeDirection="right">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          {/* Toast container */}
          <Toaster /> {/* <-- This renders the active toasts */}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
