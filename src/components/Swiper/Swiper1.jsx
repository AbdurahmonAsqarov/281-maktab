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

const Swiper1 = () => {
  return (
    <div id='3' className='my-[150px] '>
      <h1 className='font-[700] text-[50px] text-[#776B5D] bruh text-center my-[100px]'>Yangiliklar</h1>
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
          <img src="src/assets/swiper/Swiper1/swiper_1.jpg" alt="" className='object-cover h-[500px] rounded-[8px]'/>
          <h1 className=' text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#776B5D]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
          <div className='flex items-center greenLife2'>
            <img src="src/assets/swiper/Swiper1/swiper_2.jpg" alt="" className='object-cover h-[500px] rounded-[8px]'/>
            <h1 className='text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#776B5D]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className='flex items-center greenLife3'>
            <img src="src/assets/swiper/Swiper1/swiper_3.jpg" alt="" className='object-cover h-[500px] rounded-[8px]'/>
            <h1 className='text-[24px] font-[600] text-[#EBE3D5]'>281- maktab hovlisiga <span className='text-[#776B5D]'>"Yashil makon"</span> loyihasi asosida  rayhon va gul ko'chatlari ekildi.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src="src/assets/swiper/swiper2/swiper_4.jpg" alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#776B5D] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src="src/assets/swiper/swiper2/swiper_5.jpg" alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#776B5D] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src="src/assets/swiper/swiper2/swiper_6.jpg" alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#776B5D] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className=' '>
            <img src="src/assets/swiper/swiper2/swiper_7.jpg" alt="" className='object-cover h-[60vh] w-full h-[500px] rounded-[8px] max-lg:h-[39vh] max-md:h-[55vh]'/>
            <h1 className='text-[20px] font-[600] text-[#776B5D] max-lg:text-[14px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi umumta'lim maktablariga <span>“TURON” MAKTAB TEATRI”</span> TANLOVIGA START BERILDI</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='eco1 bg-right  place-centent-end'  >
            <div className='h-[60vh] max-md:h-[58vh] max-lg:h-[39vh] swiper8 '></div>
            <div className='grid text-end  justify-items-end max-lg:text-start max-lg:justify-items-start'>
            <h1 className=' w-[800px] text-[20px] text-[#EBE3D5] max-lg:text-[15px] max-lg:w-[400px]'>Toshkent shahar Chilonzor tumani Maktabgacha va maktab ta'limi bo'limi tasarrufidagi 281-sonli umumta'lim maktabidagi Ekalogiya burchagi</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='place-content-center'>
        <div className='eco2 bg-right  place-centent-end'  >
            <img src="" alt="" className='h-[60vh] max-md:h-[58vh] max-lg:h-[39vh]'/>
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
