import Image from "next/image";
import backgroundImage from "@/public/background.png"


export default function Home() {
  return (
    <div className="overflow-scroll py-10 px-4 h-full">
      <div className="fixed inset-0 -z-10">
        <Image src={backgroundImage} className="w-full h-full object-cover" alt="background Image" />
        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-black/05" />
      </div>

      <div className="flex flex-col items-center justify-center h-full">

        <div className="h-[80px] w-[80px] bg-[#AF69CC] rounded-lg mb-8"></div>


        <div className="mb-8">
          <p className="text-center text-sm text-gray-600">Briding the gap between your hustle
            <br />
            and you financial goals.
          </p>
        </div>
        <div className="text-center">
          <h1 className=" text-2xl font-bold">Empowering Your Hustle, <br /> <span className="text-[#7A3497]">Financing Your Future.</span></h1>
        </div>


        {/* Login */}
        <div className=" mt-48">
          <div className="bg-[#7A3497] px-8 py-2 rounded-lg">
            <p className=" text-gray-100 text-sm">Login with Biometric</p>
          </div>
          <div className="pt-6 text-center text-sm">

            <p>No account yet?</p>
            <p className="font-bold text-[#7A3497]">Get Started</p>
          </div>
        </div>
      </div>
    </div >
  );
}
