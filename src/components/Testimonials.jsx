import React from 'react'
import Marquee from "react-fast-marquee";

const reviews=[
    {name:"David",image:"david.webp",occupation:"Freelancer",review:"Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity."},
    {name:"Alex",image:"alex.webp",occupation:"IT Manager",review:"I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks."},
    {name:"Emily",image:"emily.webp",occupation:"Art Director",review:"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"},  
    {name:"Sarah",image:"sarah.webp",occupation:"Project Manager",review:"The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."},  
]
const Testimonials = () => {
  return (
    <div className="w-screen">
    <div className=' w-[80%] m-auto flex flex-col items-start justify-center mb-[100px]'>
        <div className="text-customBlue bg-white border-2 p-1 border-gray-200 w-[150px] text-[15px] rounded-xl mt-[100px] font-semibold px-2">🧡 TESTIMONIALS</div>
        <div className="text-[55px] font-semibold font-sans"> Hear from our <span className='text-darkOrange font-semibold'>Satisfied</span> clients</div>
        <div className='text-[20px] text-customeGrey font-semibold mt-3'>Discover why our clients love working with us. Read their  </div>
        <div className='text-[20px] text-customeGrey font-semibold mb-10'>testimonials and learn how we has helped businesses.</div>
        <Marquee direction='right' className='overflow-hidden mt-[80px]'>
        {reviews.map((item,index)=>{
              return (
            <div className="h-[400px] flex flex-col w-[250px] gap-[20px]  items-start mr-10" key={item.name}>
            <div className='text-[20px] text-black font-normal'>"{item.review}"</div>
            <div className="flex justify-start items-center gap-5">
                <img className='h-[60px] 'src={item.image} alt="" />
                <div className="font-semibold text-[20px]">{item.name}<div className='font-medium text-[18px] text-gray-600'>Freelancer</div></div>
            </div>
            </div>
              )
         })}
        </Marquee>
    </div>
    </div>
  )
}

export default Testimonials