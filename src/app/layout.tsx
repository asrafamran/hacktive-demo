import type { Metadata } from "next";
import "./globals.css";


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GigTrust",
  description: "Bank for the Gigs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative overflow-clip`}
      >
        <main className="h-screen overflow-scroll">{children}</main>
      </body>
    </html>
  );
}
