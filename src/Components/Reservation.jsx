import React from 'react'

import Image from './Layer/Image'
const Reservation = () => {
  return (
 <div className="container max-w-[1680px] mx-auto ">
   <div className="main max-w-[1364px] bg-[#0C0C0C] mx-auto  py-12">

   <div className="text w-[350px] mx-auto flex flex-col  justify-center items-center">
        <h3 className='font-cormo text-[23px] font-bold text-[#FFFFFF]'>Reservations</h3>
       <Image className="py-2" href="/" src="src/assets/Vector.png" alt="src/assets/Vector.png"/>
       <h2 className='text-[#DCCA87] font-cormo text-[64px] font-semibold'>Book A Table</h2>
     </div>

     <div className="seltag my-16 flex justify-around">
        <select className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
         name="" id="">
            <option className=' bg-slate-500' value="1">1 person</option>
            <option className=' bg-slate-500' value="1">2 person</option>
            <option className=' bg-slate-500' value="1">3 person</option>
            <option className=' bg-slate-500' value="1">4 person</option>
            <option className=' bg-slate-500' value="1">5 person</option>
            <option className=' bg-slate-500' value="1">6 person</option>
        </select>

        <select className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
         name="" id="">
            <option className=' bg-slate-500' value="">12/05/2021</option>
            <option className=' bg-slate-500' value="">13/05/2021</option>
            <option className=' bg-slate-500' value="">14/05/2021</option>
            <option className=' bg-slate-500' value="">15/05/2021</option>
            <option className=' bg-slate-500' value="">16/05/2021</option>
            <option className=' bg-slate-500' value="">17/05/2021</option>
        </select>

        <select className='w-[412px] outline-none bg-transparent text-white border border-inherit font-cormo p-4 text-xl font-semibold'
         name="" id="">
            <option className=' bg-slate-500' value="">11:00 AM</option>
            <option className=' bg-slate-500' value="">12:00 AM</option>
            <option className=' bg-slate-500' value="">1:00 AM</option>
            <option className=' bg-slate-500' value="">2:00 AM</option>
            <option className=' bg-slate-500' value="">3:00 AM</option>
            <option className=' bg-slate-500' value="">4:00 AM</option>
        </select>

     </div>
     
     <div className='flex justify-center items-center mx-auto '>
     <button className=' bg-[#DCCA87] py-2 px-8 font-cormo text-base'>Book Now</button>
     </div>
   </div>
 </div>
  )
}

export default Reservation

