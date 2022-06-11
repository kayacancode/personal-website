import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
 `     <Head>
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
     
          <Hero />
    </div>
  )
}
