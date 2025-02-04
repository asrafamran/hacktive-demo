"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import backgroundImage from "@/public/background.png";

export default function TransactionList() {
  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { fullName } = JSON.parse(userData);
      const firstName = fullName.split(" ")[0];
    }

    return () => {};
  }, []);

  return (
    <div className="overflow-scroll">
      {/* <div className="fixed inset-0 z-10">
        <Image src={backgroundImage} className="w-full h-full object-cover" alt="background Image" />
        Optional overlay for better readability
        <div className="absolute inset-0 bg-black/05" />
      </div> */}
      <div className="flex flex-col gap-4 px- text-center justify-center items-center h-screen">
        <p className="text-md font-semibold">Mark this as income?</p>
        <div className="w-[100px] h-[100px] bg-purple-600 rounded-full"></div>
        <p className="text-lg font-bold uppercase">ABC COMMERCE SDN BHD</p>
        <p className="text-sm font-semithin text-gray-500">
          5 February 2025 Wednesday at 12:30pm
        </p>
        <p className="text-2xl font-bold text-green-600">+ RM500.00</p>
        <div className="flex flex-row gap-7 justify-center w-full">
          <div className="rounded-3xl p-3 px-9 bg-purple-800 text-white font-semibold text-lg">
            Yes
          </div>
          <div className="rounded-3xl p-3 px-9 border-purple-800 border-2 text-purple-800 font-semibold text-lg">
            No
          </div>
        </div>
      </div>
    </div>
  );
}
