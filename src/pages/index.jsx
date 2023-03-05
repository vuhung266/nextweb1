import { Hero } from 'components/Hero/Hero'
import CustomSay from 'components/Web/customsay'
import Boxnews from 'components/Web/Boxnews'
import Footer from 'components/Web/Footer'
import MySwiper from 'components/Web/Swiper'
import Partners from 'components/Web/Partners'
import Teams from 'components/Web/Team'
import React from 'react'

const work = () => {
   return (
      <div>
         <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
         <MySwiper />
         <Boxnews />
         <CustomSay />
         <Teams />
         <Partners />
         <Footer />
      </div>
   )
}

export default work