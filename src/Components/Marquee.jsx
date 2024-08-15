// import React from 'react'

import { motion } from "framer-motion"

function Marquee() {
  return (
    <div 
    {...(window.innerWidth > 1024 && {
      "data-scroll": true,
      "data-scroll-section": true,
      "data-scroll-speed": "0.00000000001",
    })}
     className="w-full h-[20vh] md:h-[28vh] flex justify-center items-center lg:h-fit py-24 rounded-t-2xl bg-[#004D43]">
       <div className="text flex overflow-hidden whitespace-nowrap border-y-2 ">
        <motion.h1 initial={{x:'0%'}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:7}} className="text-[25vw] lg:text-[20vw] leading-[24vw] lg:leading-[18vw] -mt-[1.7vw] uppercase font-bold tracking-tighter">We are ochi</motion.h1>
        <motion.h1 initial={{x:'0%'}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:7}} className="text-[25vw] lg:text-[20vw] leading-[24vw] lg:leading-[18vw] -mt-[1.7vw] uppercase font-bold tracking-tighter">We are ochi</motion.h1>
       </div>
    </div>
  )
}

export default Marquee