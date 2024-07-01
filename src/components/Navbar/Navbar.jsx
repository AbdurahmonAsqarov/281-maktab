import React, { useState } from 'react';
import { FaSchool, FaSquareInstagram, FaTelegram, FaFacebook } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp  } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!Open)
  };
  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#776B5D] '>
      <div className='px-[120px] py-[25px]  max-md:px-[30px] max-lg:px-[50px]'>
      <div className='w-full h-[50px]  flex justify-between items-center'>
        <div className='w-[50px] h-[50px] bg-[#F3EEEA] rounded-[50%] hover:rotate-180 ease-in duration-300'>
          <FaSchool id='1' className='w-[40px] h-[40px] pt-2 pl-2 text-[#B0A695] ' />
        </div>

        <div className='max-md:hidden'>
          <ul className='flex gap-10 max-md:gap-5 '>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE]' href="#1">Bosh sahifa</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE]' href="#2">Rahbariyat</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE]' href="#3">Yangiliklar</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE]' href="#4">Biz haqimizda</a></li>
          </ul>
        </div>

        <div className='flex gap-5'>
        {Open &&(
            <div className="hidden  gap-5 max-md:flex items-center">
                <a className='text-[25px] text-[#EBE3D5] ' href=""><FaSquareInstagram /></a>
                <a className='text-[25px] text-[#EBE3D5]' href=""><FaTelegram /></a>
                <a className='text-[25px] text-[#EBE3D5]' href=""><FaFacebook /></a>
            </div>
        )}
        {Open ? (
          <IoMdClose  onClick={handleClick} className='text-[30px] text-[#B0A695]  hidden max-md:block cursor-pointer' />
        ) : (
          <RiMenuFoldFill onClick={handleClick} className='text-[30px] text-[#B0A695] hidden max-md:block cursor-pointer' />
        )}
        </div>

       

        <div className=' flex gap-5  max-lg:hidden '>
            <a className='text-[25px] text-[#F3EEEA] hover:animate-bounce' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#F3EEEA] hover:animate-bounce' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#F3EEEA] hover:animate-bounce' href=""><FaFacebook /></a>
          </div>

       
        {isOpen ? (
          <IoIosArrowUp onClick={toggleIcon} className='text-[24px] text-[#B0A695] hidden max-lg:block max-md:hidden cursor-pointer' />
        ) : (
          <IoIosArrowDown onClick={toggleIcon} className='text-[24px] text-[#B0A695] hidden max-lg:block max-md:hidden cursor-pointer' />
        )}

       
      </div>
        {isOpen && (
          <div className='grid w-full justify-items-end'>
            <div className='  gap-1 max-xl:hidden max-lg:grid absolute bg-[#776B5D] rounded-[10px]'>
            <a className='text-[25px] text-[#EBE3D5]' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#EBE3D5]' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#EBE3D5]' href=""><FaFacebook /></a>
          </div>
          </div>
        )}
      </div>

{Open && (
             <div className='hidden max-md:block  text-center w-full'>
             <ul className=' leading-10 absolute text-center  w-full z-20'>
               <li className=' w-full bg-[#776B5D] py-[10px] border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="">Bosh sahifa</a></li>
               <li className=' w-full bg-[#776B5D] py-[10px]  border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="">Rahbariyat</a></li>
               <li className=' w-full bg-[#776B5D] py-[10px]  border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="">Yangiliklar</a></li>
               <li className=' w-full bg-[#776B5D] py-[10px] border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="">Biz haqimizda</a></li>
             </ul>
           </div>
        )}

    </div>
  );
};

export default Navbar;
