"use client";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DoctorSection = () => {
  const doctor = [
    {
      id: 1,
      name: "Dr.Anagha Menen",
      title: "Cosmetic Surgery",
      photo: "doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr.Ankitha Prem",
      title: "Maxillofacial Surgery",
      photo: "doctor2.jpg",
    },
    {
      id: 3,
      name: "Dr.Bora Tumnus",
      title: "Orthodontist",
      photo: "doctor3.jpg",
    },
    {
      id: 4,
      name: "Dr.Charl Marks",
      title: "General, Orthodontist",
      photo: "doctor4.jpg",
    },
    {
      id: 5,
      name: "Dr.Anagha Menen",
      title: "Cosmetic Surgery",
      photo: "doctor1.jpg",
    },
    {
      id: 6,
      name: "Dr.Ankitha Prem",
      title: "Maxillofacial Surgery",
      photo: "doctor2.jpg",
    },
  ];
  return (
    <div className="w-full py-20 flex flex-col items-center">
        <img loading="lazy" className="absolute" src="title_img2.png" />
      <p className="text-4xl text-center font-semibold">
        Değerli Diş <span className="text-[#00BCD5]">Uzmanlarımız</span>
      </p>
      <p className="text-gray-400 text-center">
        Gülümseme her şeyi yoluna koyan bir eğridir!
      </p>
      <div className="w-full mt-16">
        <Swiper
          // slidesPerView={5}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          //   navigation={{
          //     prevEl: "#prevBrandSlider",
          //     nextEl: "#nextBrandSlider",
          //   }}
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
          {doctor.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full flex flex-col items-center">
                <div className="w-3/4 flex flex-col items-center pb-8 hover:border border-[#00BCD5] hover:bg-gray-100 duration-200 group">
                  <img loading="lazy" className="w-full" src={item.photo} />
                  <p className="text-2xl text-center mt-5">{item.name}</p>
                  <p className="font-extralight text-gray-400 text-center text-sm">
                    {item.title}
                  </p>
                  <div className="w-full flex justify-center items-center space-x-4 text-gray-400 mt-5 group-hover:text-[#00BCD5]">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaGooglePlusG size={22} />
                    <FaLinkedinIn />
                  </div>
                  <button className="mx-auto mt-6 opacity-0 group-hover:opacity-100 text-sm text-gray-500 hover:text-[#00BCD5]">Detayları Göster</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorSection;
