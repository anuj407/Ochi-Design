// import React from 'react'

import { useState } from "react";

function Footer() {
  const [links, setLinks] = useState([
    { name: "Services", hover: false },
    { name: "Our Work", hover: false },
    { name: "About us", hover: false },
    { name: "Insights", hover: false },
    { name: "Contact us",hover: false},
  ]);

  const handleHover = (ind) => {
    setLinks((prev) =>
      prev.map((item, index) =>
        index === ind ? { ...item, hover: true } : { ...item }
      )
    );
  };
  const handleLeave = (ind) => {
    setLinks((prev) =>
      prev.map((item, index) =>
        index === ind ? {...item, hover: false } : { ...item }
      )
    );
  };
  return (
    <div className="flex-col min-h-[90vh] lg:flex-row text-[4.5vw] md:text-[4vw] lg:text-[1.2rem] relative  w-full lg:min-h-screen flex bg-[#18181B] items-center justify-center">
      <div className="left w-[90%] lg:w-[45%] lg:h-[88vh] pt-[10vh] flex flex-col justify-between">
        <div className="">
          {["eye", "Opening"].map((item, index) => (
            <h1
              key={index}
              className="text-[14vw] leading-[11vw] lg:text-[7vw] uppercase lg:leading-[6vw] text-zinc-100 font-semibold font-['Founders_Grotesk_X_Condensed']"
            >
              {item}
            </h1>
          ))}
        </div>
        <p className="absolute text-[8vw] top-[92%]  lg:block lg:text-[3vw] text-zinc-100">Ochi</p>
      </div>
      <div className={`right gap-6  lg:gap-0 w-[90%] lg:w-[45%] h-[88vh] flex flex-col`}>
        <div className="lg:h-1/4 lg:pt-[10vh]">
          <h1 className="text-[12vw] leading-[11vw] md:text-[14vw] md:leading-[11vw] lg:text-[7vw] uppercase lg:leading-[6vw] text-zinc-100 font-semibold font-['Founders_Grotesk_X_Condensed']">
            Presentation
          </h1>
        </div>
        <div className="lg:h-1/4 flex flex-col">
          <p>S:</p>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <a key={index}>{item}</a>
            )
          )}
        </div>
        <div className="lg:h-1/4 flex justify-between">
          <div className="flex flex-col">
            <p>L:</p>
            {[
              "202-1965 W 4th Ave",
              "Vancouver, Canada",
              "",
              "30 Chukarina St",
              "Lviv, Ukraine",
            ].map((item, index) => (
              <a key={index}>{item}</a>
            ))}
          </div>
          <div className="flex flex-col">
            <p>M:</p>
            {links.map((item, index) => (
              <a
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                className={`relative h-[6vw] text-[4vw] md:h-[5.2vw] md:text-[3.6vw] w-fit lg:text-[1.07rem] cursor-pointer lg:h-[3vh] overflow-hidden `}
                key={index}
              >
                <div
                  key={index}
                  className={`${
                    item.hover ? `-translate-y-[105%]` : `translate-y-0`
                  } duration-200 w-fit h-full flex flex-col `}
                >
                  <span className="text-white " >{item.name}</span>
                  <span>{item.name}</span>
                </div>
                <span
                  className={`${
                    item.hover && `scale-x-[1] origin-left`
                  } scale-x-0 origin-top-right transition-transform duration-500 w-[105%]  absolute top-[93%]  h-[1.5px] bg-zinc-50`}
                ></span>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:h-1/4 flex flex-col justify-evenly">
          <p>E:</p>
          <a href="#">hello@ochi.design</a>
          <div className=" flex justify-between">
            <p>© ochi design 2024. Legal Terms</p>
            <p>Websites By Qbys</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;