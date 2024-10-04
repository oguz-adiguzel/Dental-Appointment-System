"use client";
import {
  addAddress,
  addEmail,
  addMessage,
  addName,
  addPhone,
  addSurname,
} from "@/app/features/appointment/appointSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const page = () => {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [message, setMessage] = useState();

  const dispatch = useDispatch();
  const router = useRouter();

  const next = async () => {
    if ((name, surName, phone, email, address, message)) {
      await dispatch(addName(name));
      await dispatch(addSurname(surName));
      await dispatch(addPhone(phone));
      await dispatch(addEmail(email));
      await dispatch(addAddress(address));
      await dispatch(addMessage(message));
      router.push("/appointment/contactInformation/confirm");
    } else {
      alert("Alanları Doldurunuz");
    }
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-3/5 mx-auto">
          <p className="font-bold text-2xl">ONLİNE RANDEVU</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Online Randevu</span>
          </p>
        </div>
      </div>

      <div className="w-3/5 mx-auto grid grid-cols-3 mt-10">
        <div className="flex space-x-4 border-t-2 border-gray-200 py-4 px-2">
          <p className="text-5xl font-extralight">1</p>
          <div>
            <p className="text-xl font-light">Tarih / Saat Aralığını Seçin</p>
            <p className="text-sm mt-2 font-light">
              Zaman aralığıyla birlikte bölüm türünü ve personelinizi seçin
            </p>
          </div>
        </div>
        <div className="flex space-x-4 border-t-2 border-[#00BCD5] py-4 px-2">
          <p className="text-5xl font-extralight">2</p>
          <div>
            <p className="text-xl font-light">İletişim Bilgilerini Doldurun</p>
            <p className="text-sm mt-2 font-light">
              Kişisel bilgilerinizi ve ihtiyaç duyulan tedavinizin kısa
              açıklamasını girin
            </p>
          </div>
        </div>
        <div className="flex space-x-4 border-t-2 border-gray-200 py-4 px-2">
          <p className="text-5xl font-extralight">2</p>
          <div>
            <p className="text-xl font-light">Ayrıntıları Kontrol Et</p>
            <p className="text-sm mt-2 font-light">
              Seçilen personel, hizmet ve kişisel ayrıntılarla ilgili
              ayrıntıları okuyun
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/5 mx-auto py-16">
        <p className="font-extralight text-gray-400">Tüm alanlar zorunludur</p>
        <p className="mt-10 text-2xl font-light">İletişim Bilgileri</p>
        <div className="w-full grid grid-cols-2 gap-x-9 pt-10">
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b pb-4 pt-2 outline-none focus:border-gray-700 pl-5"
            type="text"
            placeholder="İsim"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            className="w-full border-b pb-4 pt-2 outline-none focus:border-gray-700 pl-5"
            type="text"
            placeholder="Soyisim"
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-9 pt-10">
          {/* <input
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-b pb-4 pt-2 outline-none focus:border-gray-700 pl-5"
            type="tel"
            placeholder="Telefon (555-555-5555)"
          /> */}
          
              <PhoneInput
                country={"tr"}
                value={phone}
                onChange={setPhone}
                preferredCountries={["tr"]}
                placeholder="Telefon Numaranızı Giriniz"
                inputStyle={{ width: "100%" }}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b pb-4 pt-2 outline-none focus:border-gray-700 pl-5"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full pt-10">
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border-b pb-4 pt-2 outline-none focus:border-gray-700 pl-5"
            type="text"
            placeholder="Adres"
          />
        </div>
        <div className="w-full pt-10">
          <p className="text-sm text-gray-400">
            Ziyaret nedeniniz hakkında kısa bir açıklama
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-5 border-b outline-none h-48 mt-5 focus:border-gray-700*"
            placeholder="Mesaj"
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => next()}
            className="px-5 py-2 border-2 border-gray-700 mt-8 hover:bg-[#00BCD5] hover:text-white hover:border-[#00BCD5] duration-500"
          >
            Ayrıntıları Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
