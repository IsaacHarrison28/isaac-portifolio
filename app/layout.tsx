import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isaacharrisondev.vercel.app"),
  title: {
    default: "Isaac Harrison Tembo | Full-Stack Engineer",
    template: "%s | Isaac Harrison Tembo",
  },
  description:
    "Full-Stack Engineer based in Lusaka, Zambia. Specializing in React, TypeScript, Node.js, and scalable cloud solutions. View my portfolio and projects.",
  keywords: [
    "Full-Stack Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Software Engineer Zambia",
    "Isaac Harrison Tembo",
    "Isaac Harrison",
  ],
  authors: [{ name: "Isaac Harrison Tembo" }],
  creator: "Isaac Harrison Tembo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaacharrisondev.vercel.app",
    siteName: "Isaac Harrison Portfolio",
    title: "Isaac Harrison Tembo | Full-Stack Engineer",
    description: "Full-Stack Engineer crafting scalable digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaac Harrison Tembo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Harrison Tembo | Full-Stack Engineer",
    description: "Full-Stack Engineer crafting scalable digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Isaac Harrison Tembo",
                jobTitle: "Full-Stack Engineer",
                url: "https://isaacharrisondev.vercel.app",
                sameAs: [
                  "https://www.linkedin.com/in/isaac-harrison",
                  "https://github.com/IsaacHarrison28",
                ],
                knowsAbout: [
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Full-Stack Development",
                  "Frontend development",
                  "Backend development",
                  "Web development",
                  "Software engineering",
                ],
              }),
            }}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
