import React, { useState } from 'react';
import { FaSchool, FaSquareInstagram, FaTelegram, FaFacebook } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp  } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri";
import logo from '../../assets/126_maktab.jpg'
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
    <div className='bg-[#052d50] '>
      <div className='px-[120px] py-[25px]  max-md:px-[15px] max-lg:px-[30px]'>
      <div className='w-full h-[50px]  flex justify-between items-center'>
        {/* <div className='w-[50px] h-[50px] bg-[#F3EEEA] rounded-[50%] hover:rotate-180 ease-in duration-300'>
          <FaSchool id='1' className='w-[40px] h-[40px] pt-2 pl-2 text-[#B0A695] ' />
        </div> */}
        <div className=''>
            <img src={logo} alt="" id='1' className='h-[75px] py-[-25px] max-lg:h-[50px]'/>
        </div>

        <div className='max-md:hidden'>
          <ul className='flex gap-10 max-lg:gap-5 '>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE] max-xl:text-[13px] max-lg:text-[18px]' href="#1">Bosh sahifa</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE] max-xl:text-[13px] max-lg:text-[18px]' href="#2">Rahbariyat</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE] max-xl:text-[13px] max-lg:text-[18px]' href="#3">Yangiliklar</a></li>
            <li><a className='text-[18px] font-[500] text-[#F3EEEA] hover:text-[#EEE] max-xl:text-[13px] max-lg:text-[18px]' href="#4">Biz haqimizda</a></li>
          </ul>
        </div>

        <div className='flex gap-5'>
        {Open &&(
            <div className="hidden  gap-2 max-md:flex items-center">
                <a className='text-[25px] text-[#d29129] ' href=""><FaSquareInstagram /></a>
                <a className='text-[25px] text-[#d29129]' href=""><FaTelegram /></a>
                <a className='text-[25px] text-[#d29129]' href=""><FaFacebook /></a>
            </div>
        )}
        {Open ? (
          <IoMdClose  onClick={handleClick} className='text-[30px] text-[#d29129]  hidden max-md:block cursor-pointer' />
        ) : (
          <RiMenuFoldFill onClick={handleClick} className='text-[30px] text-[#d29129] hidden max-md:block cursor-pointer' />
        )}
        </div>

       

        <div className=' flex gap-5  max-lg:hidden '>
            <a className='text-[25px] text-[#d29129] hover:animate-bounce' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#d29129] hover:animate-bounce' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#d29129] hover:animate-bounce' href=""><FaFacebook /></a>
          </div>

       
        {isOpen ? (
          <IoIosArrowUp onClick={toggleIcon} className='text-[24px] text-[#d29129] hidden max-lg:block max-md:hidden cursor-pointer' />
        ) : (
          <IoIosArrowDown onClick={toggleIcon} className='text-[24px] text-[#d29129] hidden max-lg:block max-md:hidden cursor-pointer' />
        )}

       
      </div>
        {isOpen && (
          <div className='grid w-full justify-items-end'>
            <div className='  gap-1 max-xl:hidden max-lg:grid absolute bg-[#052d50] rounded-[10px]'>
            <a className='text-[25px] text-[#d29129]' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#d29129]' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#d29129]' href=""><FaFacebook /></a>
          </div>
          </div>
        )}
      </div>

{Open && (
             <div className='hidden max-md:block  text-center w-full'>
             <ul className=' leading-10 absolute text-center  w-full z-20'>
               <li className=' w-full bg-[#052d50] py-[10px] border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="#1">Bosh sahifa</a> </li>
               <li className=' w-full bg-[#052d50] py-[10px]  border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="#2">Rahbariyat</a></li>
               <li className=' w-full bg-[#052d50] py-[10px]  border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="#3">Yangiliklar</a></li>
               <li className=' w-full bg-[#052d50] py-[10px] border-[#EBE3D5] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#EBE3D5]  ' href="#4">Biz haqimizda</a></li>
             </ul>
           </div>
        )}

    </div>
  );
};

export default Navbar;
