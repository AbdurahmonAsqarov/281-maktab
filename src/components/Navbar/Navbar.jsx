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
    <div className=' '>
      <div className='px-[120px] py-[25px] border-[3px] border-[#000] max-md:px-[30px] max-lg:px-[50px]'>
      <div className='w-full h-[50px]  flex justify-between items-center'>
        <div className='w-[50px] h-[50px] bg-[#F95555] rounded-[50%] hover:rotate-180 ease-in duration-300'>
          <FaSchool id='1' className='w-[40px] h-[40px] pt-2 pl-2 text-[#fff] ' />
        </div>

        <div className='max-md:hidden'>
          <ul className='flex gap-10 max-md:gap-5 '>
            <li><a className='text-[18px] font-[500] text-[#2B2B2B] hover:text-[#EEE]' href="#1">Bosh sahifa</a></li>
            <li><a className='text-[18px] font-[500] text-[#2B2B2B] hover:text-[#EEE]' href="#2">Rahbariyat</a></li>
            <li><a className='text-[18px] font-[500] text-[#2B2B2B] hover:text-[#EEE]' href="#3">Yutuqlar</a></li>
            <li><a className='text-[18px] font-[500] text-[#2B2B2B] hover:text-[#EEE]' href="#4">Yangiliklar</a></li>
          </ul>
        </div>

        <div className='flex gap-5'>
        {Open &&(
            <div className="hidden  gap-5 max-md:flex ">
                <li className=''><a className='text-[25px] text-[#B9B9B9] ' href=""><FaSquareInstagram /></a></li>
                <li><a className='text-[25px] text-[#B9B9B9]' href=""><FaTelegram /></a></li>
                <li><a className='text-[25px] text-[#B9B9B9]' href=""><FaFacebook /></a></li>
            </div>
        )}
        {Open ? (
          <IoMdClose  onClick={handleClick} className='text-[30px] hidden max-md:block cursor-pointer' />
        ) : (
          <RiMenuFoldFill onClick={handleClick} className='text-[30px] hidden max-md:block cursor-pointer' />
        )}
        </div>

       

        <div className=' flex gap-5  max-lg:hidden '>
            <a className='text-[25px] text-[#B9B9B9] hover:animate-bounce' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#B9B9B9] hover:animate-bounce' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#B9B9B9] hover:animate-bounce' href=""><FaFacebook /></a>
          </div>

       
        {isOpen ? (
          <IoIosArrowUp onClick={toggleIcon} className='text-[24px] hidden max-lg:block max-md:hidden cursor-pointer' />
        ) : (
          <IoIosArrowDown onClick={toggleIcon} className='text-[24px] hidden max-lg:block max-md:hidden cursor-pointer' />
        )}

       
      </div>
        {isOpen && (
          <div className='grid w-full justify-items-end'>
            <div className='  gap-1 max-xl:hidden max-lg:grid absolute bg-[#fff]'>
            <a className='text-[25px] text-[#B9B9B9]' href=""><FaSquareInstagram /></a>
            <a className='text-[25px] text-[#B9B9B9]' href=""><FaTelegram /></a>
            <a className='text-[25px] text-[#B9B9B9]' href=""><FaFacebook /></a>
          </div>
          </div>
        )}
      </div>

{Open && (
             <div className='hidden max-md:block  text-center w-full'>
             <ul className=' leading-10 absolute text-center  w-full z-20'>
               <li className=' w-full bg-[#000] py-[10px] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#fff]  ' href="">Bosh sahifa</a></li>
               <li className=' w-full bg-[#000] py-[10px] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#fff]  ' href="">Rahbariyat</a></li>
               <li className=' w-full bg-[#000] py-[10px] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#fff]  ' href="">Yutuqlar</a></li>
               <li className=' w-full bg-[#000] py-[10px] border-[3px] rounded-[8px]'><a className='text-[35px] font-[500] text-[#fff]  ' href="">Yangiliklar</a></li>
             </ul>
           </div>
        )}

    </div>
  );
};

export default Navbar;
