import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Data = [
  {
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    text: 'No matter what issue or questions pops up, you are always there to assist me. Thank you so much for your excellent assistance and great customer support through years.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl'
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    text: 'Nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    text: 'isl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit.'
  },
];
const Swiper1 = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {
        Data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='max-w-[130px] m-auto border rounded-full border-cyan-100 overflow-hidden mb-4'><Image src={item.image} width='150' height='150' alt='/' className='w-full h-full' /></div>
              <div className='border rounded-xl p-3 text-white bg-white bg-opacity-10 text-center'>
                <FaQuoteLeft />{item.text} <FaQuoteRight className='right-0 absolute bottom-0' />
              </div>
            </SwiperSlide>
          )
        }
        )}
    </Swiper>
  );
};
const CustomSay = () => {
  return (
    <div className='bg-customsay bg-rules fables-after-overlay'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className='p-4'>
              <Swiper1 />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            aaaa
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSay;
