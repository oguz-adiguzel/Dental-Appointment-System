"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const page = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div className="w-full bg-white text-black pb-40">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-full lg:w-3/5 mx-auto px-5 lg:px-0">
          <p className="font-bold text-2xl">HAKKIMIZDA</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Hakkımızda</span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/5 mx-auto py-10 px-5 lg:px-0">
        <p className="text-3xl font-light">Neden en iyisiyiz?</p>
        <p className="text-sm mt-2 text-gray-400">
          İyi yolculuk bir adımla başlar!
        </p>
        <div className="w-full h-auto lg:h-[500px] grid grid-cols-1 lg:grid-cols-6 gap-x-10 mt-10">
          <div className="lg:col-span-4 w-full lg:w-auto">
            <Accordion activeIndex={activeIndex} onTabChange={onTabChange}>
              <AccordionTab
                header={
                  <span className="flex space-x-2 items-center w-full">
                    <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                    <span
                      className={`${
                        activeIndex === 0 ? "text-[#2FC8DD]" : "text-gray-400"
                      }`}
                    >
                      Sizin için en iyi diş bakım türü hangisidir ?
                    </span>
                  </span>
                }
              >
                <p className="m-0 text-gray-400 text-sm leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </AccordionTab>
              <AccordionTab
                header={
                  <span className="flex space-x-2 items-center w-full">
                    <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                    <span
                      className={`${
                        activeIndex === 1 ? "text-[#2FC8DD]" : "text-gray-400"
                      }`}
                    >
                      Diş nasıl korunur ?
                    </span>
                  </span>
                }
              >
                <p className="m-0 text-gray-400 text-sm leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </AccordionTab>
              <AccordionTab
                header={
                  <span className="flex space-x-2 items-center w-full">
                    <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                    <span
                      className={`${
                        activeIndex === 2 ? "text-[#2FC8DD]" : "text-gray-400"
                      }`}
                    >
                      Ne sıklıkla diş ipi kullanılmalıdır ?
                    </span>
                  </span>
                }
              >
                <p className="m-0 text-gray-400 text-sm leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </AccordionTab>
              <AccordionTab
                header={
                  <span className="flex space-x-2 items-center w-full">
                    <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                    <span
                      className={`${
                        activeIndex === 3 ? "text-[#2FC8DD]" : "text-gray-400"
                      }`}
                    >
                      Daha iyi ağız hijyeni için düzenli olarak gargara kullanın
                    </span>
                  </span>
                }
              >
                <p className="m-0 text-gray-400 text-sm leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </AccordionTab>
              <AccordionTab
                header={
                  <span className="flex space-x-2 items-center w-full">
                    <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                    <span
                      className={`${
                        activeIndex === 4 ? "text-[#2FC8DD]" : "text-gray-400"
                      }`}
                    >
                      Sigarayı bırakarak dişlerinize bakım yapın
                    </span>
                  </span>
                }
              >
                <p className="m-0 text-gray-400 text-sm leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </AccordionTab>
            </Accordion>
          </div>
          <div className="col-span-2 mt-5 lg:mt-0">
            <img loading="lazy" className="w-full" src="add1.jpg" />
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-[#2BC4D9]">
        <div className="w-full lg:w-3/5 mx-auto flex border-b border-blue-200 pb-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center px-10">
            <img loading="lazy" src="icon8.webp" />
            <p className="text-white text-2xl mt-3">
              Dişlerinizi{" "}
              <span className="font-bold">Gevşetiyor musunuz ?</span>
            </p>
            <p className="text-sm text-gray-100 italic">
              Mevcut diş problemleri için
            </p>
            <p className="text-white text-center mt-9 font-light">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam
              id arcu tortor. Sed eget sit ame egestas, cursus felis quis,
              vestibulum.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center px-10">
            <img loading="lazy" src="icon7.webp" />
            <p className="text-white text-2xl mt-3">
              Dişlerinizi{" "}
              <span className="font-bold">Gevşetiyor musunuz ?</span>
            </p>
            <p className="text-sm text-gray-100 italic">
              Mevcut diş problemleri için
            </p>
            <p className="text-white text-center mt-9 font-light">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam
              id arcu tortor. Sed eget sit ame egestas, cursus felis quis,
              vestibulum.
            </p>
          </div>
        </div>
        <p className="text-center text-white text-2xl font-light mt-16">Bizimle her zaman güvendesiniz. <span className="font-bold">Her zaman yardıma hazırız.</span></p>
        <p className="text-center text-white italic">If you are going to passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
        
      </div>
      <div className="w-full px-5 lg:px-0 lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-x-2 mt-16">
          <div className="col-span-6">
            <p className="text-3xl font-light"><span className="font-bold">Dental'e </span>Hoşgeldiniz</p>
            <div className="h-0.5 w-32 mt-3 bg-[#4de4f8]"></div>
            <p className="text-gray-400 leading-6 mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="text-gray-400 leading-6 mt-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="flex items-center space-x-7 mt-10">
              <button className="border-2 border-gray-800 text-gray-800 uppercase text-sm py-3 px-5 hover:bg-[#4de4f8] hover:border-[#4de4f8] duration-500 hover:text-white">Online Randevu</button>
              <button className="border-2 border-[#4de4f8] text-[#4de4f8] uppercase text-sm py-3 px-5 hover:bg-[#4de4f8] hover:border-[#4de4f8] duration-500 hover:text-white">İletişime Geç</button>
            </div>
          </div>
          <div className="col-span-4 mt-8 lg:mt-0">
            <div className="w-full py-12 border-2 border-[#4de4f8] grid grid-cols-10">
              <div className="col-span-3 flex justify-center border-r-2 border-[#4de4f8]">
                <TfiHeadphoneAlt size={80} color="#ACEEFE" />
              </div>
              <div className="col-span-7 pl-7 pr-4">
                <p className="text-lg font-bold text-gray-500">7/24 Canlı Destek</p>
                <p className="text-sm mt-4 text-gray-400">Zaman aralığıyla birlikte bölüm türünü ve personelinizi seçin</p>
              </div>
            </div>

            <div className="w-full py-12 border-2 border-[#4de4f8] grid grid-cols-10 mt-10">
              <div className="col-span-3 flex justify-center border-r-2 border-[#4de4f8]">
                <TfiHeadphoneAlt size={80} color="#ACEEFE" />
              </div>
              <div className="col-span-7 pl-7 pr-4">
                <p className="text-lg font-bold text-gray-500">7/24 Canlı Destek</p>
                <p className="text-sm mt-4 text-gray-400">Zaman aralığıyla birlikte bölüm türünü ve personelinizi seçin</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default page;
