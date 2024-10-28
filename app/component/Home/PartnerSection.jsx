'use client'
import React from 'react'
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PartnerSection = () => {

    const data = [
        {
            id:1,
            icon:'par1.webp'
        },
        {
            id:2,
            icon:'par2.webp'
        },
        {
            id:3,
            icon:'par3.webp'
        },
        {
            id:4,
            icon:'par4.webp'
        },
        {
            id:5,
            icon:'par5.webp'
        },
        {
            id:6,
            icon:'par6.webp'
        },
        {
            id:7,
            icon:'par7.webp'
        },
        {
            id:8,
            icon:'par8.webp'
        },
        {
            id:9,
            icon:'par9.webp'
        },
        {
            id:10,
            icon:'par10.webp'
        }
    ]
  return (
    <div className='lg:container w-full mx-auto px-5 lg:px-20'>
        <p className='lg:text-4xl text-2xl text-center'>Devam Eden <span className='text-[#00BCD5]'>Ortaklarımız</span></p>
        <p className='text-center text-gray-400'>Gülümsemeden asla tamamen giyinmiş sayılmazsın!</p>
        <div className='py-20'>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
         
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='w-full flex justify-center items-center'>
                <img loading='lazy' src={item.icon} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </div>
  )
}

export default PartnerSection