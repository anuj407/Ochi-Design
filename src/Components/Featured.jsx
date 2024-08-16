// import React from 'react'

import { useState } from "react";
import FeatureCard from "./FeatureCard";
import {useAnimation } from "framer-motion";
import FeatureTextAnimation from "./Hover Effect/FeatureTextAnimation";

function Featured() {
 
  const [CardData, setCardData] = useState([
    {
      title: "Fyde",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      btn: ["Audit", "Copywriting", "Sales Deck", "Slide Design"],
      hover: false,
    },
    {
      title: "Vise",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      btn: ["Agency", "Company Presentation"],
      hover: false,
    },
  ]);
  const [CardData2, setCardData2] = useState([
    {
      title: "Trawa",
      img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      btn: ["Brand Identify", "Design Research", "Investor Deck"],
      hover: false,
    },
    {
      title: "Premium Blend",
      img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      btn: ["Branded Template"],
      hover: false,
    },
  ]);
  const Cards =[useAnimation(),useAnimation()]
  const Cards2 =[useAnimation(),useAnimation()]
  const Onhover2 = (ind) => {
    Cards2[ind].start({y:"0"})

    setCardData2((prev) =>
      prev.map((item, index) =>
        ind === index ? { ...item, hover: true } : { ...item, hover: false }
      )
    );
    console.log(CardData2);
  };
  const Onhover = (ind) => {
    Cards[ind].start({y:"0"})
    setCardData((prev) =>
      prev.map((item, index) =>
        ind === index ? { ...item, hover: true } : { ...item, hover: false }
      )
    );
  };
  const MouseLeave = (indexx) => {
    Cards[indexx].start({y:"100%"})
    setCardData((prev) =>
      prev.map((item, index) =>
        indexx === index ? { ...item, hover: false } : { ...item }
      )
    );
  };
  const MouseLeave2 = (indexx) => {
    Cards2[indexx].start({y:"100%"})
    setCardData2((prev) =>
      prev.map((item, index) =>
        indexx === index ? { ...item, hover: false } : { ...item }
      )
    );
  };
  return (
    <div className="w-screen pt-1 min-h-screen bg-zinc-950 ">
      <div className="mt-[7vh] border-b-[1px] border-gray-500 py-[4vh]">
        <h1 className="ml-[4vw] text-[3.5vw] font-normal tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="w-screen h-full py-[2vh] mt-[4vh] ">
        <div className="flex-col h-[114vh] pt-8 gap-y-[15vh] lg:pt-0  lg:flex-row mx-auto relative w-[90vw] lg:h-[75vh] flex lg:gap-[1vw] lg:justify-center">
          {CardData.map((item, index) => (
            <FeatureCard
              onhover={Onhover}
              MouseLeave={MouseLeave}
              key={index}
              title={item.title}
              hover={item.hover}
              btn={item.btn}
              url={item.img}
              index={index}
            >
            </FeatureCard>
          ))}
          <div className="absolute w-full h-full flex justify-around items-center flex-col">
          {CardData.map((item, index) =>  <FeatureTextAnimation key={index} title={item.title} animate={Cards} index={index} />)}
          </div> 
        </div>
        <div className="flex-col h-[114vh] mt-[7vh] pt-10 gap-y-[15vh] lg:pt-0 lg:flex-row relative mx-auto lg:mt-[5vh] w-[90vw] lg:h-[75vh] flex lg:gap-[1vw] ">
          {CardData2.map((item, index) => (
            <FeatureCard
              onhover={Onhover2}
              MouseLeave={MouseLeave2}
              key={index}
              title={item.title}
              hover={item.hover}
              btn={item.btn}
              url={item.img}
              index={index}
            ></FeatureCard>
          ))}  
            <div className="absolute w-full h-full flex justify-around items-center flex-col">
             {CardData2.map((item, index) =>  <FeatureTextAnimation key={index} title={item.title} animate={Cards2} index={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
