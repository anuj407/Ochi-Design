/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
function FeatureTextAnimation({title,animate,index}) {
  return (
            <h1 className={`text-[3rem] leading-[4rem] h-[3rem] text-[#EC6234] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-[50%] lg:-translate-y-[50%] lg:text-[#cdea68] font-semibold font-['Founders_Grotesk_X_Condensed'] uppercase lg:text-[8vw] lg:leading-[8.5vw] lg:h-[5.5vw] flex overflow-hidden `}>
              {title.split("").map((items, indexs) => (    
                <motion.span initial={{y:"100%"}} animate={animate[index]} transition={{ease:[0.22,1,0.36,1], delay:indexs*0.05}} className=" inline-block" key={indexs}>{items}</motion.span>       
              ))}
            </h1>
  )
}
export default FeatureTextAnimation