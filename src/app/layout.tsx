import "@/app/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
  // metadataBase: new URL("https://akano.co"),
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
      <body className={`${inter.variable} relative antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
