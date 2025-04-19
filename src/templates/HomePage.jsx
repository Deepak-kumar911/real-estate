import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
    const searchRef = useRef()
    const router = useRouter()
  return (
    <div>
      <main className="">
      <section className="bg-cover bg-center h-screen flex items-center justify-center text-white relative" style={{ backgroundImage: "url('/images/img2.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-lg mb-8">Search by city, explore listings, and start your next move today.</p>
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-md mx-auto">
          <span className="p-3 text-gray-500">
          <CiLocationOn />
          </span>
          <input
            type="text"
            ref={searchRef}
            placeholder="Enter city..."
            className="flex-grow px-4 py-2 text-black outline-none"
          />
          <div className="p-2">
          <button onClick={()=>{searchRef?.current?.value?.trim() ?  router.push(`/city/${searchRef?.current?.value}`) : toast.error("Please enter preferred city")}}  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
            Search
          </button>
          </div>
        </div>
      </div>
    </section>
      </main>
  
    </div>
  );
}
