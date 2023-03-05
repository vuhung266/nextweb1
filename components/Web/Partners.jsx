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
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-1.jpg',
    name:'Partner 1'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-2.jpg',
    name:'Partner 2'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-3.jpg',
    name:'Partner 3'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-4.jpg',
    name:'Partner 4'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-1.jpg',
    name:'Partner 1'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-2.jpg',
    name:'Partner 2'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-3.jpg',
    name:'Partner 3'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/partner2-4.jpg',
    name:'Partner 4'
  },
]
const SwiperButtons = ({ prevOnClick, nextOnClick }) => (
  <div className="swiper-buttons">
    <button className="absolute left-4 top-5 my-button-prev z-10 text-gray-600" onClick={prevOnClick}><FaChevronLeft size={24} /></button>
    <button className="absolute right-4 top-5 my-button-next z-10 text-gray-600" onClick={nextOnClick}><FaChevronRight size={24} /></button>
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
        spaceBetween={30}
        slidesPerView={4}
        onSwiper={setSwiper}
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='max-w-[150px] m-auto bg-white rounded-full px-6 py-2 overflow-hidden'><Image src={item.image} width='150' height='150' alt='/' className='w-full h-full' /></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperButtons prevOnClick={handlePrevClick} nextOnClick={handleNextClick} />
    </>
  );
};

const Partners = () => {
  return (
    <div className='bg-gray-300'>
      <div className='max-w-[1240px] mx-auto py-8'>
            <div className='relative px-12'>
              <Swiper1 />
            </div>
      </div>
    </div>
  );
};

export default Partners;
