import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserLayout from "./container/UserLayout";
import AuthProvider from "./AuthProvider";
import { UserProvider } from "./context/UserContext";

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
      <AuthProvider>
        <UserProvider>
          <body className={inter.className}>
            <UserLayout />
            {children}
          </body>
        </UserProvider>
      </AuthProvider>
    </html>
  );
}
