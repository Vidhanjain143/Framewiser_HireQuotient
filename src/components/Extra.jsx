import React from 'react'
import { motion } from 'framer-motion'
const Extra = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-white to-customOrange pb-2">    
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} className=' bg-white w-[80%] flex m-auto justify-evenly items-center border-1 rounded-xl p-[5px] transition-opacity'>
        <div className="flex flex-col justify-start items-start p-10">
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-[200px] text-[15px] rounded-xl mt-[10px] font-semibold px-2">👋 DONT'T MISS OUT</div>
        <div className="text-[55px] font-semibold font-sans"> Unleash your</div>
        <div className="text-[55px] font-semibold font-sans mt-[-10px]"> <span className='text-darkOrange font-semibold'>Potentail</span> with us.</div>
        <div className='text-[20px] text-customeGrey font-semibold mt-3'>Join our community of ambitious </div>
        <div className='text-[20px] text-customeGrey font-semibold'>individuals and organizations eager to</div>
        <div className='text-[20px] text-customeGrey font-semibold'> make a difference.</div>
        <button className='bg-customBlue text-white mt-[20px] text-[20px] px-8 py-3 rounded-xl font-bold'>Try out now</button>
        </div>
        <div className="flex flex-col justify-start items-center p-10">
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-auto text-[24px] rounded-xl font-bold px-2 mb-[10px]">200+ <span className='text-lightBlack'>Happy users</span></div>
        <img className="" src="seven.png" alt="" />
        </div>
    </motion.div>
    </div>

  )
}

export default Extra