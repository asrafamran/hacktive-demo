import product from "@/public/product.png";
import rewards from "@/public/rewards.png";
import tabung from "@/public/tabung.png";
import community from "@/public/community.png";

import Image from "next/image";


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
  return (
    <div className="overflow-scroll py-10 px-4">
      <div>
        {/* <Bell /> */}
      </div>
      <div>
        <p className="text-sm text-gray-700">Peace Be Upon You, Mahmud</p>
        <p className="tetx-lg font-bold">RM ***.**</p>
      </div>


      {/* Products */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        {
          Products.map((product, index) => (
            <div key={index} className="bg-[#F8F2FB] rounded-lg p-4">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-sm font-bold">{product.name}</p>
                <Image src={product.image} alt={product.name} className="max-w-[80px] "/>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  );
}
