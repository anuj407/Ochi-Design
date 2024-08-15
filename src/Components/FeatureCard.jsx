/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

// import React from 'react'
function FeatureCard({ title, url, btn, onhover, index, hover, MouseLeave }) {
  return (
    <div className=" w-full h-[46vh] lg:mt-0 lg:w-1/2 lg:h-full lg:py-[2vh]">
      <div className="flex h-[2%] items-center">
        <p className="w-4 h-4 bg-zinc-100 rounded-full "></p>
        <p className="pl-2 uppercase text-zinc-300">{title}</p>
      </div>
      <div className="relative mt-[3vh] lg:mt-[1vh] card w-full h-[90%] lg:w-[45vw] lg:h-[65vh] rounded-xl flex justify-center items-center">
      <div
            onMouseEnter={() => onhover(index)}
            onMouseLeave={() => MouseLeave(index)}
            className="absolute w-full bg-transprent h-full z-50"
          ></div>
        <motion.div initial={{scale:1}} animate={hover ?{scale:.94}:{scale:1}} transition={{ease:'linear',duration:0.5}}
          className={`relative w-full h-full rounded-xl  overflow-hidden`}
        >       
          <img
            className={`absolute w-full h-full  object-cover duration-500 ${
              hover === true && `scale-[1.2]`
            }`}
            src={url}
            alt=""
          />
        </motion.div>
      </div>
      <div className="w-full h-[6vh] mt-[3vh] lg:mt-[1vh] flex items-center flex-wrap gap-[1vw]">
        {btn.map((item, index) => (
          <div
            className="w-fit font-light uppercase text-zinc-200 h-[4vh] px-4 flex justify-center items-center rounded-2xl border-[1px] border-zinc-100"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeatureCard;
