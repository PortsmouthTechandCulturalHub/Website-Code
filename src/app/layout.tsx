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
    "Empowering the next generation of farmers and agricultural leaders through innovative tech solutions, driving sustainable growth and prosperity.",
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
        <Footer/>
      </body>
    </html>
  );
}
