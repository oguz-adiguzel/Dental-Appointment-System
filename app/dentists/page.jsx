"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const page = () => {
  const [doctorData, setDoctorData] = useState();
  const router = useRouter();

  const getDoctorList = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        }
      );
      if (response) {
        setDoctorData(response.data.doctors);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getDoctorList();
  }, []);

  const cleanText = (text) => {
    const cleanHTML = DOMPurify.sanitize(text);
    const newText = parse(cleanHTML);
    return newText;
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
          <p className="font-bold text-2xl">HEKİMLER</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Hekimler</span>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/5 mx-auto px-5 lg:px-0 pb-20">
        {doctorData?.map((item) => (
          <div className="w-full grid grid-cols-1 lg:grid-cols-10 mt-20">
            <div className="col-span-3">
              <img
                loading="lazy"
                className="w-full h-[350px]"
                src={item.photoUrl}
              />
              <button
                onClick={() => router.push(`/doctorDetail/${item.slug}`)}
                className="w-full h-24 bg-[#ACEEFE] uppercase"
              >
                Detayı Görüntüle
              </button>
            </div>
            <div className="col-span-7 pl-0 lg:pl-10 mt-7 lg:mt-0">
              <p className="text-2xl">
                {item.name}{" "}
                <span className="text-lg text-gray-500">M.D, pH.D</span>
              </p>
              <p className="text-gray-400">{item.department}</p>
              <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-10">
                <div className="col-span-2 py-5 border-b lg:border-r">
                  <p className="uppercase font-light">Deneyim</p>
                </div>
                <div className="col-span-6 py-5 pl-0 lg:pl-14">
                  <p className="font-light">{cleanText(item.experience)}</p>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-5">
                <div className="col-span-2 py-5 border-b lg:border-r">
                  <p className="uppercase font-light">Sertifikalar</p>
                </div>
                <div className="col-span-6 py-5 pl-0 lg:pl-14">
                  {cleanText(item.certificates)}
                </div>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-5">
                <div className="col-span-2 py-5 border-b lg:border-r">
                  <p className="uppercase font-light">Ödüller</p>
                </div>
                <div className="col-span-6 py-5 pl-0 lg:pl-14">
                  {cleanText(item.awards)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
