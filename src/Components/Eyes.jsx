/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect, useState } from "react";

function Eyes({title}) {
    const [rotate,setrotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
         let mouseX = e.clientX;
         let mouseY = e.clientY;
         let deltaX = mouseX - window.innerWidth/2;
         let deltaY = mouseY - window.innerHeight/2;
         const angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
         setrotate(angle-180);
        })
    })
  return (
    <div className="absolute flex gap-[2vw] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className={`w-[35vw] h-[35vw] lg:w-[14vw] lg:h-[14vw] rounded-full bg-zinc-100 flex justify-center items-center`}>
                      <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center items-center ">
                        <h1 className=" text-zinc-100 text-lg font-medium uppercase">{title}</h1>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="w-full h-[1vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                           <div className="w-[0.8rem] h-[0.8rem] rounded-full bg-zinc-100"></div>
                        </div>
                      </div>
                </div>
                <div className={`w-[35vw] h-[35vw] lg:w-[14vw] lg:h-[14vw] rounded-full bg-zinc-100 flex justify-center items-center`}>
                      <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex justify-center items-center">
                      <h1 className=" text-zinc-100 text-lg font-medium uppercase">{title}</h1>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="w-full h-[1vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                           <div className="w-[0.8rem] h-[0.8rem] rounded-full bg-zinc-100"></div>
                        </div>
                      </div>
                </div>
    </div>
  )
}

export default Eyes