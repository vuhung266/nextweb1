import React from 'react'
import Header from 'components/Web/Header'
import Footer from 'components/Web/Footer'
const newsdetail = () => {
   return (
      <div>
         <Header heading='Chi tiết tin' />
         <div className="fables-light-background-color">
            <div className="max-w-[1240px] m-auto">
               <ol className="flex py-4">
                  <li className="breadcrumb-item"><a href="#" className="fables-second-text-color">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog Single img</li>
               </ol>
            </div>
         </div>
         <div className='max-w-[1240px] m-auto'>
            <div class="grid grid-cols-3 gap-4">
               <div class="...">01</div>
               <div class="...">02</div>
               <div class="...">03</div>
               <div class="col-span-2 ...">04</div>
               <div class="...">05</div>
               <div class="...">06</div>
               <div class="col-span-2 ...">07</div>
            </div>
         </div>
         <div className='max-w-[1240px] m-auto'>
            <div class="flex flex-col lg:flex-row">
               <div class="w-8">
                  <p className="font-14 my-3">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci. In aliquam nisi at est posuere ornare. Aliquam scelerisque magna a turpis mollis, eu interdum enim commodo. In quis tellus consequat, vehicula nunc pretium, gravida mauris. In commodo convallis massa, sit amet gravida erat dictum vitae. Etiam sollicitudin leo ut quam egestas,
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci. In aliquam nisi at est posuere ornare. Aliquam scelerisque magna a turpis mollis, eu interdum enim commodo. In quis tellus consequat, vehicula nunc pretium, gravida mauris. In commodo convallis massa, sit amet gravida erat dictum vitae. Etiam sollicitudin leo ut quam egestas,
                     <br /><br />
                     ullamcorper placerat nunc facilisis. Nunc iaculis, lorem euismod euismod venenatis, magna leo euismod felis, et laoreet velit lacus ac nisl lorem euismod euismod venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci. In aliquam nisi at est posuere ornare
                     <br /><br />
                     . Aliquam scelerisque magna a turpis mollis, eu interdum enim commodo. In quis tellus consequat, vehicula nunc pretium, gravida mauris. In commodo convallis massa, sit amet gravida erat dictum vitae. Etiam sollicitudin leo ut quam egestas, ullamcorper placerat nunc facilisis. Nunc iaculis, lorem euismod euismod venenatis, magna leo euismod felis, et laoreet velit lacus ac nisl lorem euismod euismod venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
               </div>
               <div class="w-4">
                  dung của cột phải
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default newsdetail