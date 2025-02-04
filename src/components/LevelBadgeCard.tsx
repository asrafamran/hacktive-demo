"use client"

import { useState, useEffect } from "react";

import B1 from "@/public/ranking/B1.png";
import background from "@/public/background_1.png";

import Image from "next/image";



export default function LevelBadgeCard({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {

  return (
    <div className="overflow-scroll py-10 px-4">
      <div
        className="flex flex-col justify-center items-center relative h-[200px] border-2 border-fuchsia-800 rounded-xl p-4"
      >
        {/* Background overlay with reduced opacity */}
        <div
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
          className="absolute inset-0 rounded-lg"
        />

        {/* Content */}
        <div className="flex items-center gap-2 relative z-10">
          <Image src={B1} alt="B1" className="max-w-[50px] w-auto h-auto" />
          <p className="font-bold text-lg">Bedrock</p>
        </div>
        <p className="text-xl font-bold pt-4 relative z-10">150 Points</p>
        <p className="text-center text-sm max-w-[70%] text-gray-600 font-semibold pt-2 relative z-10">
          You are <span className="italic font-normal">50 points</span> away from
          unlocking GUARDIAN!
        </p>

        {/* optional children slot */}
        {children}

      </div>
    </div>
  );
}
