import React from 'react'
import { TiTick } from "react-icons/ti";
const Pricing = () => {
  return (
    <div className=' w-screen flex flex-col items-center justify-center mb-[50px]'>
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-[105px] text-[15px] rounded-xl mt-[100px] font-semibold px-2">💲PRICING</div>
        <div className="text-[55px] font-medium font-sans"> Select your ideal <span className='text-darkOrange font-semibold'>Pricing</span> plan</div>
        <div className='text-[20px] text-customeGrey font-semibold mt-3'>At Manage Wise, we believe in providing you with </div>
        <div className='text-[20px] text-customeGrey font-semibold'>pricing plans that adapt to your unique needs.</div>
        <div className="flex justify-between w-[80%] gap-5 mt-[70px]">
             {/*1st*/}
             <div className='flex-1 h-auto flex flex-col bg-lightPurple rounded-3xl px-10 py-5 items-start justify-center'>
               <div className="text-darkOrange bg-white border-2 p-1 border-gray-200 w-[50px] text-[14px] rounded-lg  font-bold px-2 mt-3">FREE</div>
               <div className="text-lightBlack font-semibold mt-3  mb-[20px]"><span className='text-[60px] font-bold text-gray'>$0</span> /month</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Access to all features</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Reporting and analytics</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Upto 5 individual users</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Chat and email</div>
              <button className='bg-white text-lightBlack mt-[60px] text-[20px] p-3 rounded-xl font-bold'>Get Started</button>
            </div>
            {/*2nd*/}
            <div className='flex-1 border-black border-2 h-auto flex flex-col bg-black rounded-3xl p-10 items-start justify-center -translate-y-3'>
               <div className="text-darkOrange bg-white border-2 p-1 border-gray-200 w-[80px] text-[12px] rounded-lg  font-bold px-2 mt-3">STANDARD</div>
               <div className="text-white font-semibold mt-3  mb-[20px]"><span className='text-[60px] font-bold'>$25</span> /month</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Access to all features</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Reporting and analytics</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Upto 5 individual users</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Chat and email</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> 3+ integrations</div>
              <div className="text-gray-500 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Account performance reporting</div>
              <button className='bg-customBlue text-white mt-[20px] text-[20px] p-3 rounded-xl font-bold'>Get Started</button>
            </div>
             {/*3rd*/}
             <div className='flex-1 h-auto flex flex-col bg-lightPurple rounded-3xl px-10 py-5 items-start justify-center'>
               <div className="text-darkOrange bg-white border-2 p-1 border-gray-200 w-[90px] text-[14px] rounded-lg  font-bold px-2 mt-3">BUSINESS</div>
               <div className="text-lightBlack font-semibold mt-3  mb-[20px]"><span className='text-[60px] font-bold text-gray'>$42</span> /month</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Access to all features</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Reporting and analytics</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Upto 5 individual users</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> Chat and email</div>
              <div className="text-gray-600 text-[20px] w-[100%] flex items-center"><TiTick className='mr-2 text-customGreen'/> 3+ integrations</div>
              <button className='bg-white text-lightBlack mt-[50px] text-[20px] p-3 rounded-xl font-bold'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing