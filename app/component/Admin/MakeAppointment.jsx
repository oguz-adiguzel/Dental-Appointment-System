"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MakeAppointment = ({ modal, onValueChange }) => {
  const [selectedDepartment, setSelectedDepatment] = useState();
  const [selectedDentist, setSelectedDentist] = useState();
  const [doctorList, setDoctorList] = useState();
  const [date, setDate] = useState();
  const [availableTime, setAvailableTime] = useState();
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTime, setIsTime] = useState(false);
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [message, setMessage] = useState();

  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
  };

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

  const checkAvailability = async () => {
    try {
      if ((selectedDepartment, selectedDentist)) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/doctors/check-availability-admin`,
          {
            doctorId: selectedDentist,
            date: date,
          },
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
            },
          },
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
        setIsTime(true);
      } else {
        toast.warn("Lütfen seçim yapınız", {
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
      toast.error("Beklenmedik bir hata oluştu", {
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

  const makeAppointment = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/book-appointment`,
        {
          patientName: name,
          patientSurName: surName,
          date: date,
          timeSlot: selectedTime,
          doctorId: selectedDentist,
          patientEmail: email,
          patientPhone: phone,
          patientAddress: address,
          patientMessage: message,
          patientDepartment: selectedDepartment,
          confirm: true,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        },
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
      handleChange();
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

  const handleChange = () => {
    onValueChange(false);
  };

  useEffect(() => {
    getAllDoctors();
    getCurrentDate();
  }, []);

  return (
    <div className="w-full text-black relative">
      <div className="w-full flex justify-end absolute right-2">
        <button
          onClick={() => handleChange()}
          className="right-0 bg-red-600 text-white text-lg px-2 rounded-full"
        >
          x
        </button>
      </div>
      <ToastContainer />
      <p className="text-center text-xl">Günlük Randevu Oluştur</p>
      <div className="w-3/5 mx-auto grid grid-cols-2 gap-x-5 mt-8">
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
      </div>
      {!availableTime && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => checkAvailability()}
            className="border-2 border-gray-700 px-3 text-sm py-1 rounded-full hover:bg-gray-700 hover:text-white duration-300"
          >
            Müsaitlik Durumunu Kontrol Et
          </button>
        </div>
      )}{" "}
      {isTime && (
        <>
          <p className="pl-8 mt-10 text-lg">Saat Seçiniz</p>
          <div className="flex items-center space-x-5 pl-8 mt-3">
            {availableTime?.map((item, index) => (
              <button
                onClick={() => {
                  setSelectedTime(item);
                }}
                key={index}
                className={`${
                  item === selectedTime ? "bg-blue-400" : "bg-white"
                } px-4 py-1 border-2 border-blue-400 rounded-full text-sm text-blue-800 `}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
      {selectedTime && (
        <div className="w-3/4 mx-auto">
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
              Ziyaret nedenini hakkında kısa bir açıklama
            </p>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-5 border-b outline-none h-48 mt-5 focus:border-gray-700*"
              placeholder="Mesaj"
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <button
              onClick={() => makeAppointment()}
              className="px-6 py-2 border-2 border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:text-white duration-500"
            >
              Randevu Oluştur
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeAppointment;
