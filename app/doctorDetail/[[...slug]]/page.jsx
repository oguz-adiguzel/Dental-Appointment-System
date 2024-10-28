"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const page = () => {

  const [doctor, setDoctor] = useState();
  const [cleanExperience, setCleanExperience] = useState();
  const [cleanCertificates, setCleanCertificates] = useState();
  const [cleanAwards, setCleanAwards] = useState();
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const params = useParams();

  const getDoctor = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/${params.slug[0]}`
      );
      setDoctor(response.data.doctor);
    } catch (error) {
      console.log("error", error);
      router.push("/dentists");
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  useEffect(() => {
    cleanExperienceFunc();
    cleanCertificatesFunc();
    cleanAwardsFunc();
  }, [doctor]);

  const cleanExperienceFunc = () => {
    const cleanHTML = DOMPurify.sanitize(doctor?.experience);
    setCleanExperience(cleanHTML);
  };
  const cleanCertificatesFunc = () => {
    const cleanHTML = DOMPurify.sanitize(doctor?.certificates);
    setCleanCertificates(cleanHTML);
  };

  const cleanAwardsFunc = () => {
    const cleanHTML = DOMPurify.sanitize(doctor?.awards);
    setCleanAwards(cleanHTML);
  };

  return (
    <div className="w-full bg-white text-black pb-16">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
          <p className="font-bold text-2xl">{doctor?.name}</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">{doctor?.name}</span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 mt-20">
          <div className="col-span-3">
            <img
              loading="lazy"
              className="w-full h-[350px]"
              src={doctor?.photoUrl}
            />
          </div>
          <div className="col-span-7 pl-0 lg:pl-10 mt-8 lg:mt-0">
            <p className="text-2xl">
              {doctor?.name}{" "}
              <span className="text-lg text-gray-500">M.D, pH.D</span>
            </p>
            <p className="text-gray-400">{doctor?.department}</p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-10">
              <div className="col-span-2 py-5 border-b lg:border-r">
                <p className="uppercase font-light">Deneyim</p>
              </div>
              <div className="col-span-6 py-5 pl-0 lg:pl-14">
                <p className="font-light">
                  {cleanExperience ? parse(cleanExperience) : "Yükleniyor..."}
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-5">
              <div className="col-span-2 py-5 border-b lg:border-r">
                <p className="uppercase font-light">Sertifikalar</p>
              </div>
              <div className="col-span-6 py-5 pl-0 lg:pl-14">
                <p className="font-light">
                  {cleanCertificates
                    ? parse(cleanCertificates)
                    : "Yükleniyor..."}
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-8 mt-5">
              <div className="col-span-2 py-5 border-r">
                <p className="uppercase font-light">Ödüller</p>
              </div>
              <div className="col-span-6 py-5 pl-0 lg:pl-14">
                <p className="font-light">
                  {cleanAwards ? parse(cleanAwards) : "Yükleniyor..."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 pb-10 px-5 lg:px-0">
          <button
            onClick={() => setIndex(0)}
            className={`text-base lg:text-xl px-12 py-4 border-r  border-t-2 ${
              index === 0
                ? "border-t-[#6ddcf8] text-[#6ddcf8] border-l border-b"
                : ""
            } `}
          >
            Genel Bilgiler
          </button>
          <button
            onClick={() => setIndex(1)}
            className={`text-base lg:text-xl px-12 py-4 border-r border-t-2 ${
              index === 1 ? "border-t-[#6ddcf8] text-[#6ddcf8] border-b" : ""
            } `}
          >
            Hakkımda
          </button>
          <button
            onClick={() => setIndex(2)}
            className={`text-base lg:text-xl px-12 py-4 border-t-2 ${
              index === 2
                ? "border-t-[#6ddcf8] text-[#6ddcf8] border-r border-b"
                : ""
            } `}
          >
            Arka Plan
          </button>
        </div>
        {index === 0 && (
          <div className="w-full py-10">
            <p className="text-gray-500 font-light">
              <span className="font-bold">Free dental care:</span> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas id est sed
              lacus volutpat lobortis. Lorem ipsum dolor sit amet. Going to use
              a passage of Lorem Ipsum, you need to be sure there isn’t anything
              embarrassing hidden in the middle of text .
            </p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
          </div>
        )}
        {index === 1 && (
          <div className="w-full py-10">
            <p className="font-bold text-gray-500">{doctor?.name}</p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
          </div>
        )}
        {index === 2 && (
          <div className="w-full py-5">
            <p className="text-gray-500 font-light mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
          </div>
        )}
      </div>
      <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto py-10 bg-[#F6F9F9] flex justify-center items-center space-x-3">
        <p className="text-2xl">
          Kişisel Sorularınız mı Var? Bir doktorla konuşabilirsiniz
        </p>
        <button className="px-5 py-3 border-2 border-[#00BCD5] text-[#00BCD5] hover:bg-[#00BCD5] hover:text-white duration-500 flex items-center space-x-2">
          <p>İletişime Geç </p>
          <FaArrowCircleRight />
        </button>
      </div>
      <div className="w-full lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-0 mt-16">
        <div className="pr-4">
          <p className="font-bold">Neden biz etraftaki en iyi doktorlarız?</p>
          <p className="font-light text-gray-400 mt-5">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Maecenas id est sed lacus volutpat
            lobortis. Lorem ipsum dolor sit amet. Going to use a passage of
            Lorem Ipsum, you need to be sure there isn’t anything embarrassing
            hidden in the middle of text . Duas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt inculpa qui
            officia deserunt
          </p>
        </div>
        <div className="pl-7 space-y-3 font-light">
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Aenean posuere sem imperdiet</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
          <div className="text-gray-400 flex space-x-3 items-center">
            <FaAngleRight />
            <p>Sed semper lorem sit amet ultrices mollis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
