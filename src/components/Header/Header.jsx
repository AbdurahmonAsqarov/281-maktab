import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'

// Import Home
import Home from '../Home/Home';

//Icons
import { IoIosArrowDown, IoIosArrowUp,IoIosArrowRoundDown  } from 'react-icons/io';
import { TiArrowDownOutline } from "react-icons/ti";



const Header = () => {
  const [tel,setTel] = useState(false);

const TelClick = () => {
  setTel(!tel)
};

const whiteToggle = () => {
  const blackToWhite = document.querySelector('.Dowhite')
  blackToWhite.classList.add('text-[#fff]')
}
  return (
    <>
     <Navbar/>

     <div className='w-full'>
     <div className='bg-img bg-fixed h-[130vh] '>
            <div className='pt-[200px] max-sm:pt-[100px] text-center '>
         <h1 className='z-10 text-[80px] max-md:text-[40px] text-[#fff] font-[800] backdrop-blur-sm'><span onClick={whiteToggle} className='Dowhite text-[#000]'>281-sonli</span> o'rta umumiy  </h1>
         <h1 className='text-[#fff] text-[80px] font-[800] max-md:text-[40px] backdrop-blur-sm '>ta'lim maktabi</h1>

         <div className="grid grid-cols-2 gap-y-[5px] mt-[50px]  gap-x-10 max-md:gap-3">
           <div className=' place-content-end flex'>
           <button  className='ad text-[#fff] flex font-[600] bg-[#000] px-[25px] max-md:w-[170px] max-sm:w-[150px] w-[200px] py-[20px] max-sm:px-[15px] rounded-bl-3xl rounded-tr-3xl justify-between border border-[#fff] hover:border-[#000] hover:text-[#000] hover:bg-[#fff] hover:border-[3px]  ease-in duration-300'>
                <h1 className='max-md:text-[14px] '>Manzil</h1>
                <div className=" ">
                  <TiArrowDownOutline className='icon text-2xl'/>
                </div>
            </button>
         </div>
          <div className=' text-end'>
          <button onClick={TelClick} className=' max-sm:w-[150px] text-[#000] hover:text-[#fff] flex bg-[#fff] hover:bg-[#000] font-[600] px-[25px] max-sm:px-[15px] hover:px-[20px]  max-md:w-[190px] w-[200px] py-[20px] rounded-bl-3xl rounded-tr-3xl justify-between border-[3px] border-[#000] hover:border-[#fff]  hover:w-[180px]  ease-in duration-300 hover:origin-top-left hover:rotate-12'>
                <h1 className='max-md:text-[14px] '>Aloqa uchun</h1>
                <div className=" text-[#000 ] ">
                {tel ? (
          <IoIosArrowUp  className='text-[24px] max-md:text-[20px] cursor-pointer' />
        ) : (
          <IoIosArrowDown  className='text-[24px] max-md:text-[20px]  max-lg:block  cursor-pointer' />
        )}
                </div>
            </button>
          </div>

               <div className=' text-end'>
               <button className='max-sm:w-[150px] text-[#000] font-[600] bg-[#fff] px-[4px] max-md:w-[170px] w-[200px] py-[4px] max-sm:px-[15px] rounded-br-3xl rounded-tl-3xl border-[3px] border-[#000] '>
               <h1 className='max-md:border-none max-md:text-[10px] border-[3px] border-[#000] px-[10px] py-[10px] rounded-br-3xl rounded-tl-3xl hover:animate-pulse'>Toshkent shahar Chilonzor tumani</h1>
               
               </button>
               </div>
              
              {tel && (
             <div className=' text-start'>
             <button className='max-sm:w-[150px] text-[#fff] font-[600] bg-[#000] px-[6px] max-md:w-[170px] w-[200px] py-[6px] max-sm:px-[15px] rounded-br-3xl rounded-tl-3xl border-[2px] border-[#fff] '>
                  <h1 className='max-md:text-[10px] border-[2px] border-[#fff] px-[10px] py-[10px] rounded-br-3xl rounded-tl-3xl max-md:border-none'>+998 (90) 123 45 67</h1>
                 
              </button>
             </div>
            )}
            
            

         

         </div>
            </div>
         </div> 
     </div>
     <Home/>
    </>
  )
}

export default Header
