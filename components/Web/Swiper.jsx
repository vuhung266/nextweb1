import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import IgImg1 from 'public/ig-img-1.jpeg';
import IgImg2 from 'public/ig-img-2.jpeg';
import IgImg3 from 'public/ig-img-3.jpeg';
import IgImg4 from 'public/ig-img-4.jpeg';
import IgImg5 from 'public/ig-img-5.jpeg';
import IgImg6 from 'public/ig-img-6.jpeg';
const MySwiper = () => {
   return (
      <div className='max-w-[1240px] mx-auto py-16'>
         <div className='p-4'>
            <Swiper
               modules={[Autoplay, Navigation, Pagination]}
               navigation
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               breakpoints={{
                  1024: {
                     slidesPerView: 4,
                     spaceBetweenSlides: 150
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetweenSlides: 200
                  },
                  320: {
                     width: 320,
                     slidesPerView: 1,
                  },
               }}
               loop={true}
               pagination={{ clickable: true }}
               spaceBetween={50}
               slidesPerView={3}
            >
               <SwiperSlide><Image src={IgImg1} alt='/' className='w-full h-full' /></SwiperSlide>
               <SwiperSlide><Image src={IgImg2} width='100' height='100' alt='/' className='w-full h-full' /></SwiperSlide>
               <SwiperSlide><Image src={IgImg3} width='100' height='100' alt='/' className='w-full h-full' /></SwiperSlide>
               <SwiperSlide><Image src={IgImg4} width='100' height='100' alt='/' className='w-full h-full' /></SwiperSlide>
               <SwiperSlide><Image src={IgImg5} width='100' height='100' alt='/' className='w-full h-full' /></SwiperSlide>
               <SwiperSlide><Image src={IgImg6} width='100' height='100' alt='/' className='w-full h-full' /></SwiperSlide>
            </Swiper>
         </div>
      </div >
   );
};

export default MySwiper;
