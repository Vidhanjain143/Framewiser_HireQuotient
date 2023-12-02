import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Faq = () => {
    
  
    const quesAns=[
        { ques:"What is Manage Wise and what does it offer?",ans:"Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."},
        { ques:"Is Manage Wise suitable for small businesses and larger enterprises alike?",ans:"Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."},
        { ques:"Can I access Manage Wise from different devices and platforms?",ans:"Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices."},
        { ques:"What kind of support options do you offer to users?",ans:"We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise."}
    ]
    const [openState, setOpenState] = useState({});

  const handleClick = (index) => {
    setOpenState((prevState) => ({
      ...prevState,
      [index]: !prevState[index] || false,
    }));
  };
  return (
    <div className="w-screen">
    <div className='w-[80%] mx-auto mb-[100px] flex items-start justify-between gap-10'>
        <div className="flex flex-col justify-start items-start w-[30%]">
            <div className="text-customBlue bg-white border-2 py-1 border-gray-200 w-[80px] text-[15px] rounded-xl  font-semibold px-2">🙋‍♀️ FAQ </div>
            <div className="font-bold text-[55px]">Need</div>
            <div className="font-bold text-darkOrange text-[55px] mt-[-20px] ">Answers ?</div>
            <div className="text-[22px] text-gray-700 mt-5 font-mediums">Check out our most commonly asked questions below to find the information you need.</div>                
        </div>
        <div className="flex flex-col justify-center items-start w-[60%] h-auto mb-2">
            {quesAns.map((item,index)=>{
                return(
                <div className="h-[100px] flex justify-between items-center shadow-sm shadow-gray-300 mt-3 outline-none" key={index} onClick={()=>handleClick(index)}>
                <div className="flex flex-col h-auto p-2">
                <div className={"w-[600px] h-auto ml-1 text-[24px] font-semibold" +(openState[index]?" text-customBlue":"")}>{item.ques}</div>
                <div className={"font-semibold text-gray-600 text-[16px] mt-[10px] "+(!openState[index]?"hidden":"block")}>{item.ans}</div>
                </div>
                {!openState[index]?<FaPlus className='w-[100px] h-[28px] text-customBlue' />:<ImCross className='w-[100px] h-[28px] text-customBlue'/>}
            </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Faq