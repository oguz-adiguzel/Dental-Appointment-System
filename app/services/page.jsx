"use client";
import React, { useEffect, useState } from "react";
import TibbiTavsiyeler from "../component/Services/TibbiTavsiyeler";
import DisBeyazlatma from "../component/Services/DisBeyazlatma";
import Kaplamalar from "../component/Services/Kaplamalar";
import Invisalign from "../component/Services/Invisalign";
import Kronlar from "../component/Services/Kronlar";
import DisKopruleri from "../component/Services/DisKopruleri";
import DisHekimligi from "../component/Services/DisHekimligi";
import Implantlar from "../component/Services/Implantlar";

const page = () => {
  const [comp, setComp] = useState("TibbiTavsiyeler");

  const [navTitle, setNavTitle] = useState();

  const leftItem = [
    {
      id: 1,
      title: "Tıbbi Tavsiyeler",
      component: "TibbiTavsiyeler",
    },
    {
      id: 2,
      title: "Diş Beyazlatma",
      component: "DisBeyazlatma",
    },
    {
      id: 3,
      title: "Kaplamalar",
      component: "Kaplamalar",
    },
    {
      id: 4,
      title: "Invisalign",
      component: "Invisalign",
    },
    {
      id: 5,
      title: "Kronlar",
      component: "Kronlar",
    },
    {
      id: 6,
      title: "Diş Köprüleri",
      component: "DisKopruleri",
    },
    {
      id: 7,
      title: "Diş Hekimliği",
      component: "DisHekimligi",
    },
    {
      id: 8,
      title: "İmplantlar",
      component: "Implantlar",
    },
  ];

  const findNavItem = () => {
    const find = leftItem.find((item) => item.component === comp);
    setNavTitle(find);
  };

  useEffect(() => {
    findNavItem();
  }, [comp]);

  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-3/5 mx-auto">
          <p className="font-bold text-2xl">SERVİSLER</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Servisler / </span>
            <span className="text-gray-400">{navTitle?.title}</span>
          </p>
        </div>
      </div>
      <div className="w-3/5 mx-auto grid grid-cols-6">
        <div className="col-span-2 py-10 pr-7">
          {leftItem.map((item) => (
            <div
              key={item.id}
              onClick={() => setComp(item.component)}
              className="flex items-center space-x-2 border-b cursor-pointer py-3 group"
            >
              <div className="w-1 h-1 rounded-full bg-[#00BCD5]"></div>
              <p
                className={`text-sm group-hover:text-[#00BCD5] duration-500 ${
                  comp === item.component ? "text-[#00BCD5]" : "text-black"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-4 py-10">
          {comp === "TibbiTavsiyeler" && <TibbiTavsiyeler />}
          {comp === "DisBeyazlatma" && <DisBeyazlatma />}
          {comp === "Kaplamalar" && <Kaplamalar />}
          {comp === "Invisalign" && <Invisalign />}
          {comp === "Kronlar" && <Kronlar />}
          {comp === "DisKopruleri" && <DisKopruleri />}
          {comp === "DisHekimligi" && <DisHekimligi />}
          {comp === "Implantlar" && <Implantlar />}
        </div>
      </div>
    </div>
  );
};

export default page;
