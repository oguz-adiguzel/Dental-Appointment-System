import React from "react";

const HoursSection = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1">
      <div className="flex lg:py-40 py-20 bg-[#F6F9F9]">
        <div className="w-2/5 hidden lg:block"></div>
        <div className="w-full lg:w-3/5 lg:pr-20 px-5 lg:px-0">
          <p className="text-3xl">
            Çalışma{" "}
            <span className="text-[#00BCD5] font-bold">Saatlerimiz</span>
          </p>
          <div className="w-full flex justify-between border-b-2 mt-8">
            <p className="font-bold">Pazartesi:</p>
            <p className="text-gray-400">10:00 – 16:00</p>
          </div>
          <div className="w-full flex justify-between border-b-2 mt-4">
            <p className="font-bold">Salı:</p>
            <p className="text-gray-400">10:00 – 16:00</p>
          </div>
          <div className="w-full flex justify-between border-b-2 mt-4">
            <p className="font-bold">Çarşamba:</p>
            <p className="text-gray-400">10:00 – 16:00</p>
          </div>
          <div className="w-full flex justify-between border-b-2 mt-4">
            <p className="font-bold">Perşembe:</p>
            <p className="text-gray-400">10:00 – 16:00</p>
          </div>
          <div className="w-full flex justify-between border-b-2 mt-4">
            <p className="font-bold">Cuma:</p>
            <p className="text-gray-400">10:00 – 16:00</p>
          </div>
          <div className="w-full flex justify-between border-b-2 mt-4">
            <p className="font-bold">Cumartesi:</p>
            <p className="text-gray-400">10:00 – 14:00</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ACEEFE] py-20 lg:py-40 px-5 lg:px-0 lg:pl-24 flex flex-col">
        <p className="text-3xl">
          <span className="text-[#00BCD5] font-bold">Randevu</span> Alın
        </p>
        <input
          className="w-full lg:w-1/2 border-b-2 border-[#00BCD5] py-1 px-2 bg-transparent outline-none placeholder:text-gray-500 mt-5 hover:bg-[#CDF5FE] duration-300 focus:bg-[#CDF5FE]"
          type="text"
          placeholder="İsim"
        />
        <input
          className="w-full lg:w-1/2 border-b-2 border-[#00BCD5] py-1 px-2 bg-transparent outline-none placeholder:text-gray-500 mt-5 hover:bg-[#CDF5FE] duration-300 focus:bg-[#CDF5FE]"
          type="text"
          placeholder="Telefon"
        />
        <select className="w-full lg:w-1/2 mt-5 py-1 px-1 border-b-2 border-[#00BCD5] bg-transparent outline-none text-gray-500 hover:bg-[#CDF5FE] duration-300 focus:bg-[#CDF5FE]">
          <option>Servis Seçiniz</option>
          <option>Servis 1</option>
          <option>Servis 2</option>
          <option>Servis 3</option>
          <option>Servis 4</option>
        </select>
        <select className="w-full lg:w-1/2 mt-5 py-1 px-1 border-b-2 border-[#00BCD5] bg-transparent outline-none text-gray-500 hover:bg-[#CDF5FE] duration-300 focus:bg-[#CDF5FE]">
          <option>Doktor Seçiniz</option>
          <option>Servis 1</option>
          <option>Servis 2</option>
          <option>Servis 3</option>
          <option>Servis 4</option>
        </select>
        <input className="w-full lg:w-1/2 border-b-2 border-[#00BCD5] py-1 px-2 bg-transparent outline-none text-gray-500 mt-5 hover:bg-[#CDF5FE] duration-300 focus:bg-[#CDF5FE]" type="date" />
      </div>
    </div>
  );
};

export default HoursSection;
