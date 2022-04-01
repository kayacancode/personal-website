import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div  class = "min-h-screen bg-[#BBB8E7]">
    <Head>
        <title>Kaya Jones</title>
        <meta name="description" content="Kaya Jones Full Stack Web Developer Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Nav />
          {children}
    </div>
  )
}

export default Layout