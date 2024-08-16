import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [completed, setcompleted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const complete = () => {
    setcompleted(true);
    setTimeout(() => {
      setHidden(true);
    }, 1100);
  };
  useEffect(function () {
    let counter = document.querySelector(".counter");
    let count = 0;
    const int = setInterval(function () {
      count++;
      if (count === 100) {
        clearInterval(int);
        complete();
      }
      counter.textContent = count;
    }, 30);
  }, []);
  return (
    <div
      className={`loader ${completed && `scale-[1.39] opacity-0 `} ${
        hidden && `hidden`
      }  delay-500 duration-1000 fixed w-screen bg-zinc-950 z-[99999] h-screen`}
    >
      <div className="relative w-screen h-screen ">
        <motion.div
          initial={{ x: 1600 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute w-[75%] top-[22.5%] left-[15.8%]  h-[55%] rounded-xl bg-zinc-200"
        ></motion.div>
        <motion.div
          initial={{ x: -1600 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute w-[75%] top-[20%] left-[14%]  h-[60%] rounded-xl bg-white"
        ></motion.div>
        <div className="relative w-screen h-full bg-[#2c2828a5]">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-[75%] top-[15%] left-[12.5%] h-[70%] rounded-xl bg-zinc-100 flex flex-col justify-between px-[3%] pt-[0.5%] text-zinc-800"
          >
            <h2 className="text-[2.2rem] lg:text-[2rem] font-semibold ">
              ochi
            </h2>
            <div className="w-full h-[50%]">
              {["We Create", "Eye-Opening", "Presentation"].map(
                (item, index) => (
                  <h1
                    key={index}
                    className="text-[13vw] leading-[12vw] lg:text-[7vw] uppercase lg:leading-[5.5vw] font-semibold font-['Founders_Grotesk_X_Condensed']"
                  >
                    {item}
                  </h1>
                )
              )}
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-[4.5vw] lg:text-[1rem]">Loading...</p>
              <div className="text-[12vw] leading-[11vw] lg:text-[7vw] lg:leading-[6vw] font-medium font-['Founders_Grotesk_X_Condensed']">
                <span className="counter"></span>
                <span>%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
