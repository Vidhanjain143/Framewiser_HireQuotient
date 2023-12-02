import React from 'react'
import { easeOut, motion } from 'framer-motion';

const Premier = () => {
    const columnVariants = {
        hidden: {
          opacity: 0,
          x: -20,
        },
        visible: (index) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: index * 0.4, // Adjust the delay duration as needed
            ease:easeOut,
          },
        }),
      };
      const textVariants = {
        initial: {
            opacity:0,
          y: 40,
          transition: {
            y: { duration: 0 },
          },
        },
        bounce: {
            opacity:1,
          y: 0,
          transition: {
            y: {
              yoyo: Infinity,
              duration: 1,
              ease: 'easeOut',
            },
          },
        },
      };
  return (
    <div className='w-screen h-auto flex flex-col  justify-center items-center mb-[100px]'>
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-auto text-[15px] rounded-xl mt-[100px] font-semibold px-2">🔥 PREMIER FEATURES</div>
        <motion.div variants={textVariants} initial="initial" animate="bounce" className="text-[60px] font-medium font-sans"> Discover our product's <span className='text-darkOrange font-semibold'>Capabilities</span></motion.div>
        <div className='text-[22px] text-customeGrey font-semibold mt-3'>Don't settle for mediocrity - embrace the future of management </div>
        <div className='text-[22px] text-customeGrey font-semibold'>with Manage Wise.</div>
        <div className="flex w-[80%] justify-between items-center mt-10">
            <div className="w-[45%] bg-lightPurple text-[35px] text-lightBlack font-bold rounded-xl p-10"><br/>⭐<br/>Boost productivity and <br/>streamline workflow with<br/> us. Enjoy our intuitive<br/> interface and robust <br/>features.</div>
            <div className="flex flex-col w-[50%] items-center justify-between gap-8">
                <img src="two.webp" alt="" />
                <div className="w-[100%] text-gray-500 text-[18px]"><span className='text-[24px] font-semibold text-black'>Smart Task Management</span><br/>Say goodbye to chaos with our smart task management system.</div>
            </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-4 w-[80%] mt-10">
        <motion.div key={1} custom={1} variants={columnVariants} initial="hidden" animate="visible" className="flex flex-col">
            <img className='mb-3' src="three.webp" alt="" />
            <div className="text-gray-600 text-[18px] px-10"><span className='text-[24px] font-semibold text-black'>Flexible Scheduling</span><br/> Stay productive with our flexible scheduling system.</div>
        </motion.div>
        <motion.div key={2} custom={2} variants={columnVariants} initial="hidden" animate="visible">
            <img className='mb-3' src="four.webp" alt="" />
            <div className="text-gray-600 text-[18px] px-10"><span className='text-[24px] font-semibold text-black'>Easy Communication</span><br/>Collaborate seamlessly with your team in real-time. </div>
        </motion.div>
        <motion.div key={3} custom={3} variants={columnVariants} initial="hidden" animate="visible">
            <img className='mb-3' src="five.webp" alt="" />
            <div className="text-gray-600 text-[18px] px-10"><span className='text-[24px] font-semibold text-black'>Analytics</span><br/>Gain valuable insights with our advanced analytics feature.</div>
        </motion.div>
        </div>
    </div>
  )
}

export default Premier