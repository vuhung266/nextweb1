import React from "react";
import { RiFacebookBoxFill, RiGoogleFill, RiInstagramFill, RiMapPin2Line, RiPhoneLine, RiMailSendLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <div className="fables-footer-image fables-after-overlay text-white py-8 py-lg-5 bg-rules">
        <div className="max-w-[1240px] m-auto relative z-50">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
            <h2 className="font-semibold pb-8 text-4xl">Newsletter</h2>
            <form className="form-inline position-relative">
              <div className="form-group fables-subscribe-formgroup">
                {/* <input type="email" className="form-control fables-subscribe-input fables-btn-rouned" placeholder="Your Email"> */}
              </div>
              <button
                type="submit"
                className="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0 ">
              <a
                href="#"
                className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13  border-b-red-500 border-b border-solid block"
              >
                AAALOGO
              </a>
              <p className="font-15 text-gray-400">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
                <br />
                <br />t is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h2 className="text-2xl font-semibold fables-second-border-color border-b pb-3">
                Contact us
              </h2>
              <div className="my-3">
                <h4 className="font-semibold">
                <RiMapPin2Line className="inline-block" />{" "} Address Information
                </h4>
                <p className="font-14 text-gray-400 mt-2 ml-4">
                  level13, 2Elizabeth St, Melbourne, Victor 2000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-semibold">
                  <RiPhoneLine  className="inline-block" />{" "} Call Now
                </h4>
                <p className="font-14 text-gray-400 mt-2 ml-4">
                  +333 111 111 000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-semibold">
                  <RiMailSendLine  className="inline-block" />{" "} Mail
                </h4>
                <p className="font-14 text-gray-400 mt-2 ml-4">
                  adminsupport@website.com
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h2 className="text-2xl font-semibold fables-second-border-color border-b pb-3 mb-3">
                EXPLORE OUR SITE
              </h2>
              <ul>
                <li className="mb-2">
                  <a href="about1.html">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="contactus1.html">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="gallery.html">Gallery</a>
                </li>
                <li className="mb-2">
                  <a href="team.html">Team</a>
                </li>
                <li className="mb-2">
                  <a href="blog.html">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="testimonials.html">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright fables-main-background-color mt-0 border-0 text-white">
        <div className="text-center inline-flex gap-4">
          <a href="#" target="_blank" className="flex-none">
            <RiGoogleFill size={24} />
          </a>
          <a href="#" target="_blank" className="flex-none">
            <RiFacebookBoxFill size={24} />
          </a>
          <a href="#" target="_blank" className="flex-none">
            <RiInstagramFill size={24} />
          </a>
        </div>
        <p className="mb-0">Copyright ?? Fables 2018. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
