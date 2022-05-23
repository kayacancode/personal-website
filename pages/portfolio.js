import React from 'react'
import Project from '../components/Project'
import Socialmediafooter from '../components/Socialmediafooter'
const portfolio = () => {
  return (
    <div>
    <div class = "grid-cols-3 p-16 space-y-2 md:space-y-0 grid-cols-3 sm:grid sm:gap-3 sm:grid-cols-3">
    <Project img = "/insuavewetrust.png" title = "In Suave We Trust Blog - 2022" link = "/IWTblog"/>
    <Project img = "/noeljr.png" title = "Scout Leader Photography Potfolio - 2022" />

    </div>
    </div>
  )
}

export default portfolio