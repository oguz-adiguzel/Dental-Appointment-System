import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const nav = [
    {
      id: 1,
      text: "Anasayfa",
      href: "/",
    },
    {
      id: 2,
      text: "Hakkımızda",
      href: "/hakkimizda",
    },
    {
      id: 3,
      text: "Servisler",
      href: "/services",
    },
    {
      id: 4,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      text: "Hekimler",
      href: "/dentists",
    },
    {
      id: 6,
      text: "Portfolyo",
      href: "/portfolio",
    },
  ];
  return (
    <div className="w-full pt-10 bg-[#F6F9F9]">
      <div className="w-3/5 mx-auto grid grid-cols-3 border-b border-[#00BCD5] pb-20">
        <div className="flex flex-col items-start pr-10">
          <img loading="lazy" className="w-36" src="/logo.webp" />
          <p className="text-gray-500 mt-8">
            Düzenli diş muayeneleri, sağlıkla ilgili bazı sorunların erken uyarı
            işaretlerinin tespit edilmesine yardımcı olur. Diş hekimlerinizi
            düzenli olarak ziyaret edin ve sağlıklı kalın.
          </p>
        </div>
        <div className="text-black flex flex-col items-center">
          <p className="font-semibold text-lg">
            Kullanışlı <span className="text-[#00BCD5]">Bağlantılar</span>
          </p>
          <div className="grid grid-cols-2 mt-4">
            {nav.map((item) => (
              <li className="py-2 text-gray-500 cursor-pointer">{item.text}</li>
            ))}
          </div>
        </div>
        <div className="text-gray-500 flex flex-col items-end">
          <p className="font-semibold text-lg text-[#00BCD5]">Adresimiz</p>
          <p className="mt-2">64C East Crest, Melane Plaza,</p>
          <p>DanyBoyle, TT 33546</p>
          <p className="font-semibold text-lg mt-5 text-black">İletişim</p>
          <p className="mt-1">0500 000 00 00</p>
        </div>
      </div>
      <p className="text-black text-center mt-10 text-3xl font-light">
        <span className="text-[#00BCD5] font-semibold">Bülten </span>Aboneliği
      </p>
      <div className="w-1/4 h-12 mx-auto mt-5 relative">
          <MdEmail color="#00BCD5" size={22} className="absolute right-0 top-3" />
        <input
          type="text"
          placeholder="E-mail"
          className="w-full h-full bg-transparent border-b-2 pb-1 pl-2 outline-none text-black border-[#00BCD5]"
        />
      </div>
      <div className="w-full h-16 bg-gray-900 mt-10 flex items-center justify-center">
          <p className="text-sm text-gray-300">Copyright © 2024 Adıgüzel Teknoloji</p>
      </div>
    </div>
  );
};

export default Footer;
