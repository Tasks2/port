import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Amy Wanjala | Software Engineer • Junior Security Analyst",
  description: "Software engineer specializing in data-driven fintech solutions and machine learning applications. Building elegant interfaces for complex business problems.",
  keywords: ["Software Engineer", "Fintech", "Data Science", "Machine Learning", "React", "Next.js"],
  authors: [{ name: "Amy Wanjala" }],
  openGraph: {
    title: "Amy Wanjala | Software Engineer ",
    description: "Software engineer specializing in data-driven fintech solutions and machine learning applications.",
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
