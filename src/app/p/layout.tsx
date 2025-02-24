import type { Metadata } from "next"
import Navbar from "@/components/Navbar";
import backgroundImage from "@/public/background.png"
import Image from "next/image";

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
    <>
      <div className="fixed inset-0 -z-10">
        <Image src={backgroundImage} className="w-full h-full object-cover" alt="background Image" />
        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-black/05" />
      </div>

      <main className="h-screen overflow-scroll">{children}</main>
      <div>
        <Navbar />
      </div>
    </>
  );
}
