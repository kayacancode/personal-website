import React from 'react'

const Project = (p) => {
  return (
    <div >
    <div className = "w-full rounded">
        
        <a href = {p.link} >
            <div className="w-full rounded">
        <div
          
          class="relative bg-gray-900	w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img
            src= {p.img}
            class="opacity-60 w-full h-full overflow-hidden "
            alt="img"
          />
          <div class="absolute left-0 bottom-0 ">
            <p class="mx-4 my-2 leading-normal font-black	text-3xl text-gray-100">
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