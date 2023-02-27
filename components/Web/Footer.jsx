import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fables-footer-image fables-after-overlay white-color py-8 py-lg-5 bg-rules">
        <div className="container m-auto">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
            <h2 className="font-30 semi-font pb-8 text-4xl">Newsletter</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <a
                href="#"
                className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13  border-b-red-500 border-b border-solid block"
              >
                <img
                  src="assets/custom/images/fables-logo.png"
                  alt="fables template"
                  className="mb-4"
                />
              </a>
              <p className="font-15 fables-third-text-color">
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
              <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">
                Contact us
              </h2>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Address Information
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  level13, 2Elizabeth St, Melbourne, Victor 2000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Call Now{" "}
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  +333 111 111 000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Mail{" "}
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  adminsupport@website.com
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">
                EXPLORE OUR SITE
              </h2>
              <ul className="nav fables-footer-links">
                <li>
                  <a href="about1.html">About Us</a>
                </li>
                <li>
                  <a href="contactus1.html">Contact Us</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-google-plus-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-pinterest-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
