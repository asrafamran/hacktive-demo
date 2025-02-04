import product_1 from "@/public/Products_1.png";
import Image from "next/image";


const page = () => {
    return (
        <div>
            <Image src={product_1} alt="product_1" />
        </div>
    )
}

export default page