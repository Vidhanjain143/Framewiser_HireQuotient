import React from 'react'
import { FaMobile,FaBell ,FaFire} from "react-icons/fa";

const Integration = () => {
  return (
    <div className='w-screen bg-black border-black  border-2 h-auto flex flex-col mb-[100px]'>
        <div className="w-[80%] flex flex-col justify-start mx-auto">
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-[135px] text-[15px] rounded-xl mt-[100px] font-semibold px-2">🤩 AND MORE...</div>
        <div className="font-bold text-white text-[50px] mt-2">Explore an array of features that elevate your</div>
        <div className="font-bold text-white text-[50px] "><span className='text-darkOrange'>Productivity</span> to new heights</div>
        <div className="text-gray-400 text-[21px] mt-2">Discover the tools that will revolutionize the way you<br/> manage and optimize your operations</div>
        <div className="grid grid-rows-1 grid-cols-3 mt-[40px] gap-10">
            <div className="flex flex-col w-[400px] justify-between items-center p-10 bg-lightBlack rounded-3xl">
                <FaMobile className='bg-customBlue text-white rounded-2xl text-[30px] py-4 w-[60px] h-[60px] p-1' />
                <div className="text-white font-bold text-[24px] mt-3"> Cross-Platform <br/>Compatibility</div>
                <div className="text-[18px] text-gray-400 mt-5">Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</div>
            </div>
            <div className="flex flex-col w-[400px] justify-between items-center p-10 bg-lightBlack rounded-3xl">
                <FaBell className='bg-customBlue text-white rounded-2xl text-[30px] py-4 w-[60px] h-[60px] p-1' />
                <div className="text-white font-bold text-[24px] mt-3"> Stay Informed with <br/>Essential Notifications</div>
                <div className="text-[18px] text-gray-400 mt-5">Automate support from first customer contact to closing the ticket. Drastically improve time to resolution. Automate support from first customer contact to closing the ticket.</div>
            </div>
            <div className="flex flex-col w-[400px] justify-between items-center p-10 bg-lightBlack rounded-3xl">
                <FaFire className='bg-customBlue text-white rounded-2xl text-[30px] py-4 w-[60px] h-[60px] p-1' />
                <div className="text-white font-bold text-[24px] mt-3"> Secure Data Encryption at  <br/>all times</div>
                <div className="text-[18px] text-gray-400 mt-5">Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</div>
            </div>
        </div>
        </div>
        <div className=" flex flex-col items-center justify-between mt-[100px]">
        <div className="text-customBlue bg-white border-2 py-1 border-gray-200 w-[150px] text-[15px] rounded-xl mt-[100px] font-semibold px-2">⚒️INTEGRATIONS </div>
        <div className="font-bold text-white text-[50px] ">Enable<span className='text-darkOrange'> integration</span> with</div>
        <div className="font-bold text-white text-[50px] ">other popular tools and</div>
        <div className="font-bold text-white text-[50px] ">platforms</div>
        <div className="text-gray-400 text-[20px] mt-2">Seamlessly connect and amplify your workflow </div>
        <div className="text-gray-400 text-[20px] mt-1">by enabling integration with a diverse array of </div>
        <div className="text-gray-400 text-[20px] mt-1">widely-used tools and platforms.</div>
        <img className='h-[300px] mt-10' src="six.webp" alt="" />
        </div>
    </div>
  )
}

export default Integration