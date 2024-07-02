import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'

// Import Home
import Home from '../Home/Home';

//Icons
import { IoIosArrowDown, IoIosArrowUp,IoIosArrowRoundDown  } from 'react-icons/io';



const Header = () => {
  const [tel,setTel] = useState(false);
  const [loc,setLoc] = useState(false);
const TelClick = () => {
  setTel(!tel)
};
const LocationClick = () => {
  setLoc(!loc)
};

const whiteToggle = () => {
  const blackToWhite = document.querySelector('.Dowhite')
  blackToWhite.classList.add('text-[#EBE3D5]')
}
  return (
    <>
     <Navbar/>

     <div className='w-full'>
     <div className='bg-img bg-fixed h-[130vh] '>
            <div className='pt-[200px] max-sm:pt-[100px] text-center '>
         <h1 className='z-10 text-[80px] max-md:text-[40px] text-[#EBE3D5] font-[800] bg-[#33333399] backdrop-blur-sm '><span onClick={whiteToggle} className='Dowhite text-[#776B5D]'>281-sonli</span> umumiy o'rta   </h1>
         <h1 className='text-[#EBE3D5] text-[80px] font-[800] max-md:text-[40px]  bg-[#33333399] backdrop-blur-sm '>ta'lim maktabi</h1>

         <div className="grid grid-cols-2  gap-y-[5px] mt-[50px]  gap-x-10 max-md:gap-3">
           <div className=' place-content-end flex'>
           <button onClick={LocationClick}  className='ad text-[#EBE3D5] flex font-[600] bg-[#776B5D] px-[25px] max-md:w-[170px] max-sm:w-[150px] w-[200px] py-[20px] max-sm:px-[15px] rounded-bl-3xl rounded-tr-3xl justify-between border border-[#EBE3D5]  hover:border-[3px] hover:border-[#776B5D] ease-in duration-300 hover:text-[#776B5D] hover:bg-[#EBE3D5]'>
                <h1 className='max-md:text-[14px] '>Manzil</h1>
                <div className=" ">
                {loc ? (
          <IoIosArrowUp  className='text-[24px] max-md:text-[20px] cursor-pointer' />
        ) : (
          <IoIosArrowDown  className='text-[24px] max-md:text-[20px]  max-lg:block  cursor-pointer' />
        )}
                </div>
            </button>
            
         </div>
          <div className=' text-end'>
          <button onClick={TelClick} className=' max-sm:w-[150px] text-[#776B5D] hover:text-[#EBE3D5] flex bg-[#EBE3D5] hover:bg-[#776B5D] font-[600] px-[25px] max-sm:px-[15px]   max-md:w-[190px] w-[200px] py-[20px] rounded-bl-3xl rounded-tr-3xl justify-between border-[3px] border-[#B0A695] hover:border-[#EBE3D5]    ease-in duration-300 '>
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

            <div className="col-end-2 ">
            {loc && (
                 <div className=' text-end'>
                 <button className='max-sm:w-[150px] text-[#776B5D] font-[600] bg-[#EBE3D5] px-[4px] max-md:w-[170px] w-[200px] py-[4px] max-sm:px-[15px] rounded-br-3xl rounded-tl-3xl border-[3px] border-[#776B5D] '>
                 <h1 className='max-md:border-none max-md:text-[10px] border-[3px] border-[#776B5D] px-[10px] py-[10px] rounded-br-3xl rounded-tl-3xl hover:animate-pulse'>Chilonzor tuman Sharq 6 A uy</h1>
                 
                 </button>
                 </div>
              )}
            </div>
              
              {tel && (
             <div className=' text-start'>
             <button className='max-sm:w-[150px] text-[#EBE3D5] font-[600] bg-[#776B5D] px-[6px] max-md:w-[170px] w-[200px] py-[6px] max-sm:px-[15px] rounded-br-3xl rounded-tl-3xl border-[2px] border-[#EBE3D5] '>
                  <h1 className='max-md:text-[10px] border-[2px] border-[#EBE3D5] px-[10px] py-[10px] rounded-br-3xl rounded-tl-3xl max-md:border-none hover:animate-pulse'>+998 (99) 839 70 19</h1>
                 
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
