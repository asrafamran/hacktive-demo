"use client"

import { useState, useEffect } from "react";

import product from "@/public/product.png";
import rewards from "@/public/rewards.png";
import tabung from "@/public/tabung.png";
import community from "@/public/community.png";

import Image from "next/image";

import LevelBadgeCard from "@/components/LevelBadgeCard"


const Products = [
  {
    name: "Products",
    image: product,
  },
  {
    name: "Tabung",
    image: rewards,
  },
  {
    name: "Rewards",
    image: tabung,
  },
  {
    name: "Community",
    image: community,
  },
]



export default function Home() {

  const [userName, setUserName] = useState("");


  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('userData')
    if (userData) {
      const { fullName } = JSON.parse(userData)
      const firstName = fullName.split(' ')[0]
      setUserName(firstName)
    }

    return () => {
    }
  }, [])



  return (
    <div className="overflow-scroll py-10">
      <div className="px-4">
        <div>
          {/* <Bell /> */}
        </div>
        <div>
          <p className="text-sm text-gray-700">Peace Be Upon You, {userName}</p>
          <p className="tetx-lg font-bold">RM ***.**</p>
        </div>


        <LevelBadgeCard />
      </div>

      <div className="flex flex-col gap-7 bg-white rounded-3xl p-6">
        <p className="font-bold text-lg text-center">Income History</p>
        <div className="flex flex-row gap-4 justify-between">
          <div className="w-[42px] h-[42px] bg-purple-200 rounded-full"></div>
          <div className="flex flex-col gap-1 flex-grow">
            <p className="text-sm font-semibold uppercase">Shop</p>
            <p className="text-xs font-semithin">Today</p>
          </div>
          <p className="font-bold text-green-600">+ RM 500.00</p>
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
