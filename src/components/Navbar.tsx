import { CircleDollarSign, Gift, House } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg py-3 px-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-around text-gray-700">
                {/* Example navigation items */}
                <button>
                    <Link href={"/"} className="flex flex-col items-center">
                        <House className="text-[#7A3497]" />
                    </Link>
                    <span className="text-xs mt-1">Home</span>
                </button>

                <button>
                    <Link href={"/rewards"} className="flex flex-col items-center">
                        <Gift className="text-[#7A3497]" />
                    </Link>
                    <span className="text-xs mt-1">Rewards</span>
                </button>

                <button>
                    <Link href={"/tabung"} className="flex flex-col items-center">
                        <CircleDollarSign className="text-[#7A3497]" />
                        <span className="text-xs mt-1">Tabung</span>
                    </Link>
                </button>

                <button>
                    <Link href={"/products"} className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7A3497]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <span className="text-xs mt-1">Products</span>
                    </Link>
                </button>

                <button>
                    <Link href={"/community"} className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7A3497]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <span className="text-xs mt-1">Community</span>
                    </Link>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
