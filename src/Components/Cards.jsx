import { useState } from "react"
import ButtonHover from "./Hover Effect/ButtonHover"

function Cards() {
  const [cards,setCards] = useState([
    {name:'Rating 5.0 on Clutch',url:'https://ochi.design/wp-content/uploads/2022/04/logo002.svg',hover:false},
    {name:'Business Bootcamp Alumni',url:'https://ochi.design/wp-content/uploads/2022/04/logo003.png',hover:false}
  ])
  const handleMouseEnter =(ind)=>{
    setCards(prev=>
      prev.map((card,index)=>
        index===ind ? {...card,hover:true}:{...card}))
  }
  const handleMouseLeave =(ind)=>{
    setCards(prev=>
      prev.map((card,index)=>index===ind ? {...card,hover:false}:{...card}))
  }
  return (
    <div className="h-full mt-[10vh] sticky -top-[35%] lg:top-0 card w-screen lg:min-h-[90vh] lg:mt-[6vh] flex justify-center items-center ">
        <div className=" h-full flex-col gap-8 lg:flex-row w-[90vw] lg:h-[50vh]  flex lg:gap-4 ">
            <div className=" w-full h-[40vh] relative lg:w-1/2 lg:h-full flex justify-center items-center bg-[#004D43] rounded-xl overflow-hidden">
              <h1 className="text-[12vw] lg:text-[4.5vw] font-semibold text-[#CDEA68]">ochi</h1>
              <div className="absolute left-[8%] bottom-[8%] px-4 py-1 font-semibold border-[#CDEA68] text-[#CDEA68] text-sm border-[1.5px] rounded-full">@2019-2022</div>
            </div>
            {cards.map((item,index)=><div key={index} className="w-screen h-[40vh] lg:w-1/4 lg:h-full flex flex-col justify-center items-center bg-[#212121] rounded-xl overflow-hidden">
             <div className="w-[100%] h-[70%] md:h-[80%] flex justify-center items-center">
              <img className={`${index===1 &&`h-full md:h-fit`} w-fit h-fit md:h-fit object-cover`} src={item.url} alt="" />
             </div>
              <button onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)} className="self-start ml-6 lg:ml-0 lg:self-center z-0 flex cursor-pointer relative min-w-fit py-2 px-4 font-semibold border-[#ffffff] text-[#ffffff] text-sm border-[1.5px] uppercase rounded-full overflow-hidden">
                <div className="z-20">{item.name}</div>        
                <ButtonHover hover={item.hover}/>
              </button>
            </div>)}
        </div>
    </div>
  )
}
export default Cards