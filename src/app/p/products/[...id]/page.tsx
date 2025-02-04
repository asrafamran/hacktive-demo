
import React from 'react'

import B1 from "@/public/ranking/B1.png";
import G1 from "@/public/ranking/G1.png";
import P1 from "@/public/ranking/P1.png";
import S1 from "@/public/ranking/S1.png";
import A1 from "@/public/ranking/A1.png"

import tabung from "@/public/tabung.png"
import car from "@/public/car.png"
import house from "@/public/house.png"
import motorbike from "@/public/motor.png"
import Image from 'next/image';

const tiers = [
    {
        ranking: "Bedrock",
        image: B1,
        products: [
            {
                id: 1,
                name: "Tabung",
                image: tabung,
                description: "Basic savings account for everyday banking needs",
                salaryAmount: 1000,
                amountDuration: "3 months",
                trustMetricsScoreMin: 300
            }
        ]
    },
    {
        ranking: "Guadrian",
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

const page = ({ params }: { params: { id: string } }) => {

    const ranking = tiers[parseInt(params.id[0])];
    const product = tiers[parseInt(params.id[0])].products.filter(productItem => productItem.id === parseInt(params.id[1]))[0]

    return (
        <div className='bg-gradient-to-r from-blue-200 to-blue-500 h-full flex flex-col overflow-scroll mb-[80px]'>
            <div className='flex justify-center items-center h-56'>
                <h2 className='text-3xl font-bold'>{product.name}</h2>

            </div>
            <div className='flex flex-col flex-1 bg-white rounded-t-2xl px-6 py-8'>
                <div className='flex gap-4 items-center h-[80px]'>
                    <Image src={ranking.image} alt={ranking.ranking} className='max-w-[50px]' />
                    <p className='bg-gray-200 rounded-lg px-4 py-1 text-gray-700 text-sm font-semibold'>{ranking.ranking}</p>
                </div>
                <div className='bg-pink-200 rounded-2xl p-4 text-sm'>
                    <p className='font-bold'>Requirements</p>
                    <div className='px-4 pt-4 flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>Achieved {product.amountDuration}-months streak minimum income RM{product.salaryAmount} </p>
                    </div>
                    <div className='px-4 pt-4 flex items-center gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>GigTrust metric score {'>'} {product.trustMetricsScoreMin} </p>
                    </div>
                    <div className='px-4 pt-4 flex items-center gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>Achieved {product.amountDuration}-months streak monthly contribution in Tabung</p>
                    </div>
                    <div className='px-4 pt-4 flex items-center gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>Subscribe takaful/microtakaful for {product.amountDuration} months consecutively </p>
                    </div>

                </div>

                <div className=' mt-4'>
                    <button className='bg-[#7A3497] text-white px-4 py-1 w-full rounded-full disabled:bg-purple-300' disabled>
                        Apply Now
                    </button>
                </div>
            </div>




        </div>
    )
}

export default page