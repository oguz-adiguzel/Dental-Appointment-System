"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminAuth } from "../middleware/adminAuth";

const page = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  adminAuth();

  const login = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          userName: userName,
          password: password,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        },
      );

      if (response) {
        Cookies.set("tokenKey", response.data.token);
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
        router.push("admin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
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
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center">
      <ToastContainer />
      <div className="w-1/2 h-[600px] bg-white text-black rounded-xl grid grid-cols-5">
        <div className="col-span-2 h-full rounded-l-xl">
          <img
            className="w-full h-full rounded-l-xl"
            src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="col-span-3 p-8">
          <img className="w-64" src="logo.webp" />

          <p className="text-2xl text-gray-500 mt-8">
            <span className="font-bold text-black">Dental</span> Yönetim
            Paneline Hoşgeldiniz
          </p>
          <p className="text-gray-600 pr-56 text-sm mt-3">
            Tekrar hoş geldiniz! Bugünün randevularını görüntülemek için
            hesabınıza giriş yapın:
          </p>
          <div className="mt-10 flex items-center">
            <MdOutlineEmail color="gray" size={26} />
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Kullanıcı adı"
              className="w-96 py-3 border-b-2 px-4 outline-none"
            />
          </div>
          <div className="mt-5 flex items-center">
            <RiLockPasswordLine color="gray" size={26} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Parola"
              className="w-96 py-3 border-b-2 px-4 outline-none"
            />
          </div>
          <div className="mt-8 flex justify-end pr-24">
            <button
              onClick={() => login()}
              className="px-8 py-3 rounded-full bg-[#999EE3] text-white text-sm"
            >
              Giriş Yap
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-20">
            Copyright © 2024 Adıgüzel Teknoloji
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
