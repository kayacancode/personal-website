import React from 'react'
import Image from 'next/image'
const Project = (p) => {
  return (
    <div >
    <div className = "w-full rounded">
        
        <a href = {p.link} >
            <div className="w-full rounded">
        <div
          
          className="relative bg-gray-900	w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <Image
            src= {p.img}
            className="opacity-60 w-full h-full overflow-hidden "  width= "527x" height= "358px"
            alt="img"
          />
          <div className="absolute left-0 bottom-0 ">
            <p className="mx-4 my-2 leading-normal font-black	text-3xl text-gray-100">
              {p.title}<br />
             
            </p>
          </div>
        </div>   
        </div>     
               
            </a>
            </div>
        </div>
       

  )
}

export default Project