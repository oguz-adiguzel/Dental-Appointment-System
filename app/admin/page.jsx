"use client";
import React, { useEffect, useState } from "react";
import Appointmet from "../component/Admin/Appointmet";
import AppointmentManage from "../component/Admin/AppointmentManage";
import Doctors from "../component/Admin/Doctors";
import DoctorManagement from "../component/Admin/DoctorManagement";
import { adminAuth } from "../middleware/adminAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Blogs from "../component/Admin/Blogs";
import BlogManagement from "../component/Admin/BlogManagement";

const page = () => {
  
  const [component, setComponent] = useState("appointment");
  const router = useRouter();
  adminAuth();

  const logOut = () => {
    Cookies.remove("tokenKey");
    router.push("/");
  };

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-2 h-screen py-10 bg-black flex flex-col items-center relative">
        <div className="flex justify-center items-center">
          <img className="w-64" src="admin-logo.png" />
        </div>
        <div className="flex flex-col w-full items-start">
          <button
            onClick={() => setComponent("appointment")}
            className={`py-3 w-5/6 mx-auto ${
              component === "appointment" ? "bg-[#66666642]" : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}
          >
            Randevular
          </button>
          <button
            onClick={() => setComponent("appointmentManagement")}
            className={`py-3 w-5/6 mx-auto ${
              component === "appointmentManagement"
                ? "bg-[#66666642]"
                : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}
          >
            Randevu Yönetimi
          </button>
          <button
            onClick={() => setComponent("doctors")}
            className={`py-3 w-5/6 mx-auto ${
              component === "doctors" ? "bg-[#66666642]" : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}
          >
            Hekimler
          </button>
          <button
            onClick={() => setComponent("doctorManagement")}
            className={`py-3 w-5/6 mx-auto ${
              component === "doctorManagement"
                ? "bg-[#66666642]"
                : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}
          >
            Hekim Yönetimi
          </button>
          <button 
            onClick={() => setComponent("blogs")}
            className={`py-3 w-5/6 mx-auto ${
              component === "blogs"
                ? "bg-[#66666642]"
                : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}>
            Bloglar
          </button>
          <button  onClick={() => setComponent("blogManagement")}
            className={`py-3 w-5/6 mx-auto ${
              component === "blogManagement"
                ? "bg-[#66666642]"
                : "bg-[#6666661f]"
            } hover:bg-[#66666642] rounded-md mt-10`}>
            Blog Yönetimi
          </button>
        </div>
        <button
          onClick={() => logOut()}
          className="absolute bottom-5 bg-red-500 text-white px-3 py-1 text-sm rounded-full"
        >
          Çıkış Yap
        </button>
      </div>

      <div className="col-span-10 h-screen bg-gray-100">
        {component === "appointment" && <Appointmet />}
        {component === "appointmentManagement" && <AppointmentManage />}
        {component === "doctors" && <Doctors />}
        {component === "doctorManagement" && <DoctorManagement />}
        {component === "blogs" && <Blogs />}
        {component === "blogManagement" && <BlogManagement />}
      </div>
    </div>
  );
};

export default page;
