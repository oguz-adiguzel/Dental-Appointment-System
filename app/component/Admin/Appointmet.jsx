"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import * as XLSX from "xlsx";

const Appointmet = () => {
  
  const [appointmetList, setAppointmentList] = useState();
  const [doctors, setDoctors] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [appointmentFilter, setAppointmentFilter] = useState("all");
  const [loading, setLoading] = useState(true);

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

      setFilteredData(updatedData);
    }
  }, [doctors]);

  const getAppointmentList = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/getAllAppointment`
      );
      setAppointmentList(response.data.appointments);
      setLoading(false)
    } catch (error) {
      console.log("error", error);
    }
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
    getAppointmentList();
  }, []);

  useEffect(()=>{
    getAllDoctors();
  },[appointmetList])

  useEffect(() => {
    const now = new Date().toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    let filtered = appointmetList;

    if (appointmentFilter === "past") {
      // Geçmiş dataları filtreleme
      filtered = appointmetList.filter((item) => item.date < now);
    } else if (appointmentFilter === "future") {
      // Gelecek dataları filtreleme
      filtered = appointmetList.filter((item) => item.date > now);
    } else if (appointmentFilter === "now") {
      filtered = appointmetList.filter((item) => item.date == now);
    } else if (appointmentFilter === "all") {
      // Tüm datayı göster
      filtered = appointmetList;
    }

    filtered = filtered?.filter(
      (item) =>
        item.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.patientSurName?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.date.includes(searchText) ||
        item.patientPhone?.includes(searchText) ||
        item.doctorId.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchText, appointmetList, appointmentFilter]);

  const exportToExcel = () => {
    // Workbook ve Sheet oluşturma
    const worksheet = XLSX.utils.json_to_sheet(appointmetList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dental Hasta Randeu Listesi");

    // Dosyayı indir
    XLSX.writeFile(workbook, "dental_hasta_randevu_listesi.xlsx");
  };

  return (
    <>
      {loading === false ? (
        <div className="w-full">
          <div className="w-[90%] mx-auto mt-10">
            <input
              className="w-full h-16 rounded-xl text-lg px-4 text-black"
              placeholder="Randevu Ara"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="w-[90%] mx-auto h-[800px] bg-white overflow-scroll py-10 px-5 mt-10 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="text-black space-x-5 pb-4">
                <button
                  onClick={() => setAppointmentFilter("all")}
                  className={`px-4 py-1 border-2 border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:text-white duration-500 ${
                    appointmentFilter === "all" ? "bg-gray-700 text-white" : ""
                  }`}
                >
                  Tümü
                </button>
                <button
                  onClick={() => setAppointmentFilter("past")}
                  className={`px-4 py-1 border-2 border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:text-white duration-500 ${
                    appointmentFilter === "past" ? "bg-gray-700 text-white" : ""
                  }`}
                >
                  Geçmiş Randevular
                </button>
                <button
                  onClick={() => setAppointmentFilter("future")}
                  className={`px-4 py-1 border-2 border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:text-white duration-500 ${
                    appointmentFilter === "future"
                      ? "bg-gray-700 text-white"
                      : ""
                  }`}
                >
                  Gelecek Randevular
                </button>
                <button
                  onClick={() => setAppointmentFilter("now")}
                  className={`px-4 py-1 border-2 border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:text-white duration-500 ${
                    appointmentFilter === "now" ? "bg-gray-700 text-white" : ""
                  }`}
                >
                  Günlük Randevular
                </button>
              </div>
              <button
                onClick={() => exportToExcel()}
                className="text-sm px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-white hover:text-blue-500 border border-blue-500 duration-500"
              >
                Excel İndir
              </button>
            </div>

            <DataTable value={filteredData} tableStyle={{ minWidth: "50rem" }}>
              <Column field="patientName" header="İsim"></Column>
              <Column field="patientSurName" header="Soysim"></Column>
              <Column field="patientDepartment" header="Departman"></Column>
              <Column field="patientEmail" header="Email"></Column>
              <Column field="patientPhone" header="Telefon"></Column>
              <Column field="patientAddress" header="Adres"></Column>
              <Column field="date" header="Tarih"></Column>
              <Column field="timeSlot" header="Saat"></Column>
              <Column field="doctorId" header="Hekim"></Column>
            </DataTable>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <img src="loader1.webp" />
        </div>
      )}
    </>
  );
};

export default Appointmet;
