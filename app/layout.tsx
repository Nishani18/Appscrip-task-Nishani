import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appscrip Task - Discover Our Products",
  description:
    "Explore our wide range of products. Sign in to see pricing and exclusive offers.",
  openGraph: {
    title: "Appscrip Task - Discover Our Products",
    description:
      "Explore our wide range of products. Sign in to see pricing and exclusive offers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Appscrip Task",
    potentialAction: {
      "@type": "SearchAction",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
