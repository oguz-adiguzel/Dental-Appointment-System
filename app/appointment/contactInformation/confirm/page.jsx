"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTooth } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const saat = Cookies.get("time");
  const tarih = Cookies.get("date");
  const hekim = Cookies.get("dentist");
  const departman = Cookies.get("department");
  const name = Cookies.get("name");
  const surName = Cookies.get("surName");
  const phone = Cookies.get("phone");
  const email = Cookies.get("email");
  const address = Cookies.get("address");
  const message = Cookies.get("message");

  const [doctorList, setDoctorList] = useState();
  const [doctor, setDoctor] = useState();
  const [code, setCode] = useState(false);
  const [inputCode, setInputCode] = useState();
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  const getAllDoctors = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        }
      );

      setDoctorList(response.data.doctors);
    } catch (error) {
      console.log("error", error);
    }
  };

  const findDoctor = () => {
    const d = doctorList?.filter((item) => item._id === hekim);
    if (d) {
      setDoctor(d[0]?.name);
    }
  };

  const makeAppointment = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/book-appointment`,
        {
          patientName: name,
          patientSurName: surName,
          date: tarih,
          timeSlot: saat,
          doctorId: hekim,
          patientEmail: email,
          patientPhone: phone,
          patientAddress: address,
          patientMessage: message,
          patientDepartment: departman,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        }
      );
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
      setConfirm(true);
      Cookies.remove("address");
      Cookies.remove("date");
      Cookies.remove("dentist");
      Cookies.remove("department");
      Cookies.remove("email");
      Cookies.remove("message");
      Cookies.remove("name");
      Cookies.remove("phone");
      Cookies.remove("surName");
      Cookies.remove("time");
    } catch (error) {
      console.log("error", error);
      toast.error("Hata oluştu", {
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

  const sendCode = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/send-code`,
        {
          email: email,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        }
      );

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
    } catch (error) {
      console.log("error", error);
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/verify-code`, 
        {
          email: email,
          code: inputCode,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        },
      );
      if (response) {
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
        setCode(true);
      } else {
        toast.warn(response.data.message, {
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
    } catch (error) {
      console.log("error", error);
      toast.error("Hata Oluştu", {
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

  useEffect(() => {
    findDoctor();
  }, [doctorList]);

  useEffect(() => {
    getAllDoctors();
    if (
      (saat,
      tarih,
      hekim,
      departman,
      name,
      surName,
      phone,
      email,
      address,
      message)
    )
      sendCode();
  }, []);

  useEffect(() => {
    if (
      (!saat,
      !tarih,
      !hekim,
      !departman,
      !name,
      !surName,
      !phone,
      !email,
      !address,
      !message)
    ) {
      router.push("/appointment");
    }
  }, []);

  return (
    <>
      <div className="w-full bg-white text-black">
        <ToastContainer />
        <div className="w-full bg-[#F2F2F2] py-11">
          <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
            <p className="font-bold text-2xl">ONLİNE RANDEVU</p>
            <p className="text-xs mt-2">
              Anasayfa / <span className="text-gray-400">Online Randevu</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-3/5 mx-auto grid grid-cols-3 mt-10">
          <div className="flex space-x-4 border-t-2 border-gray-200 py-4 px-2">
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
              <p className="text-xl font-light">
                İletişim Bilgilerini Doldurun
              </p>
              <p className="text-sm mt-2 font-light">
                Kişisel bilgilerinizi ve ihtiyaç duyulan tedavinizin kısa
                açıklamasını girin
              </p>
            </div>
          </div>
          <div className="flex space-x-4 border-t-2 border-[#00BCD5] py-4 px-2">
            <p className="text-5xl font-extralight">3</p>
            <div>
              <p className="text-xl font-light">Ayrıntıları Kontrol Et</p>
              <p className="text-sm mt-2 font-light">
                Seçilen personel, hizmet ve kişisel ayrıntılarla ilgili
                ayrıntıları okuyun
              </p>
            </div>
          </div>
        </div>

        {code === false && (
          <div className="w-full py-20 flex flex-col items-center">
            <p className="text-center text-xl font-bold">
              Email Adresinize Gelen Kodu Doğrulayınız
            </p>
            <p className="text-center text-sm">Doğrulama kodunu giriniz</p>
            <div className="">
              <input
                className="w-60 h-10 mt-3 border"
                type="text"
                onChange={(e) => setInputCode(e.target.value)}
              />
              <button
                onClick={() => verifyCode()}
                className="h-10 w-20 bg-blue-400 text-white"
              >
                Onayla
              </button>
            </div>
          </div>
        )}

        {code === true && confirm === false && (
          <div className="w-3/5 mx-auto py-10">
            <p className="mt-10 text-xl font-light">Ayrıntıları Onayla</p>
            <div className="w-full grid grid-cols-2 gap-x-8 mt-6">
              <div className="border py-10 flex flex-col justify-center space-y-4 pl-10">
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Departman:</p>
                  <p className="ml-2">{departman}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Doktor:</p>
                  <p className="ml-2">{doctor ? doctor : ""}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Tarih:</p>
                  <p className="ml-2">{tarih}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Saat:</p>
                  <p className="ml-2">{saat}</p>
                </div>
              </div>
              <div className="border py-10 flex-col justify-center space-y-4 pl-10">
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">İsim:</p>
                  <p className="ml-2">
                    {name} {surName}
                  </p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Telefon:</p>
                  <p className="ml-2">{phone}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Email:</p>
                  <p className="ml-2">{email}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Adres:</p>
                  <p className="ml-2">{address}</p>
                </div>
                <div className="flex">
                  <FaTooth size={26} color="gray" />
                  <p className="text-gray-400 font-light ml-1">Mesaj:</p>
                  <p className="ml-2">{message}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                onClick={() => makeAppointment()}
                className="px-4 py-2 border-2 border-gray-700 hover:border-[#7AE9F8] duration-300 hover:text-[#419eaa]"
              >
                Onayla Randevu Oluştur
              </button>
            </div>
          </div>
        )}
        {confirm === true && (
          <div className="w-3/5 mx-auto flex flex-col items-center py-44">
            <div>
              <GiConfirmed size={60} color="green" />
            </div>
            <p className="mt-5 font-bold">
              Randevunuz Başarılı Bir Şekilde Oluşturuldu
            </p>
            <p className="text-gray-500">
              Randevu saatinizden 15 dk önce klinikte bulunmanız önemle rica
              olunur.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
