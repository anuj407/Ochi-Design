/* eslint-disable react/prop-types */


function ButtonHover({hover}) {
  return (
    <div className={`${hover && `scale-y-[1] origin-top `} z-0 scale-y-0 origin-bottom transition-transform duration-500  absolute rounded-full bg-black h-full top-0  left-0 w-full`}></div>
  )
}

export default ButtonHover