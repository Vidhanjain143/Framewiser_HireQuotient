import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter,FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-screen bg-customOrange pt-[150px] pb-[20px]'>
        <div className="w-[80%] flex items-center justify-between m-auto">
            <img  className="h-[50px] " src="logo.webp" alt="" />
            <div className="flex flex-col gap-2">
                <div className="text-[18px] text-lightBlack">Features</div>
                <div className="text-[18px] text-lightBlack ">FAQ</div>
                <div className="text-[18px] text-lightBlack ">Pricing</div>
                <div className="text-[18px] text-lightBlack ">Testimonials</div>
            </div>
        </div>
        <div className="flex justify-between w-[80%] m-auto pt-[100px]">
            <div className="text-[18px] text-lightBlack">© 2022 ManageWise, Inc.</div>
            <div className="text-[28px] text-lightBlack flex"><AiFillInstagram className='mr-4'/> <FaXTwitter className='mr-4'/><FaLinkedinIn/></div>
        </div>
    </div>
  )
}

export default Footer