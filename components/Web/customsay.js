import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Data = [
  {
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    name:'Nguyen Van A',
    text: 'No matter what issue or questions pops up, you are always there to assist me. Thank you so much for your excellent assistance and great customer support through years.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    name:'Nguyen Van A',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl'
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    name:'Nguyen Van A',
    text: 'Nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=130&h=130&q=80',
    name:'Nguyen Van A',
    text: 'Vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit. Sed euismod, nisl vel lacinia aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet elit.'
  },
]
const SwiperButtons = ({ prevOnClick, nextOnClick }) => (
  <div className="swiper-buttons">
    <button className="absolute left-10 top-16 my-button-prev z-10 text-white" onClick={prevOnClick}><FaChevronLeft size={24} /></button>
    <button className="absolute right-10 top-16 my-button-next z-10 text-white" onClick={nextOnClick}><FaChevronRight size={24} /></button>
  </div>
);

const Swiper1 = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{ prevEl: '.my-button-prev', nextEl: '.my-button-next' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiper}
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='max-w-[130px] m-auto border rounded-full border-cyan-100 overflow-hidden mb-4'><Image src={item.image} width='150' height='150' alt='/' className='w-full h-full' /></div>
              <h3 className='font-semibold text-white text-center mb-2'>{item.name}</h3>
              <div className='text-sm border rounded-xl px-8 pt-4 pb-7 text-white bg-white bg-opacity-10 text-center relative'>
                <FaQuoteLeft /><span className='italic'>{item.text}</span> <FaQuoteRight className='right-6 absolute bottom-3' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperButtons prevOnClick={handlePrevClick} nextOnClick={handleNextClick} />
    </>
  );
};

const CustomSay = () => {
  return (
    <div className='bg-customsay bg-rules fables-after-overlay'>
      <div className='max-w-[640px] mx-auto py-16'>
        <h4 className='text-2xl font-semibold text-white pb-3 mb-3 relative z-10 text-center'>What our customers say</h4>
            <div className='relative'>
              <Swiper1 />
            </div>
      </div>
    </div>
  );
};

export default CustomSay;
