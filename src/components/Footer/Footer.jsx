import React from 'react'

// import jpg img
import sportZal from '../../assets/sport_zal.jpg'
import cook from '../../assets/cook.jpg'
import mainZal from '../../assets/activiy_zal.jpg'
import main from '../../assets/school_decoration.jpg'
import sinfxona from '../../assets/sinfxona.png'
import informatika from '../../assets/Informatika.png'
import arrow from '../../assets/arrow.png'

const Footer = () => {
  return (
    <>
        <h1 id='4' className='text-center text-[#052d50] font-[700] text-[50px] bruh mb-[200px]  '>Bizning maktab <span className='max-md:hidden'>!</span></h1>
        <div className='px-[120px] mb-[300px] max-md:mx-[-120px] max-md:mb-[150px]'>

        <div className='grid grid-cols-2 text-[#052d50] items-center gap-[100px] max-md:gap-5 max-md:px-[10px]'>

            <img src={sportZal} alt="" className='hover:shadow-2xl ease-in duration-500 hover:translate-y-[-30px] h-[323px] w-[584px] rounded-[30px] max-md:h-[30vh]'/>
            <h1 className='text-[50px] font-[700] bruh2 max-md:text-[20px] max-lg:text-[40px] '>Bizning sport zal</h1>

            <h1 className='text-[50px] font-[700] bruh2 max-lg:text-[40px] max-md:text-[20px]'>Bizning oshxona</h1>
            <img src={cook} alt="" className='hover:shadow-2xl ease-in duration-500 hover:translate-y-[-30px] h-[323px] w-[584px] rounded-[30px] max-md:h-[30vh]'/>

            <img src={mainZal} alt="" className='hover:shadow-2xl ease-in duration-500 hover:translate-y-[-30px] h-[323px] w-[584px] rounded-[30px] max-md:h-[30vh] '/>
            <h1 className='text-[50px] font-[700] bruh2 max-lg:text-[40px] max-md:text-[20px] text-center'>Bizning asosiy zal</h1>

            <div>
              <h1 className='text-[50px] font-[700] bruh2 max-lg:text-[40px] max-md:text-[20px] text-center'>Milliy reytingdagi o'rni:</h1>
              <img src={arrow} alt="" className='absolute right-[40%] max-lg:hidden'/>
            </div>
            <img src={sinfxona} className='hover:shadow-2xl ease-in duration-500 hover:translate-y-[-30px] h-[323px] w-[584px] rounded-[30px] max-md:h-[30vh]' alt="" />

            <img src={informatika} alt="" className='hover:shadow-2xl ease-in duration-500 hover:translate-y-[-30px] h-[323px] w-[584px] rounded-[30px] max-md:h-[30vh] '/>
            <h1 className='text-[40px] font-[700] bruh2 max-lg:text-[25px] max-md:text-[20px] text-center'>Respublikada 306-o'rin
              Shaharda 9-o'rinda tumanda - 3-o'rin
            </h1>

        </div>
        </div>

        <div className='mb-[50px] flex place-content-center '>
            <img src={main} alt="" className=' bruh3 w-[70vw] h-[80vh] rounded-[30px] max-md:h-[40vh] max-lg:h-[60vh]'/>
        </div> 
        <h1 className='text-[30px] text-[#052d50] font-[600] text-center mb-[200px] max-md:mb-[100px] max-md:text-[25px]'>Yangi O`zbekistonga  yangicha fikrlaydigan,vatanparvar va bilimli yoshlar kerak.</h1>

        <div className='border-t-[2px] bg-[#052d50] border-[#000] flex justify-between items-center px-[100px] max-md:px-[20px]'>
            <h1 className='text-[30px] text-[#d29129] font-[600] my-[25px] bruh max-md:text-[20px] '>281-maktab</h1>
            <p className='hover:text-[15px] text-[#d29129] hover:font-[700] max-md:text-[12px] '><a href="#1" className='footer hover:animate-pulse'>Bosh sahifaga qaytish</a></p>
        </div>
    </>
  )
}

export default Footer
