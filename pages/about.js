import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head'
import Image from 'next/image'
const about = () => {
  return (
    <div>
    <div class="w-screen text-center  font-['Roboto',sans-serif]">
           <h1 class = "text-4xl">hi 👋</h1> 
            <div class = "block p-10">
            <Image src= "/biopic.png" alt = "memoji bio pic" width = "123px" height = "128px"/>

            <p class = "text-center font-['Segoe UI',sans ]">I am an aspiring  full stack engineer who studies computer science and is a dog sitter. I am a student who loves to incorporate computer sicence into all of my other passions/interests. I have experince in web and python development. <br /> 

In my free time I like to walk dogs, play basketball, and watch movies. 

<br /> Hope you enjoy my website! </p>
</div>


    </div>

    </div>
    
  )
}

export default about