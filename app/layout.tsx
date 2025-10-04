import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider, ToastViewport } from "@/components/toast";
import { Toaster } from "@/components/Toaster";
export const metadata = {
  title: "Heuristic System",
  description:
    "Empowering Business Success Through Innovative Technology Solutions and Expert Consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
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
