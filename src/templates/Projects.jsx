'use client'
import ProjectCard from '@/components/common/ProjectCard';
import Loader from '@/components/Loader';
import React, { useEffect, useState } from 'react'

export default function Projects({city}) {
    const [details,setDetails] = useState({list:[],loading:true})

    const getCityProjectDetais = async () => {
        try {
          const response = await fetch(`/api/fetch-html?city=${city}`);
          const json = await response.json();
          console.log("html", json);
          setDetails({list:json?.data,loading:false})
        } catch (error) {
          console.log("Client error:", error);
        }
      };
 useEffect(()=>{
getCityProjectDetais()
 },[city])
  return (
    <div className=''>
        {
            details?.loading ? <Loader/> : <div className='px-10 py-5'><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {details?.list.map((project, ind) => (
              <ProjectCard key={ind} {...project} />
            ))}
          </div></div>  
        }
 
    </div>
  )
}
