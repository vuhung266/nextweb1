import React from 'react'
const Header = ({ heading }) => {
   return (
      <>
         <div class="fables-header fables-after-overlay bg-rules">
            <div class="max-w-[1240px] m-auto">
               <h2 class="fables-page-title fables-second-border-color">{heading}</h2>
            </div>
         </div>
      </>
   )
}
export default Header