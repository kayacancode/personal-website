import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head'
import Image from 'next/image'
const about = () => {
  return (
    <div>
           <Head>
      {/* developed by: Kaya Jones
  website: https://kayacancode.com/ */}
        <title>Kayacancode</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name ="title" content = "Kayacancode" />
        <meta name="description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta property="og:title" content="Kayacancode"/>
        <meta name="og:description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta name="og:url" content="kayacancode.com/ " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kayacancode"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div class="w-screen text-center  font-['Roboto',sans-serif]">
           <h1 class = "text-4xl">hi 👋</h1> 
            <div class = "block p-10">
            <Image src= "/biopic.png" alt = "memoji bio pic" width = "123px" height = "128px"/>

            <p class = "text-center font-['Segoe UI',sans ]">I am an aspiring  full stack engineer who studies computer science and plays college basketball. I am a student who loves to incorporate computer science into all of my other passions/interests. I have experince in web development and data science.  

In my free time I like to volunteer at the dog shelter, play basketball, and watch movies. 

<br /> Hope you enjoy my website! </p>
</div>


    </div>

    </div>
    
  )
}

export default about