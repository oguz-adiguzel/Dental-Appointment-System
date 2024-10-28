"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Main = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
      >
        <SwiperSlide>
          <div className="w-full lg:h-[950px] h-[500px] mainSlider1 flex justify-end items-center">
            <div className="lg:mr-72 mr-5 flex lg:block flex-col items-end">
              <p className="lg:text-5xl text-xl font-light">
                Dişinizi{" "}
                <span className="font-bold text-[#00BCD5]">Yaptırın</span>
              </p>
              <p className="lg:text-5xl text-xl font-light mt-2">Çok Daha Parlak Bir</p>
              <p className="lg:text-5xl text-xl font-light mt-2">Deneyim Yaşayın</p>
              <p className="font-light mt-4 hidden lg:block">
                En iyi olanaklar ve daha iyi ekipmanlarla, emin ellerdesiniz
              </p>
              <div className="space-x-5 mt-5 hidden lg:block">
                <button className="w-52 h-12 bg-transparent text-gray-800 border-2 border-gray-800 font-bold text-sm hover:bg-gray-800 hover:text-white duration-500">
                  Bir Diş Hekimine Danışın
                </button>
                <button className="w-52 h-12 bg-transparent text-[#00BCD5] border-2 border-[#00BCD5] font-bold text-sm hover:bg-[#00BCD5] hover:text-white duration-500">
                  Randevu Alın
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[950px] h-[500px] mainSlider2 flex justify-end items-center">
            <div className="lg:mr-72 mr-5">
              <p className="lg:text-5xl text-xl font-light">Anadalda Uzmanlık</p>
              <p className="lg:text-5xl text-xl font-bold mt-4 text-[#00BCD5]">
                Diş Prosedürleri
              </p>
              <div className="mt-5 hidden lg:block text-2xl font-extralight space-y-7">
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-8 h-8"
                    src="tooth-icon.png"
                  />
                  <p>Oral Examinations</p>
                </div>
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-8 h-8"
                    src="tooth-icon-2.png"
                  />
                  <p>Diş Telleri ve Bağlama</p>
                </div>
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-9 h-9"
                    src="tooth-icon-3.png"
                  />
                  <p>Protezler ve Onarımlar</p>
                </div>
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-8 h-8"
                    src="tooth-icon.png"
                  />
                  <p>Kanal Tedavisi</p>
                </div>
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-8 h-8"
                    src="tooth-icon.png"
                  />
                  <p>Crowns and Caps</p>
                </div>
                <div className="flex items-center space-x-6">
                  <img
                    loading="lazy"
                    className="w-8 h-8"
                    src="tooth-icon.png"
                  />
                  <p>Çekimler ve Diş Eti Cerrahisi</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[950px] h-[500px] mainSlider3 flex justify-start items-center">
            <div className="lg:ml-72 mr-0 ml-5 lg:ml-0">
              <p className="lg:text-5xl text-xl font-light">
                Basit{" "}
                <span className="font-bold text-[#00BCD5]">Prosedürlerden</span>
              </p>
              <p className="lg:text-5xl text-xl font-light mt-2">
                Karmaşık{" "}
                <span className="font-bold text-[#00BCD5]">Ameliyatlara</span>
              </p>
              <p className="font-light mt-4 hidden lg:block">
                En iyi olanaklar ve daha iyi ekipmanlarla, emin ellerdesiniz
              </p>
              <div className="hidden lg:block space-x-5 mt-5">
                <button className="w-52 h-12 bg-transparent text-gray-800 border-2 border-gray-800 font-bold text-sm hover:bg-gray-800 hover:text-white duration-500">
                  Bir Diş Hekimine Danışın
                </button>
                <button className="w-52 h-12 bg-transparent text-[#00BCD5] border-2 border-[#00BCD5] font-bold text-sm hover:bg-[#00BCD5] hover:text-white duration-500">
                  Randevu Alın
                </button>
              </div>
              <div className="w-28 h-10 mt-5 flex justify-center items-center text-lg font-bold text-white bg-[#00BCD5]">
                <p>Call us @</p>
              </div>
              <p className="text-4xl font-light mt-3">0222 000 00 00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full py-8 space-x-8 flex justify-center items-center lg:text-3xl text-xl px-3 lg:px-0 text-white bg-[#00bcd573]">
        <p>Bugün bizimle iletişime geçin (0222) 000 00 00</p>
        <button className="w-48 h-12 border-2 text-base">Randevu Al</button>
      </div>
    </div>
  );
};

export default Main;
