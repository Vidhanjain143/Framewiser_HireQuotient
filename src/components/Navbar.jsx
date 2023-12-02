import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] border-[1px] border-gray-150 bg-customOrange flex justify-between items-center p-5 outline-none'> 
        <div><img src="logo.webp"  style={{ height:'45px'}}alt="" /></div>
        <div className="flex justify-between">
            <text className='text-lg p-2 mr-2'>Features</text>
            <text className='text-lg p-2 mr-2 text-customeGrey'>•</text>
            <text className='text-lg p-2 mr-2'>FAQ</text>
            <text className='text-lg p-2 mr-2 text-customeGrey'>•</text>
            <text className='text-lg p-2 mr-2'>Pricing</text>
            <text className='text-lg p-2 mr-2 text-customeGrey'>•</text>
            <text className='text-lg p-2 mr-4'>Testimonials</text>
            <div className='bg-white w-[150px] flex items-center justify-center font-semibold text-lg rounded-xl outline-none py-2'>Buy Template</div>
        </div>
    </div>
  )
}

export default Navbar