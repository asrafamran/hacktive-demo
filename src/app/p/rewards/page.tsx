import React from "react";
import Image from "next/image";
import background from "@/public/background_1.png";

import B1 from "@/public/ranking/B1.png";
import G1 from "@/public/ranking/G1.png";
import P1 from "@/public/ranking/P1.png";
import S1 from "@/public/ranking/S1.png";
import A1 from "@/public/ranking/A1.png"

import tabung from "@/public/tabung.png"

const tiers = [
    {
        ranking: "Bedrock",
        image: B1,
        products: [
            {
                name: "tabung",
                image: tabung,
            },
        ]
    },
    {
        ranking: "Guadrian",
        image: G1,
        products: [
            {
                name: "Referral Program",
                image: tabung,
            },
            {
                name: "Cashback",
                image: tabung,
            },
        ]
    },
    {
        ranking: "Prosperity",
        image: P1,
        products: [
            {
                name: "Vehicle Financing",
                image: tabung,
            },
            {
                name: "Tabung",
                image: tabung,
            },
        ]
    },
    {
        ranking: "Summit",
        image: S1,
        products: [
            {
                name: "Vehicle Financing",
                image: tabung,
            },
            {
                name: "Tabung",
                image: tabung,
            },
        ]
    },
    {
        ranking: "Apex",
        image: A1,
        products: [
            {
                name: "Vehicle Financing",
                image: tabung,
            },
            {
                name: "Tabung",
                image: tabung,
            },
        ]
    },
]




const Page = () => {
    return (
        <div className="overflow-scroll py-10 px-4 mb-[80px]">
            <div
                className="flex flex-col justify-center items-center relative h-[200px] border-2 border-gray-300 rounded-lg p-4"
            >
                {/* Background overlay with reduced opacity */}
                <div
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.8,
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
            </div>

            <div className="pt-4 flex flex-col gap-4">
                {
                    tiers.map((tier, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-2">
                                <Image src={tier.image} alt={tier.ranking} className="max-w-[40px]" />
                                <p className="text-sm font-semibold">{tier.ranking}</p>
                            </div>
                            <div className="pt-2 flex gap-3">
                                {
                                    tier.products.map((product, index) => (
                                        <div key={index} className="bg-white flex flex-col items-center rounded-lg w-[90px] py-2 px-4">
                                            <Image src={product.image} alt={product.name} className="w-[32px]" />
                                            <p className="text-[10px] text-center">{product.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;
