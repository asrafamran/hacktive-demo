"use client";

import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export default function TransactionList() {

  return (
    <div className="overflow-scroll py-10">
      <div className="flex flex-col gap-7 bg-white rounded-3xl p-6">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg text-left">Transaction History</p>
        </div>

        {Array.from({ length: 15 }).map((_, index) => (
          <Link
          key={index}
            href={"/p/home/transaction/proof"}
            className="flex flex-row gap-4 justify-between"
          >
            <div className="w-[42px] h-[42px] bg-purple-200 rounded-full"></div>
            <div className="flex flex-col gap-1 flex-grow">
              <p className="text-sm font-semibold uppercase">
                Income Transaction
              </p>
              <p className="text-xs font-semithin">Today</p>
            </div>
            <p className="font-bold text-green-600">+ RM 500.00</p>
            <ChevronRightIcon className="text-gray-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}
