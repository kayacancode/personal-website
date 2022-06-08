import React from 'react'
import Project from '../components/Project'
import Socialmediafooter from '../components/Socialmediafooter'
import Head from 'next/head'
const portfolio = () => {
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
    <div class = "grid-cols-3 p-16 space-y-2 md:space-y-0 grid-cols-3 sm:grid sm:gap-3 sm:grid-cols-3">
    <Project img = "/insuavewetrust.png" title = "In Suave We Trust Blog - 2022" link = "/IWTblog"/>
    <Project img = "/noeljr.png" title = "Scout Leader Photography Potfolio - 2022" link = "/scoutleader" />
    <Project img = "/lettucehome.png" title = "Lettuce coming soon- 2022" link = "/lettuce" />

    </div>
    </div>
  )
}

export default portfolio