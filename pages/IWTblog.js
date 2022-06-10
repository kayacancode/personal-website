import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const IWTblog = () => {
  return (
    <div>
        <Head>
      {/* developed by: Kaya Jones
  website: https://kayacancode.com/ */}
        <title>Kayacancode</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name ="title" content = "Kayacancode" />
        <meta name="description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta property="og:title" content="Kayacancode"/>
        <meta name="og:description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta name="og:url" content="kayacancode.com/ " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kayacancode"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex items-center justify-center ">
                <h1 className="text-3xl font-bold ">In Suave We Trust Blog <a href = "https://www.insuavewetrust.com/">📎</a></h1>
                

        </div>
        <section className="hero container max-w-screen-lg mx-auto p-10 ">
    <Image className="mx-auto px-10 py-10" src="/demo.gif" alt="screenshot" width= "915px" height= "508px"/>
    <p className="text-center text-[#3C3939] pt-5">I recently finished a web app with an iphone interface thats main purpose is a music review blog. <br /> Technologies used: React, Next JS, Firebase, and Tailwind CSS. </p>
</section>
        

    </div>
  )
}

export default IWTblog