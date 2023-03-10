import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
const Data = [
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/team3-1.jpg',
    name:'JOHN MARTIN',
    desc:'Programmer'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/team3-2.jpg',
    name:'JOHN MARTIN',
    desc:'Programmer'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/team3-1.jpg',
    name:'JOHN MARTIN',
    desc:'Programmer'
  },
  {
    image: 'https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/team3-2.jpg',
    name:'JOHN MARTIN',
    desc:'Programmer'
  },
]
const Teams = () => {
  return (
    <div className="">
      <div className="max-w-[1240px] mx-auto py-8">
        <div className="relative">
          <div className="grid grid-rows-1 md:grid-cols-4 p-4 gap-8">
            {Data.map((item, index) => {
              return (
                <div key={index} className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 text-center">
                  <div className="grid grid-rows-1">
                    <Image src={item.image} width="150" height="150" alt="/" className="w-full h-full" />
                    <div className='mt-4 font-semibold text-gray-800'>{item.name}</div>
                    <div className='mb-4 text-gray-500'>{item.desc}</div>
                    <div className='border-b fables-second-border-color'></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

