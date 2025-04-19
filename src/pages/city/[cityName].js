import React from 'react'
import Projects from '@/templates/Projects'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function CityProject() {
   const param =  useParams()
   const router = useRouter()

  return (
    <div>
        {param?.cityName ? 
        <Projects city={param?.cityName}/>
        :<div className='flex h-screen justify-content-center align-items-center w-screen'>
            <div>
        <button onClick={()=>router.push("/")} className="bg-blue-600 h-auto w-auto hover:bg-blue-700 text-white px-6 py-2 rounded-full">Go Back</button>
            </div>
        </div>}
        
    </div>
  )
}
