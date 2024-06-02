import React from 'react'
import background from '../assets/About.png'
import Image from './Layer/Image'

const AboutUs = () => {
  return (
    <div className="container max-w-[1300px] mx-auto bg-stone-700 mt-16 flex justify-between my-[128px]">
      <div className="right mt-[136px]">
            <Image className="" href="/" src="src/assets/Mask Group.jpg" alt="src/assets/Mask Group.jpg"/>
        </div>
        <div className="left">
            <div className="image">
            <Image className="" href="/" src="src/assets/Mask Group (1).jpg" alt="src/assets/Mask Group (1).jpg"/>
            <div className="text max-w-[614px] mt-10">
             <h4 className='font-cormo text-[23px] text font-bold text-[#FFFFFF]'>About Us</h4>
             <Image className="py-2" href="/" src="src/assets/Vector.png" alt="src/assets/Vector.png"/>
             <h2 className='font-cormo text-[64px] text font-semibold text-[#DCCA87] leading-[82px]mb-8'>Food, Drinks, entertainment in one</h2>
             <p className='w-[523px] leading-7 text-base text-[#AAAAAA] '> Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
             <button className='py-2 px-8 text-base bg-[#DCCA87] leading-7 mt-9 font-cormo' >Know More</button>
            </div>
            </div>
        </div>
    </div>

)
}

export default AboutUs


  
