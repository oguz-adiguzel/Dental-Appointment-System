"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as XLSX from "xlsx";
import { LuFileSearch } from "react-icons/lu";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DOMPurify from "dompurify";
import parse from "html-react-parser";


const Doctors = () => {
  
  const [doctors, setDoctors] = useState();
  const [open, setOpen] = useState(false);
  const [doctorAppintment, setDoctorAppointment] = useState([]);

  const cleanText = (text) => {
    const cleanHTML = DOMPurify.sanitize(text);
    const newText = parse(cleanHTML);
    return newText;
  };

  const getAppointment = async (id) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/getAppointment`,
        {
          id: id,
        }
      );
      setDoctorAppointment((prevItems) => [
        ...prevItems,
        response.data.appointment,
      ]);
    } catch (error) {
        console.log('error',error);
        
    }
  };

  const onOpenModal = async (id) => {
    setOpen(true);
    const doctor = doctors.find((item) => item._id === id);
    let appointmentArray = doctor.appointments;
    console.log("array", appointmentArray);
    appointmentArray.forEach((item) => {
      getAppointment(item);
    });
  };
  const onCloseModal = () => {
    setOpen(false)
    setDoctorAppointment([])
  };

  const getAllDoctors = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors/`);

      setDoctors(response.data.doctors);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const imageBodyTemplate = (doctors) => {
    return (
      <img src={doctors.photoUrl} className="w-20 h-20 object-cover shadow-2 border-round" />
    );
  };

  const detailBodyTemplate = (doctors) => {
    return (
      <button
        onClick={() => onOpenModal(doctors._id)}
        className="text-black w-full flex justify-center"
      >
        <LuFileSearch size={25} />
      </button>
    );
  };

  const experienceCol1 = (doctors) => {
    return cleanText(doctors.certificates)
  };
  const experienceCol2 = (doctors) => {
    return cleanText(doctors.awards)
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(doctors);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dental Hekim Listesi");
    XLSX.writeFile(workbook, "dental_hekim_listesi.xlsx");
  };


  return (
    <div className="w-full">
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-full py-10">
        <DataTable value={doctorAppintment} tableStyle={{ minWidth: "50rem" }}>
          <Column field="patientName" header="İsim"></Column>
          <Column field="patientSurName" header="Soyisim"></Column>
          <Column field="patientPhone" header="Telefon"></Column>
          <Column field="date" header="Tarih"></Column>
          <Column field="timeSlot" header="Saat"></Column>
        </DataTable>
        </div>
      </Modal>
      <div className="w-[90%] mx-auto h-[800px] bg-white overflow-scroll py-10 px-5 mt-10 rounded-xl">
        <div className="flex items-center justify-end pb-5">
          <button
            onClick={() => exportToExcel()}
            className="text-sm px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-white hover:text-blue-500 border border-blue-500 duration-500"
          >
            Excel İndir
          </button>
        </div>

        <DataTable value={doctors} tableStyle={{ minWidth: "50rem" }}>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="name" header="İsim"></Column>
          <Column field="department" header="Departman"></Column>
          <Column body={experienceCol1} header="Sertifikalar"></Column>
          <Column body={experienceCol2} header="Ödüller"></Column>
          <Column field="_id" header="Detay" body={detailBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Doctors;
