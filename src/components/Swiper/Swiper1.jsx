import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper1.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import jpg img
import sw1 from "../../assets/swiper_1.jpg"
import sw2 from "../../assets/swiper_2.jpg"
import sw3 from "../../assets/swiper_3.jpg"
import sw4 from "../../assets/swiper_4.jpg"
import sw5 from "../../assets/swiper_5.jpg"
import sw6 from "../../assets/swiper_6.jpg"
import sw7 from "../../assets/swiper_7.jpg"
import sw8 from "../../assets/swiper_8.jpg"
import sw9 from "../../assets/swiper_9.jpg"

const Swiper1 = () => {
  return (
    <div id='3' className='my-[150px] '>
      <h1 className='font-[700] text-[50px] text-[#052d50] bruh text-center my-[100px]'>Yangiliklar</h1>
       <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
         
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper  w-[75vw] text-center rounded-[8px]  max-md:w-[95vw]"
      >
        <SwiperSlide className=''>
          <div className="greenLife flex items-center">
          <img src={sw1} alt="" className='object-cover h-[500px] rounded-[8px]'/>
          <h1 className=' text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#d29129]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
          <div className='flex items-center greenLife2'>
            <img src={sw2} alt="" className='object-cover h-[500px] rounded-[8px]'/>
            <h1 className='text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#d29129]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className='flex items-center greenLife3'>
            <img src={sw3} alt="" className='object-cover h-[500px] rounded-[8px]'/>
            <h1 className='text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#d29129]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src={sw4} alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#052d50] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src={sw5} alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#052d50] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src={sw6} alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#052d50] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src={sw7} alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#052d50] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='eco1 bg-right  place-centent-end'  >
          <img src={sw8} alt="" className='h-[60vh] max-md:h-[58vh] max-lg:h-[39vh]'/>
            <div className='grid text-end  justify-items-end max-lg:text-start max-lg:justify-items-start'>
            <h1 className=' w-[800px] text-[20px] text-[#EBE3D5] max-lg:text-[15px] max-lg:w-[400px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi 281-sonli umumta'lim maktabidagi Ekalogiya burchagi</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className='eco2 bg-right  place-centent-end'  >
            <img src={sw9} alt="" className='h-[60vh] max-md:h-[58vh] max-lg:h-[39vh]'/>
            <div className='grid text-end  justify-items-end max-lg:justify-items-start max-lg:text-start'>
            <h1 className=' w-[800px] text-[20px] text-[#EBE3D5] max-lg:text-[15px] max-lg:w-[400px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi 281-sonli umumta'lim maktabidagi Ekalogiya burchagi</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swiper1
