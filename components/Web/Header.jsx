import React from 'react'
const Header = ({ heading }) => {
   return (
      <>
         <div className="fables-header fables-after-overlay bg-rules">
            <div className="max-w-[1240px] m-auto">
               <h2 className="fables-page-title fables-second-border-color">{heading}</h2>
            </div>
         </div>
      </>
   )
}
export default Header