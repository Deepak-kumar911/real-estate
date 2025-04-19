import { CiUser } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link href={"/"} className="flex items-center space-x-2">
        <div >
        <Image src="/images/img3.jpg" className="w-10 h-10 rounded-full" alt="Logo" width={40} height={40} />
        </div>
        <span className="text-xl font-bold text-blue-600">RealHome</span>
      </Link>

      {/* Profile */}
      <div className="flex items-center space-x-2">
        <CiUser className="w-7 h-7 text-blue-600" />
        <span className="text-gray-700 font-medium">Deepak</span>
      </div>
    </header>
  );
}

