import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserLayout from "./container/UserLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoFusion",
  description: "Explore Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserLayout/>
        {children}
      </body>
    </html>
  );
}
