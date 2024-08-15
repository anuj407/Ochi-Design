// import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
function LandingPage() {
  const [hover,sethover]=useState(false)
  const mousehover=()=>{
       sethover(true) 
  }  
  const mouseleave=()=>{
    sethover(false)
  }
return (
    <div 
    {...(window.innerWidth > 1024 && {
      "data-scroll": true,
      "data-scroll-section": true,
      "data-scroll-speed": "-.5",
    })}
     className="w-full max-h-screen lg:h-screen text-white pt-1 flex flex-col ">   
            <div className="h-[38vh] md:mt-[18vh] lg:h-[68%] mt-32 ml-8 lg:mt-44 lg:ml-20">
               {["We Create","eye-Openning","Presentation"].map((item,index)=>{
                return <div key={index} className="Maskerc flex">
                          {index==1 && <motion.div initial={{width:"0vw"}} transition={{ease:[0.25, 1, 0.5, 1],duration:1.5,delay:5}} animate={window.innerWidth> 1024 ?{width:"8vw"}:{width:"18vw"}} className="w-[18vw] h-[12vw] lg:w-[8vw] lg:h-[5.5vw] relative -top-2 rounded-md overflow-hidden object-cover "><img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>}
                          <h1 className="uppercase font-medium font-['Founders_Grotesk_X_Condensed'] text-[15vw] leading-[13vw] lg:text-[8.5vw] lg:leading-[7.5vw]">{item}</h1>
                       </div>
               })}
            </div>
        
        <div className="flex-col gap-[3vh] h-[35vh] md:h-[16vh] md:flex-row  lg::h-[32%] px-10 py-5 w-full bg-zinc-800 flex lg:justify-between items-start">
            {["For Public and Private Companies","Form the first pitch to IPO"].map((item,index)=>{
                return <div key={index} className=" pt-4 font-['Neue_Montreal'] font-extralight capitalize opacity-70 tracking-tight leading-none text-[1.07rem]">{item}</div>
            })}
            <div className="strat  rounded-full flex">
                <div onMouseEnter={()=>mousehover()} onMouseLeave={()=>mouseleave()} className={`${hover===true && `bg-slate-100 text-zinc-900 border-zinc-900`} duration-200 text-md font-medium px-5 h-[2.5rem] text-center flex items-center uppercase border-2 rounded-full`} >Start The Project</div>
                <div onMouseEnter={()=>mousehover()} onMouseLeave={()=>mouseleave()} className={`${hover===true && `bg-slate-100 text-zinc-900 border-zinc-900` } duration-200 w-[2.5rem] h-[2.5rem] border-2 rounded-full flex justify-center items-center`}><FaArrowTrendUp/></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage