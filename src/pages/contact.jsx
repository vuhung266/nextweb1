import React from 'react'
import Header from 'components/Web/Header'
import Footer from "components/Web/Footer"
import { RiFacebookBoxFill, RiGoogleFill, RiInstagramFill, } from 'react-icons/ri'
import { CiLocationOn, CiPhone, CiShare2 } from "react-icons/ci"
import { motion } from "framer-motion";
const initial = { y: -100, opacity: 0 }
const animate = { y: 0, opacity: 1 }
const contact = () => {
  return (
    <div>
      <Header heading="Liên hệ" />
      <div className="fables-light-background-color">
        <div className="max-w-[1240px] m-auto">
          <ol className="flex py-3 mb-12">
            <li className="breadcrumb-item">
              <a href="#" className="fables-second-text-color">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </div>
      <div className='max-w-[1080px] m-auto p-4 h-screen'>
        <div className="max-w-[800px] m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 text-center">
              <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 1 }}
              >
                <div className="inline-block my-4"><CiLocationOn size={48} /></div>
                <h4 className="font-semibold my-3">Address Information</h4>
                <p className="text-gray-500">level13, 2 Elizabeth St, Melbourne, Victoria 2000</p>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 text-center">
              <motion.div
                initial={initial}
                animate={animate}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="inline-block my-4"><CiPhone size={48} /></div>
                <h4 className="font-semibold my-3">Mail &amp; Phone number</h4>
                <p className="text-gray-500">adminsupport@website.com<br />
                  +333 111 111 000</p>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 text-center">
              <motion.div
                initial={initial}
                animate={animate}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="inline-block my-4"><CiShare2 size={48} /></div>
                <h4 className="font-semibold my-3">Stay In Touch</h4>
                <div className="text-center inline-flex gap-4">
                  <a href="#" target="_blank" className="flex-none">
                    <RiGoogleFill size={16} />
                  </a>
                  <a href="#" target="_blank" className="flex-none">
                    <RiFacebookBoxFill size={16} />
                  </a>
                  <a href="#" target="_blank" className="flex-none">
                    <RiInstagramFill size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <h1 className='text-2xl font-bold text-center p-4'>Contact Us</h1>
        <div className='max-w-[600px] m-auto text-center text-gray-500 mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
            <form>
              <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-sm p-3' type="text" placeholder='Name' />
                <input className='border shadow-sm p-3' type="email" placeholder='Email' />
              </div>
              <input className='border shadow-sm p-3 w-full my-2' type="text" placeholder='Subject' />
              <textarea className='border shadow-sm p-3 w-full' placeholder='Message'></textarea>
              <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            </form>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className='map'>
              aaaaa
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default contact