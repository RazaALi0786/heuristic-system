import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider, ToastViewport } from "@/components/toast";
import { Toaster } from "@/components/Toaster";

export const metadata = {
  metadataBase: new URL("https://heuristicsystem.com"),
  title: "Heuristic System",
  description:
    "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
  // Provide explicit icon links (these files should be placed in /public)
  icons: [
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-48x48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  openGraph: {
    title: "Heuristic System",
    description:
      "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",

    images: [
      {
        url: "/Logo_icon.png",
        width: 800,
        height: 600,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900 bg-white">
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
