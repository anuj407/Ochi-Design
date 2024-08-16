// import React from 'react'

import { useState } from "react"
import Button from "./Button"

function About() {
    const [hover,sethover]= useState(false)
   const SetTrue=()=>{
    sethover(true)
   }
   const SetFalse=()=>[
    sethover(false)
   ]
   console.log(hover)
  return (
    <div className="py-[2vw] z-40 h-full w-screen min-h-screen bg-[#CDEA68] text-black rounded-t-2xl">
        <div className="mt-[6vh] ml-[4vw] text-[8vw] lg:text-[3vw] font-normal ">
            <h1>Ochi is a strategic partner for fast-grow­ing tech</h1>
            <h1>businesses that need to <span className="underline">raise funds </span>, <span className="underline">sell prod­ucts,</span> </h1>
            <h1><span className="underline">ex­plain com­plex ideas, </span>and <span className="underline">hire great peo­ple.</span></h1>
        </div>
        <div className=" flex-col gap-y-6 lg:flex-row w-full flex mt-[15vh] border-t-[1px] border-gray-500 lg:pt-[0.5vw] justify-between">
            <div className="ml-[4vw]">
                <h1 className="text-[10vw] lg:text-[3vw] font-medium ">Our approach:</h1>
                <div className="btn mt-4">
                    <Button title={'Read More'} SetTrue={SetTrue} SetFalse={SetFalse} />                    
                </div>
            </div>
            <div className={`${hover ?`scale-[0.9]`:`scale-1`} duration-[0.9s] w-[90vw] h-[50vh] mx-auto lg:w-[45vw] lg:h-[70vh] lg:mr-[2vw]`}>             
                <img className=" w-[100%] lg:w-[95%] h-[95%] object-cover rounded-xl " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />             
            </div>
        </div>
    </div>
  )
}

export default About