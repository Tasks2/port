import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
      <body>
        <div style={styles.wrapper}>
          <Navbar />
          <main style={styles.main}>
            <div style={styles.container}>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    paddingTop: "2rem",
    paddingBottom: "4rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
};
