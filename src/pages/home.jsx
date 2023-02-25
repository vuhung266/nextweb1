import { Hero } from 'components/Hero/Hero'
import Portfolio from 'components/Hero/Portfolio'
import Boxnews from 'components/Web/Boxnews'
import Footer from 'components/Web/Footer'
import MySwiper from 'components/Web/Swiper'
import React from 'react'

const work = () => {
   return (
      <div>
         <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
         <MySwiper />
         <Boxnews />
         <Portfolio />
         <Footer />
      </div>
   )
}

export default work