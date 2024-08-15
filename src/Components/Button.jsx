/* eslint-disable react/prop-types */
// import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react"
import ButtonHover from './Hover Effect/ButtonHover'

function Button({SetTrue,SetFalse,title,bg='zinc-900',color='zinc-50',dotBg='zinc-50',}) {
   const [Hover,setHover]= useState(false)
   const MouseHover=()=>{
    setHover(true)
    SetTrue()
   }
   const Mouseleave=()=>{
    setHover(false)
    SetFalse()
   }
  return (
 
        <button onMouseEnter={()=>MouseHover()} onMouseLeave={()=>Mouseleave()} className={` pl-4 h-[6vh] relative min-w-fit bg-${bg} border-[1px] border-zinc-900 rounded-full flex justify-around gap-2 pr-1 items-center text-md font-semibold uppercase leading-none tracking-tight overflow-hidden`}>
            <span className={` ${Hover === true ? `text-zinc-50`:`text-${color}`} z-40 `}>{title}
            </span>
            
             <ButtonHover hover={Hover}/>
            <span className="w-10 z-40 flex justify-center items-center">
              <span className={`flex justify-center items-center duration-500 ${Hover === true ? `w-10 h-10 bg-zinc-50`:`w-2 h-2 bg-${dotBg}`} rounded-full `}><FiArrowUpRight className={` delay-300 w-6 h-6 text-zinc-950 ${Hover === true ? `block`:`hidden`}`}/></span>
            </span>
        </button>
    
  )
}

export default Button