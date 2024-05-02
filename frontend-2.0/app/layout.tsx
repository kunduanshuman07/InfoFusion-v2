import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserLayout from "./container/UserLayout";
import AuthProvider from "./AuthProvider";
import { UserProvider } from "./context/UserContext";
import NextBreadcrumb from "./components/NextBreadCrumb";
import { FaCaretRight } from "react-icons/fa";

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
            <NextBreadcrumb
              homeElement={'InfoFusion'}
              separator={<span className="text-xs my-auto text-cyan-600"> <FaCaretRight className=""/> </span>}
              activeClasses='text-cyan-600 sm:text-sm text-xs m-auto'
              containerClasses='flex py-2 sm:px-5 px-2 bg-white'
              listClasses='sm:text-sm text-xs hover:underline mx-2 font-bold m-auto'
              capitalizeLinks
            />
            {children}
          </body>
        </UserProvider>
      </AuthProvider>
    </html>
  );
}
