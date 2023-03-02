import React from "react";
import Header from "components/Web/Header";
import Footer from "components/Web/Footer";
const newsdetail = () => {
  return (
    <div>
      <Header heading="Chi tiết tin" />
      <div className="fables-light-background-color">
        <div className="max-w-[1240px] m-auto">
          <ol className="flex py-3 mb-12">
            <li className="breadcrumb-item">
              <a href="#" className="fables-second-text-color">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Single img
            </li>
          </ol>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
		  <img
                src="https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/single-blog.jpg"
                alt=""
                className="w-100"
              />
		  <h1 className="semi-font my-3 text-2xl">Getting to Another Level of Design</h1>
            <p className="font-14 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci.
              In aliquam nisi at est posuere ornare. Aliquam scelerisque magna a
              turpis mollis, eu interdum enim commodo. In quis tellus consequat,
              vehicula nunc pretium, gravida mauris. In commodo convallis massa,
              sit amet gravida erat dictum vitae. Etiam sollicitudin leo ut quam
              egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis iaculis egestas nisl vel faucibus. Pellentesque ac dapibus
              orci. In aliquam nisi at est posuere ornare. Aliquam scelerisque
              magna a turpis mollis, eu interdum enim commodo. In quis tellus
              consequat, vehicula nunc pretium, gravida mauris. In commodo
              convallis massa, sit amet gravida erat dictum vitae. Etiam
              sollicitudin leo ut quam egestas,
              <br />
              <br /> ullamcorper placerat nunc facilisis. Nunc iaculis, lorem
              euismod euismod venenatis, magna leo euismod felis, et laoreet
              velit lacus ac nisl lorem euismod euismod venenatis.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas
              nisl vel faucibus. Pellentesque ac dapibus orci. In aliquam nisi
              at est posuere ornare
              <br />
              <br />. Aliquam scelerisque magna a turpis mollis, eu interdum
              enim commodo. In quis tellus consequat, vehicula nunc pretium,
              gravida mauris. In commodo convallis massa, sit amet gravida erat
              dictum vitae. Etiam sollicitudin leo ut quam egestas, ullamcorper
              placerat nunc facilisis. Nunc iaculis, lorem euismod euismod
              venenatis, magna leo euismod felis, et laoreet velit lacus ac nisl
              lorem euismod euismod venenatis.Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
		  <div className="mt-4">
                  <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">Recent Posts</h2> 
                   <div className="row mb-4">
                       <div className="col-4">
                           <a href="#"><img src="https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/blog-cat1.jpg" alt="" className="w-100" /></a>
                       </div>
                       <div className="col-8 pl-0">
                           <a href="#" className="fables-main-text-color bold-font fables-second-hover-color">Getting to Another Level  of Design</a>
                          <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">09 November, 2018</p>
                       </div>
                   </div>  
                   <div className="row mb-4">
                       <div className="col-4">
                           <a href="#"><img src="https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/blog-cat2.jpg" alt="" className="w-100" /></a>
                       </div>
                       <div className="col-8 pl-0">
                           <a href="#" className="fables-main-text-color bold-font fables-second-hover-color">Getting to Another Level  of Design</a>
                          <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">09 November, 2018</p>
                       </div>
                   </div>  
                   <div className="row mb-4">
                       <div className="col-4">
                           <a href="#"><img src="https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/blog-cat3.jpg" alt="" className="w-100" /></a>
                       </div>
                       <div className="col-8 pl-0">
                           <a href="#" className="fables-main-text-color bold-font fables-second-hover-color">Getting to Another Level  of Design</a>
                          <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">09 November, 2018</p>
                       </div>
                   </div>  
                   <div className="row mb-4">
                       <div className="col-4">
                           <a href="#"><img src="https://quiz.edu.vn/public/temp/fables-master/assets/custom/images/blog-cat4.jpg" alt="" className="w-100" /></a>
                       </div>
                       <div className="col-8 pl-0">
                           <a href="#" className="fables-main-text-color bold-font fables-second-hover-color">Getting to Another Level  of Design</a>
                          <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">09 November, 2018</p>
                       </div>
                   </div> 
                   <div className="text-right">
                       <a href="#" className="btn fables-second-text-color underline fables-main-text-color font-14"> More</a>
                   </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default newsdetail;
