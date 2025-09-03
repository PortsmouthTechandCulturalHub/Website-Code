import "@/app/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portsmouth Tech & Cultural Hub",
  description:
    "Cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
  openGraph: {
    title: "Portsmouth Tech & Cultural Hub",
    images: {
      url: "/images/preview.webp",
      alt: "Portsmouth Tech & Cultural Hub",
    },
    description:
      "Cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
  },
  twitter: {
    title: "Portsmouth Tech & Cultural Hub",
    images: {
      url: "/images/preview.webp",
      alt: "Portsmouth Tech & Cultural Hub",
    },
    description:
      "Cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5NF7BYJQX5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5NF7BYJQX5');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} relative antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
