"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDate,
  addDentist,
  addDepartment,
  addTime,
} from "../features/appointment/appointSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const { departman, hekim, tarih, saat } = useSelector(
    (store) => store.appointment
  );

  const [selectedDepartment, setSelectedDepatment] = useState();
  const [selectedDentist, setSelectedDentist] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState(null)
  const router = useRouter();

  const dispatch = useDispatch();
  
  const [availableTime, setAvailableTime] = useState();
  const [doctorList, setDoctorList] = useState();

  const next = async(item) => {
    if ((selectedDate, selectedDentist, selectedDepartment, selectedTime)) {
      await dispatch(addDepartment(selectedDepartment));
      await dispatch(addDentist(selectedDentist));
      await dispatch(addDate(selectedDate));
      await dispatch(addTime(selectedTime));
        router.push('/appointment/contactInformation')
    } else {
      // alert("Seçim Yap");
      toast.warn('Lütfen seçim yapınız', {
        position: "top",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(()=>{
    if(selectedTime !== null) next()
  },[selectedTime])

  // console.log("tarih", selectedDate);

  const checkAvailability = async () => {
    try {
      if(selectedDepartment, selectedDentist, selectedDate){
        const response = await axios.post(
          "http://localhost:3001/doctors/check-availability",
          {
            doctorId:selectedDentist,
            date: selectedDate,
          }
        );
        setAvailableTime(response.data.availableSlots);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }else{
        toast.warn('Lütfen seçim yapınız', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      
    } catch (error) {
      console.log("error", error);
      toast.error('Beklenmedik bir hata oluştu', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const getAllDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/doctors/");

      setDoctorList(response.data.doctors);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const doctorFindName = () =>{
    const doctor = doctorList?.find((item)=> item._id === selectedDentist)
    return doctor.name
  }

  // console.log("time", selectedTime);

  return (
    <div className="w-full bg-white text-black">
      <ToastContainer />
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-3/5 mx-auto">
          <p className="font-bold text-2xl">ONLİNE RANDEVU</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Online Randevu</span>
          </p>
        </div>
      </div>
      <div className="w-3/5 mx-auto grid grid-cols-3 mt-10">
        <div className="flex space-x-4 border-t-2 border-[#00BCD5] py-4 px-2">
          <p className="text-5xl font-extralight">1</p>
          <div>
            <p className="text-xl font-light">Tarih / Saat Aralığını Seçin</p>
            <p className="text-sm mt-2 font-light">
              Zaman aralığıyla birlikte bölüm türünü ve personelinizi seçin
            </p>
          </div>
        </div>
        <div className="flex space-x-4 border-t-2 border-gray-200 py-4 px-2">
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

      <div className="w-3/5 mx-auto mt-16">
        <p className="font-extralight text-gray-400">Tüm alanlar zorunludur</p>
        <p className="text-xl font-extralight mt-10">
          Departman ve Tarih Seçin
        </p>
        <div className="h-0.5 w-36 bg-[#ACEEFE] mt-3"></div>
        <div className="w-full grid grid-cols-3 gap-x-5 py-10">
          <select
            onChange={(e) => setSelectedDepatment(e.target.value)}
            className="border w-full py-4 px-2 font-light outline-none"
          >
            <option value="">Departman Seçiniz</option>
            <option value="Genel Muayene">Genel Muayene</option>
            <option value="İmplant Sabitleme">İmplant Sabitleme</option>
            <option value="Kron ve Köprü Onarımı">Kron ve Köprü Onarımı</option>
            <option value="Kanal Tedavisi">Kanal Tedavisi</option>
            <option value="Diş Dolgusu">Diş Dolgusu</option>
          </select>
          <select
            onChange={(e) => setSelectedDentist(e.target.value)}
            className="border w-full py-4 px-2 font-light outline-none"
          >
            <option>Hekim Seçiniz</option>
            {doctorList?.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
          <input
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full py-4 font-light border-b outline-none"
            type="date"
          />
        </div>
        <div className="flex justify-center pt-10 pb-20">
          <button
            onClick={() => checkAvailability()}
            className="px-3 py-3 border-2 border-gray-700 hover:bg-[#00BCD5] hover:border-[#00BCD5] duration-300 hover:text-white"
          >
            Müsaitlik Durumunu Kontrol Et
          </button>
        </div>
      </div>

      {availableTime && (
        <div className="w-3/5 mx-auto py-16">
          <p className="text-xl font-extralight mt-10">Saat Seçininiz</p>
          <div className="h-0.5 w-36 bg-[#ACEEFE] mt-3"></div>
          <p className="mt-8 text-gray-700">Dt. {doctorFindName()}</p>
          <div className="w-full mt-4 grid grid-cols-12 gap-3">
            {availableTime.map((item, index) => (
              <button
                onClick={() => {
                  setSelectedTime(item)
                }}
                key={index}
                className={`bg-[#ACEEFE] ${selectedTime === item ? 'bg-[#21778d] text-white' : 'bg-[#ACEEFE]'} text-[#00BCD5] px-4 py-2 rounded-md hover:bg-[#00BCD5] hover:text-white duration-300`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
