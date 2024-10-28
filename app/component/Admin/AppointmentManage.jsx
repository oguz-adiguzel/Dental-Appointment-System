"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeAppointment from "./MakeAppointment";

const AppointmentManage = () => {

  const [appointmetList, setAppointmentList] = useState();
  const [doctorFilter, setDoctorFilter] = useState();
  const [filteredData, setFilteredData] = useState();
  const [doctors, setDoctors] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (doctors.length > 0) {
      // Türkiye tarih formatına çevirme fonksiyonu
      const formatDateToTR = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return new Date(dateString).toLocaleDateString("tr-TR", options);
      };

      // doctorId'yi doktorun adına çeviren fonksiyon
      const getDoctorNameById = (doctorId) => {
        const doctor = doctors.find((doc) => doc._id === doctorId);
        return doctor ? doctor.name : "Hekim Bulunamadı";
      };

      // data'yı güncelleme ve formatlama
      const updatedData = appointmetList?.map((item) => ({
        ...item,
        date: formatDateToTR(item.date),
        doctorId: getDoctorNameById(item.doctorId),
      }));

      setDoctorFilter(updatedData);
    }
  }, [doctors]);

  const getAppointmentList = async () => {
    if (!appointmetList) {
      try {
        const response = await axios.get(
          "http://localhost:3001/doctors/getAllAppointment"
        );
        setAppointmentList(response.data.appointments);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const getAllDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/doctors/");

      setDoctors(response.data.doctors);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleValueChange = (newValue) => {
    setModal(newValue);
  };

  useEffect(() => {
    getAllDoctors();
    getAppointmentList();
  }, []);

  useEffect(() => {
    const now = new Date().toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    let filtered = doctorFilter;

    filtered = doctorFilter?.filter((item) => item.date == now);

    setFilteredData(filtered);
  }, [doctorFilter]);

  const confirmAppointmet = async (propId, confirm) => {
    if (!confirm) {
      try {
        const response = await axios.post(
          "http://localhost:3001/doctors/confirm",
          {
            id: propId,
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
        getAllDoctors();
        getAppointmentList();
      } catch (error) {
        console.log("error", error);
      }
    } else {
      toast.warn("Randevu Onaylanmış", {
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

  return (
    <div className="w-full text-black">
      <ToastContainer />
      {modal === true ? (
        <div className="w-full h-screen bg-[#000000dc] py-10">
          <div className="w-[90%] mx-auto py-5 bg-white rounded-xl">
            <MakeAppointment modal={modal} onValueChange={handleValueChange} />
          </div>
        </div>
      ) : (
        <>
          <div className="w-[90%] mx-auto mt-14">
            <div className="flex items-center justify-between px-4">
              <p className="text-xl font-bold">Günlük Randevu Listesi</p>
              <button
                onClick={() => handleValueChange(true)}
                className="text-sm border-2 border-gray-700 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white duration-500"
              >
                Randevu Oluştur
              </button>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-4 bg-white py-10 rounded-xl grid grid-cols-4 gap-10 px-5">
            {filteredData?.length > 0 ? (
              filteredData?.map((item) => (
                <div
                  className={`py-6 border rounded-lg ${
                    item.confirm === true
                      ? "border-green-500"
                      : "border-gray-400"
                  }`}
                >
                  <div className="flex items-center space-x-1 justify-center font-bold">
                    <p>{item.patientName}</p>
                    <p>{item.patientSurName}</p>
                  </div>
                  <p className="text-center text-sm text-gray-500">
                    {item.patientPhone}
                  </p>
                  <p className="text-center font-medium mt-3">
                    {item.patientDepartment}
                  </p>
                  <p className="text-center text-blue-500">{item.doctorId}</p>
                  <div className="w-20 mx-auto h-8 bg-blue-400 flex justify-center items-center text-white text-sm rounded-full mt-2">
                    <p>{item.timeSlot}</p>
                  </div>
                  <div className="w-full flex justify-center mt-7 space-x-4">
                    <button
                      onClick={() => confirmAppointmet(item._id, item.confirm)}
                    >
                      <TiTick size={36} color="green" />
                    </button>
                    <button>
                      <TiTimes size={36} color="red" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-black">Bugüne ait randevu bulunmamaktadır</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AppointmentManage;
