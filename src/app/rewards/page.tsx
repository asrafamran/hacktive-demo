import React from "react";
import B1 from "@/public/ranking/B1.png";
import Image from "next/image";
import background from "@/public/background_1.png";

const Page = () => {
    return (
        <div className="overflow-scroll py-10 px-4">
            <div
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="flex flex-col justify-center items-center relative h-[200px] border-2 border-gray-300 rounded-lg p-4"
            >
                {/* Optional overlay for better readability */}
                <div className="absolute inset-0 bg-black/20 rounded-lg" />

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
        </div>
    );
};

export default Page;
