import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050814" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "S. Arumugam | Full Stack Developer | Java Developer",
  description:
    "Official portfolio of S. Arumugam - Computer Science Engineering graduate (2025). Full Stack Developer & Java Developer specializing in Java, Spring Boot, React, Next.js, Node.js, PostgreSQL, Redis, and scalable REST API architectures.",
  keywords: [
    "S. Arumugam",
    "Arumugam",
    "Full Stack Developer",
    "Java Developer",
    "Software Developer",
    "Spring Boot Developer",
    "Next.js Developer",
    "React Developer",
    "ShippingAI",
    "Fresher Software Engineer",
    "Thoothukudi Developer",
    "Tamil Nadu Software Engineer",
  ],
  authors: [{ name: "S. Arumugam" }],
  creator: "S. Arumugam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arumugam-portfolio.vercel.app",
    title: "S. Arumugam | Full Stack Developer | Java Developer",
    description:
      "Full Stack Developer & Java Specialist building scalable web applications, REST APIs, and database-driven systems.",
    siteName: "S. Arumugam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Arumugam | Full Stack Developer | Java Developer",
    description:
      "Passionate Computer Science graduate building scalable full-stack applications with Java, Spring Boot, React, and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Ambient Lighting Mesh */}
          <div className="ambient-mesh">
            <div className="mesh-glow-1" />
            <div className="mesh-glow-2" />
            <div className="mesh-glow-3" />
          </div>

          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
