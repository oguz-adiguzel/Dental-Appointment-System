"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { CiCalendarDate, CiImageOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const DoctorManagement = () => {

  const [doctorList, setDoctorList] = useState();
  const [open, setOpen] = useState(false);
  const [openDoctor, setOpenDoctor] = useState(false);
  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  const [experience, setExperience] = useState("");
  const [certificates, setCertificates] = useState("");
  const [awards, setAwards] = useState("");
  const [photoUrl, setPhotoUrl] = useState();
  const [doctorId, setDoctorId] = useState();
  const [doctorName, setDoctorName] = useState()
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getAllDoctors = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors/`);

      setDoctorList(response.data.doctors);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const addDoctor = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("department", department);
    formData.append("experience", experience);
    formData.append("certificates", certificates);
    formData.append("awards", awards);
    formData.append("image", photoUrl);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors`,
        formData
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
      onCloseModal();
      getAllDoctors();
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

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const onCloseDoctorModal = () => {
    setOpenDoctor(false);
  };

  const onOpenDoctorModal = () => {
    setOpenDoctor(true);
  };

  console.log('selectedDate',selectedDate );

  const closeDate = async() =>{
    try{
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/doctors/closeDate`,{
        doctorId:doctorId,
        date:selectedDate
      })
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
      onCloseDoctorModal()

    }catch(error){
      console.log('error', error);
      toast.error('Hata oluştu', {
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
  }
  

  return (
    <div className="w-full text-black">
      <ToastContainer />
      <Modal open={openDoctor} onClose={onCloseDoctorModal} center>
        <div className="w-[800px] h-96 py-10 text-black flex flex-col items-center">
          <p className="text-xl font-semibold">Dt. {doctorName} İçin Randevu Günü Kapatma</p>
          <p className="text-sm text-gray-500">Seçilecek tarihte bu doktora randevu oluşturulması engellenecektir.</p>
          <div className="relative mt-7">
            <DatePicker
              className="w-full py-4 px-3 font-light border outline-none"
              selected={selectedDate}
              onChange={(date) =>
                setSelectedDate(date.toISOString().split("T")[0])
              }
              minDate={new Date()}
              filterDate={isWeekday}
              dateFormat="dd-MM-yyyy"
            />
            <div className="absolute right-2 top-4">
              <CiCalendarDate size={20} />
            </div>
          </div>
          <button onClick={()=>closeDate()} className="mt-10 border-2 border-gray-700 text-sm px-5 py-1 rounded-full">Gün Kapat</button>
        </div>
      </Modal>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-[750px] py-10 px-7 text-black">
          <p className="text-black text-lg">Doktor Ekle</p>
          <div className="flex justify-between items-center space-x-7 mt-5">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Doktor İsmi"
              className="border-b-2 w-full px-3 py-2"
            />
            <input
              onChange={(e) => setDepartment(e.target.value)}
              type="text"
              placeholder="Doktor Departmanı"
              className="border-b-2 w-full px-3 py-2"
            />
          </div>
          <div className="w-full bg-white mt-5 text-black">
            <p className="text-black">Deneyim</p>
            <ReactQuill
              theme="snow"
              value={experience}
              onChange={setExperience}
            />
          </div>
          <div className="w-full bg-white mt-5 text-black">
            <p className="text-black">Sertifikalar</p>
            <ReactQuill
              theme="snow"
              value={certificates}
              onChange={setCertificates}
            />
          </div>
          <div className="w-full bg-white mt-5 text-black">
            <p className="text-black">Ödüller</p>
            <ReactQuill theme="snow" value={awards} onChange={setAwards} />
          </div>
          <div className="w-2/3 mx-auto mt-8">
            <p className="font-semibold text-black">Photo</p>
            <div className="relative">
              <div className="absolute top-5 left-2">
                <CiImageOn size={21} color="white" />
              </div>
              <input
                onChange={(e) => setPhotoUrl(e.target.files[0])}
                className="w-full py-3 pl-10 bg-[#222736] text-gray-300 rounded-md text-xs mt-2"
                type="file"
              />
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <button
              onClick={() => addDoctor()}
              className="text-sm px-6 py-2 border-2 border-gray-700 rounded-full text-black hover:bg-gray-700 hover:text-white duration-500"
            >
              Hekim Ekle
            </button>
          </div>
        </div>
      </Modal>
      <div className="w-[90%] mx-auto bg-white flex justify-between items-center mt-10 rounded-xl px-6 py-5">
        <p className="text-xl font-semibold">Hastane Hekim Listesi</p>
        <button
          onClick={() => onOpenModal()}
          className="px-4 py-1 text-sm border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white duration-500"
        >
          Hekim Ekle
        </button>
      </div>
      <div className="w-[90%] mx-auto px-6 bg-white py-10 rounded-xl mt-5 grid grid-cols-4 gap-4">
        {doctorList?.map((item) => (
          <div className="py-5 border">
            <p className="text-center text-xl font-semibold">{item.name}</p>
            <p className="text-center text-sm text-gray-400">
              {item.department}
            </p>
            <div className="w-2/3 h-60 mx-auto bg-red-500 mt-4">
              <img className="w-full h-full object-cover" src={item.photoUrl} />
            </div>
            <div className="flex justify-center space-x-5 mt-5">
              <button
                onClick={() => {
                  onOpenDoctorModal();
                  setDoctorId(item._id);
                  setDoctorName(item.name)
                }}
                className="text-sm border-2 border-green-600 px-2 py-1 text-green-600 rounded-full hover:bg-green-600 hover:text-white duration-500"
              >
                Gün Kapat
              </button>
              <button className="text-sm border-2 border-red-600 px-6 py-1 text-red-600 rounded-full hover:bg-red-600 hover:text-white duration-500">
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorManagement;
