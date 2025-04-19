"use client";
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
// IMPORTANT: the order matters!
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("../components/common/LocationView"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function ProjectDetails() {
    const searchParams = useSearchParams()
    const img = searchParams?.get('img')
    const prjname = searchParams?.get('prjname')
    const locname = searchParams?.get('locname')
    const price = searchParams?.get('price')
    const bhk = searchParams?.get('bhk')

    const [details, setDetails] = useState({ data: null, loading: true })

    const getProjectLocation = async () => {
        try {
            const response = await fetch(`/api/fetch-location?location=${`${locname}`},IND`);

            const json = await response.json();
            setDetails({ data: json?.data?.[0], loading: false })
        } catch (error) {
            console.log("Client error:", error);
        }
    };
    useEffect(() => {
        if (locname) {
            getProjectLocation()
        }
    }, [locname])

    return (
        <div className='h-screen items-center content-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-[15%] gap-6 p-4">
                <div className="bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img src={img} alt={prjname} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{prjname}</h3>
                        <div className="text-gray-500 text-sm flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-1 text-red-500" />
                            {locname}
                        </div>
                        <div className="text-lg font-medium text-green-600 mb-1">{price}</div>
                        <div className="text-sm text-gray-600">{bhk}</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    {details?.data?.longitude && details?.data?.latitude && <LazyMap prjname={prjname} price={price} latitude={details?.data?.latitude} longitude={details?.data?.longitude} />}
                </div>
            </div>
        </div>
    )
}
