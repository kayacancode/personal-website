import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head'
import Socialmediafooter from '../components/Socialmediafooter'

const Layout = ({children}) => {
  return (
    <div  class = "min-h-screen bg-[#91bde5]">
      {/* 91bde5 - blue */}
      {/* BBB8E7 purple */}
    <Head> 
        <title>Kaya Jones</title>
        <meta name="description" content="Kaya Jones Full Stack Web Developer Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Nav />
          {children}
          <Socialmediafooter />
    </div>
  )
}

export default Layout