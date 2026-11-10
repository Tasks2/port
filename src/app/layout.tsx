import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import MotionProvider from "@/components/motion/MotionProvider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.roleLine}`,
    // Child pages that export a `title` get it slotted into %s.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-1 pt-8 pb-16">
            <Container>{children}</Container>
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
