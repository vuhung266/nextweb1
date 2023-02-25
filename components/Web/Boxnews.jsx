import React from 'react';
import Image from 'next/image'
const Boxnews = () => {
   return (
      <div className='max-w-[1240px] mx-auto py-16 text-center'>
         <h1 className='font-bold text-2xl p-4'>Tin tức</h1>
         <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2 relative'>
               <Image
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                  alt='/'
                  width='720'
                  height='451'
               />
               <div className='desc_main_news'>
                  <div className='relative'>
                     <div className='bg'></div>
                     <div className='text'>
                        <a href='#1'>1001 kinh nghiệm cải tạo nhà cũ thành nhà mới của một “phù thủy” gia</a>
                        <div className='desc'>Cải tạo nhà cũ - câu chuyện tưởng xưa như diễm nhưng vẫn là vấn đề vô cùng “nhức nhối”. Nếu bạn cũng đang gặp khó khăn thì hãy nghe các “phù thủy” gia của chúng tôi tư vấn kinh nghiệm cải tạo nhà cũ thành nhà mới phía dưới nhé.</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='w-full h-full hover01'>
               <figure><Image
                  src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                  alt='/'
                  width='255'
                  height='217'
               /></figure>
               <div className='textnews'><a href='#1'>Những sai lầm ngớ ngẩn thường gặp trước khi thiết kế nội thất phòng khách chung cư</a></div>
            </div>
            <div className='w-full h-full hover01'>
               <figure><Image
                  src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
                  alt='/'
                  width='255'
                  height='217'
               /></figure>
               <div className='textnews'><a href='#1'>Những sai lầm ngớ ngẩn thường gặp trước khi thiết kế nội thất phòng khách chung cư</a></div>
            </div>
            <div className='w-full h-full hover01'>
               <figure><Image
                  src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                  alt='/'
                  width='255'
                  height='217'
               /></figure>
               <div className='textnews'><a href='#1'>Những sai lầm ngớ ngẩn thường gặp trước khi thiết kế nội thất phòng khách chung cư</a></div>
            </div>
            <div className='w-full h-full hover01'>
               <figure><Image
                  src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
                  alt='/'
                  width='255'
                  height='217'
               /></figure>
               <div className='textnews'><a href='#1'>Những sai lầm ngớ ngẩn thường gặp trước khi thiết kế nội thất phòng khách chung cư</a></div>
            </div>
         </div>
      </div>
   );
};

export default Boxnews;
