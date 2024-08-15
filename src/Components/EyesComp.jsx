import Eyes from "./Eyes"

// import React from 'react'
function EyesComp() {
   
  return (
    <div className="w-full max-h-screen lg:h-screen overflow-hidden  ">
        <div 
        {...(window.innerWidth > 1024 && {
      "data-scroll": true,
      "data-scroll-section": true,
      "data-scroll-speed": "-.5",
    })} 
     className=" relative w-full h-[60vh] lg:h-full bg-cover bg-top bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <Eyes title={'Play'}/>
        </div>
    </div>
  )
}

export default EyesComp