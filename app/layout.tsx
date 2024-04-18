import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import { SessionProvider, useSession } from "next-auth/react";
import NextAuthProvider from "./context/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CafeMATE",
  description: "The ultimate companion for finding the perfect cafe experience tailored just for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <TopNav />
          {children}
          <BottomNav />
        </NextAuthProvider>
      </body>
    </html>
  );
}
