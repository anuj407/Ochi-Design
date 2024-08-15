// import React from 'react'
import Button from './Button';
import Eyes from './Eyes';
function StartProject() {
    
  return (
    <div className="sticky -top-8 h-[90vh] mt-[4vh] lg:mt-0 lg:-top-28 lg:h-fit w-full">
    <div className="flex flex-col justify-around relative min-h-screen w-full  bg-[#CDEA68] p-1">
        <div className="heading lg:mt-[20vh]">
            {['Ready','to start','tHe Project?'].map((item,index)=><h1 key={index} className="uppercase text-[15vw] font-semibold font-['Founders_Grotesk_X_Condensed']  text-[#212121]  text-center leading-[12vw]">{item}</h1>)}
        </div>
        
            <Eyes/>
      
        <div className="btnPart w-fit flex flex-col items-center mx-auto lg:mt-[3vh] lg:mb-[10vh]">
            <Button title={'Start The Project'}/>
            <p className='text-[4vw] lg:text-[1.2vw] my-[2vh] text-zinc-900 text-center'>OR</p>
            <Button title={'Hello@Ochi.Design'} bg={'none'} color={'zinc-950'} dotBg={'zinc-950'}/>
        </div>
    </div>
    </div>
  )
}

export default StartProject