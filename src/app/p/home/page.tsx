"use client";

import { useState, useEffect } from "react";
import LevelBadgeCard from "@/components/LevelBadgeCard";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

export default function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { fullName } = JSON.parse(userData);
      const firstName = fullName.split(" ")[0];
      setUserName(firstName);
    }

    return () => {};
  }, []);

  return (
    <div className="overflow-scroll py-10">
      <div className="px-4">
        <div>{/* <Bell /> */}</div>
        <div>
          <p className="text-sm text-gray-700">Peace Be Upon You, {userName}</p>
          <p className="tetx-lg font-bold">RM ***.**</p>
        </div>

        <LevelBadgeCard />
      </div>

      <div className="flex flex-col gap-7 bg-white rounded-3xl p-6">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg text-left">Income History</p>
          <Link href={"/p/home/transaction"}>
            <CirclePlus />
          </Link>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex flex-row gap-4 justify-between">
            <div className="w-[42px] h-[42px] bg-purple-200 rounded-full"></div>
            <div className="flex flex-col gap-1 flex-grow">
              <p className="text-sm font-semibold uppercase">Shop</p>
              <p className="text-xs font-semithin">Today</p>
            </div>
            <p className="font-bold text-green-600">+ RM 500.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
