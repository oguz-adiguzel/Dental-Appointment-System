"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosSearch, IoIosLink } from "react-icons/io";

const page = () => {

  const [filterCat, setFilterCat] = useState('Tümü')
  
  const categories = [
    "Tümü",
    "Diş Telleri",
    "Kozmetik",
    "İmplantlar",
    "Invisalign",
    "Kaplamalar",
  ];

  const imageData = [
    {
      id: 1,
      href: "/portfolio1.jpg",
      category: "Kaplamalar",
    },
    {
      id: 2,
      href: "/portfolio2.jpg",
      category: "Kozmetik",
    },
    {
      id: 3,
      href: "/portfolio3.jpg",
      category: "Invisalign",
    },
    {
      id: 4,
      href: "/portfolio4.jpg",
      category: "Diş Telleri",
    },
    {
      id: 5,
      href: "/portfolio5.jpg",
      category: "Kozmetik",
    },
    {
      id: 6,
      href: "/portfolio6.jpg",
      category: "Diş Telleri",
    },
    {
      id: 7,
      href: "/portfolio7.jpg",
      category: "İmplantlar",
    },
    {
        id: 8,
        href: "/portfolio8.jpg",
        category: "Invisalign",
      },
      {
        id: 9,
        href: "/portfolio9.jpg",
        category: "Kaplamalar",
      },
      {
        id: 10,
        href: "/portfolio10.jpg",
        category: "Kozmetik",
      },
      {
        id: 11,
        href: "/portfolio11.jpg",
        category: "İmplantlar",
      },
      {
        id: 12,
        href: "/portfolio12.jpg",
        category: "Invisalign",
      },
  ];
  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
          <p className="font-bold text-2xl">PORTFOLYO</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Portfolyo</span>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/5 mx-auto px-5 lg:px-0 mt-10">
        <div className="w-full grid grid-cols-3 lg:flex items-center justify-center space-x-5">
          {categories.map((item, index) => (
            <div onClick={()=>setFilterCat(item)} className={`lg:px-4 px-1 py-3 border rounded-md uppercase text-xs font-bold text-gray-400 cursor-pointer hover:bg-[#00BCD5] hover:text-white duration-300 ${item === filterCat ? 'bg-[#00BCD5] text-white':''}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 mt-10 pb-10">
          {imageData.filter((item) => item.category === filterCat).map((item) => (
            <div
              key={item.id}
              className="w-full relative group overflow-hidden"
            >
              <div className="w-full h-full absolute bg-[#18C2D7] opacity-0 group-hover:opacity-90 duration-300">
                <div className="w-full h-3/5 flex justify-center items-center space-x-3 pt-10">
                  <div className="w-12 h-12 rounded-full border border-white flex justify-center items-center -translate-x-48 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 duration-500 cursor-pointer">
                    <IoIosLink size={26} color="white" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white flex justify-center items-center translate-x-48 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 duration-500 cursor-pointer">
                    <IoIosSearch size={26} color="white" />
                  </div>
                </div>
                <div className="w-full h-2/5 bg-[#2c9ead] text-white text-center pt-10 translate-y-36 group-hover:translate-y-0 duration-500">
                  <p>Dental - Online Diş Hekimi Randevu Sistemi</p>
                  <p>{item.category}</p>
                </div>
              </div>
              <Image
                width={0}
                height={0}
                //  sizes="100vw"
                style={{ width: "100%", height: "280px" }} // optional
                src={item.href}
              />
            </div>
          ))}

          {
            filterCat === 'Tümü' && imageData.map((item)=>(
                <div
              key={item.id}
              className="w-full relative group overflow-hidden"
            >
              <div className="w-full h-full absolute bg-[#18C2D7] opacity-0 group-hover:opacity-90 duration-300">
                <div className="w-full h-3/5 flex justify-center items-center space-x-3 pt-10">
                  <div className="w-12 h-12 rounded-full border border-white flex justify-center items-center -translate-x-48 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 duration-500 cursor-pointer">
                    <IoIosLink size={26} color="white" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white flex justify-center items-center translate-x-48 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 duration-500 cursor-pointer">
                    <IoIosSearch size={26} color="white" />
                  </div>
                </div>
                <div className="w-full h-2/5 bg-[#2c9ead] text-white text-center pt-10 translate-y-36 group-hover:translate-y-0 duration-500">
                  <p>Dental - Online Diş Hekimi Randevu Sistemi</p>
                  <p>{item.category}</p>
                </div>
              </div>
              <Image
                width={0}
                height={0}
                //  sizes="100vw"
                style={{ width: "100%", height: "280px" }} // optional
                src={item.href}
              />
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default page;
