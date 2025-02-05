import React from "react";
import Image from "next/image";
import background from "@/public/background_1.png";

import B1 from "@/public/ranking/B1.png";
import G1 from "@/public/ranking/G1.png";
import P1 from "@/public/ranking/P1.png";
import S1 from "@/public/ranking/S1.png";
import A1 from "@/public/ranking/A1.png"

import tabung from "@/public/tabung.png"
import car from "@/public/car.png"
import house from "@/public/house.png"
import motorbike from "@/public/motor.png"
import Link from "next/link";

const tiers = [
    {
        ranking: "Bedrock",
        image: B1,
        products: [
            {
                id: 1,
                name: "tabung",
                image: tabung,
                description: "Basic savings account for everyday banking needs",
                salaryAmount: 1000,
                amountDuration: "3 months",
                trustMetricsScoreMin: 300
            }
        ]
    },
    {
        ranking: "Guardian",
        image: G1,
        products: [
            {
                id: 2,
                name: "Referral Program",
                image: tabung,
                description: "Earn rewards by referring new customers",
                salaryAmount: 2000,
                amountDuration: "6 months",
                trustMetricsScoreMin: 400
            },
            {
                id: 3,
                name: "Cashback Voucher",
                image: tabung,
                description: "Get cashback rewards on your purchases",
                salaryAmount: 2000,
                amountDuration: "6 months",
                trustMetricsScoreMin: 400
            }
        ]
    },
    {
        ranking: "Prosperity",
        image: P1,
        products: [
            {
                id: 4,
                name: "Microtakaful/ Takaful",
                image: tabung,
                description: "Islamic insurance coverage for your protection",
                salaryAmount: 3000,
                amountDuration: "9 months",
                trustMetricsScoreMin: 500
            },
            {
                id: 5,
                name: "Personal Financing",
                image: tabung,
                description: "Personal financing solutions for your needs",
                salaryAmount: 3000,
                amountDuration: "9 months",
                trustMetricsScoreMin: 500
            },
            {
                id: 6,
                name: "Motobike Financing",
                image: motorbike,
                description: "Affordable motorcycle financing options",
                salaryAmount: 3000,
                amountDuration: "9 months",
                trustMetricsScoreMin: 500
            }
        ]
    },
    {
        ranking: "Summit",
        image: S1,
        products: [
            {
                id: 7,
                name: "Motobike Financing",
                image: motorbike,
                description: "Premium motorcycle financing solutions",
                salaryAmount: 5000,
                amountDuration: "12 months",
                trustMetricsScoreMin: 600
            },
            {
                id: 8,
                name: "Personal Financing",
                image: tabung,
                description: "Enhanced personal financing packages",
                salaryAmount: 5000,
                amountDuration: "12 months",
                trustMetricsScoreMin: 600
            },
            {
                id: 9,
                name: "Car Financing",
                image: car,
                description: "Competitive car financing solutions",
                salaryAmount: 5000,
                amountDuration: "12 months",
                trustMetricsScoreMin: 600
            }
        ]
    },
    {
        ranking: "Apex",
        image: A1,
        products: [
            {
                id: 10,
                name: "Motorbike Financing",
                image: motorbike,
                description: "Exclusive motorcycle financing packages",
                salaryAmount: 8000,
                amountDuration: "18 months",
                trustMetricsScoreMin: 700
            },
            {
                id: 11,
                name: "House Financing",
                image: house,
                description: "Comprehensive house financing solutions",
                salaryAmount: 8000,
                amountDuration: "18 months",
                trustMetricsScoreMin: 700
            },
            {
                id: 12,
                name: "SME Business Financing",
                image: tabung,
                description: "Business financing for SME growth",
                salaryAmount: 8000,
                amountDuration: "18 months",
                trustMetricsScoreMin: 700
            }
        ]
    }
];





const Page = () => {
    return (
        <div className="overflow-scroll py-10 px-4 mb-[80px]">
            <div
                className="flex flex-col justify-center items-center relative h-fit border-2 border-gray-300 rounded-lg p-4"
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
                <p className="text-xl font-bold pt-4 relative z-10">67 GigTrust</p>
                {/* <p className="text-center text-sm max-w-[70%] text-gray-600 font-semibold pt-2 relative z-10">
                    You are <span className="italic font-normal">50 points</span> away from
                    unlocking GUARDIAN!
                </p> */}

                <p className="text-center text-sm max-w-[70%] text-gray-600 pt-2 relative z-10">
                    Your GigTrust is on a good track!
                </p>

                <div className="text-left text-sm font-semibold py-4 relative z-10 w-full">
                    <p>Tier Journey</p>
                    <div className="flex gap-2">
                        <Image src={B1} alt="B1" className="w-[50px]" />
                        <Image src={G1} alt="G1" className="w-[50px] grayscale" />
                        <Image src={P1} alt="P1" className="w-[65px] grayscale" />
                        <Image src={S1} alt="S1" className="w-[65px] grayscale" />
                        <Image src={A1} alt="A1" className="w-[65px] grayscale" />
                    </div>

                </div>
            </div>

            <div className="pt-4 flex flex-col gap-4">
                {
                    tiers.map((tier, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-2">
                                <Image src={tier.image} alt={tier.ranking} className={`max-w-[40px]  ${tier.ranking !== "Bedrock" && "grayscale"}`} />
                                <p className="text-sm font-semibold">{tier.ranking}</p>
                            </div>
                            <div className="pt-2 flex gap-3">
                                {
                                    tier.products.map((product, i) => (
                                        <Link key={i} href={`/p/products/${index}/${product.id}`} className=" bg-[#F8F5FC] flex-1 flex flex-col items-center justify-center rounded-lg w-[90px] py-2 px-4">

                                            <Image src={product.image} alt={product.name} className={`w-[32px]`} />
                                            <p className="text-[10px] text-center text-wrap">{product.name}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Page;
