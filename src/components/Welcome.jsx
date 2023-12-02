import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import {motion} from 'framer-motion'
const Welcome = () => {
    const textVariants = {
        initial: {
            opacity:0,
          y: 0,
          transition: {
            y: { duration: 0 },
          },
        },
        bounce: {
            opacity:1,
          y: -40,
          transition: {
            y: {
              yoyo: Infinity,
              duration: 1,
              ease: 'easeInOut',
            },
          },
        },
      };
  return (
    <div className='w-screen bg-gradient-to-b from-customOrange to-white mb-[100px]'>
    <motion.div variants={textVariants} initial="initial" animate="bounce" className='w-screen h-auto flex flex-col  justify-center items-center '>
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-auto text-[15px] rounded-xl mt-[100px] font-semibold px-2">👋 WELCOME TO MANAGE WISE!</div>
        <div className="text-[84px] font-medium font-sans mt-0 mb-0"> Empower your business with</div>
        <div className="text-[84px] font-medium font-sans mt-[-30px] p-0"> <span className='text-darkOrange font-semibold'>Strategic</span> insights</div>
        <div className='text-[21px] text-customeGrey font-semibold mt-3'>Powerful management platform designed to streamline your business</div>
        <div className='text-[21px] text-customeGrey font-semibold'> operations, boost productivity, and drive success</div>
        <div className="flex gap-5">
        <button className="bg-customBlue text-[20px] font-bold rounded-2xl outline-none text-white h-auto w-[200px] px-5 py-3 mt-3">Get Started</button>
        <div className="flex items-center justify-center text-[20px] font-bold rounded-2xl outline-none border-customeGrey border-2 h-auto w-[200px] px-2 py-3 mt-3 gap-1 bg-white">Whatch Demo <FaPlayCircle/></div>
        </div>
        <img className='mt-[100px] w-[80%] shadow-slate-300 shadow-xl z-0 hover:scale-105' src='one.webp' />
    </motion.div>
    </div>
  )
}

export default Welcome