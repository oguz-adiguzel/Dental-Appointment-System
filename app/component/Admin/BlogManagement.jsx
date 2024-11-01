"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { CiImageOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const BlogManagement = () => {
  
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [photo, setPhoto] = useState();

  const token = Cookies.get('tokenKey')

  console.log('token',token);
  

  const addBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("image", photo);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blog`, formData,{
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
        },
      },);
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
      console.log("error");
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

  return (
    <div className="text-black w-[90%] mx-auto py-10 bg-white mt-20 rounded-xl">
      <ToastContainer />
      <div className="w-1/2 mx-auto bg-gray-50 px-5 py-10 rounded-xl">
        <p className="text-xl">Blog Ekle</p>
        <div className="mt-7">
          <p>Blog Başlığı</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Başlık"
            className="w-1/2 border-b-2 py-2 px-3 outline-none mt-1 bg-transparent"
          />
        </div>
        <div className="mt-7">
          <p>İçerik</p>
          <ReactQuill
            className="mt-2"
            theme="snow"
            value={text}
            onChange={setText}
          />
        </div>
        <div className="mt-7">
          <p>Resim</p>
          <div className="relative">
            <div className="absolute top-5 left-2">
              <CiImageOn size={21} color="white" />
            </div>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full py-3 pl-10 bg-[#222736] text-gray-300 rounded-md text-xs mt-2"
              type="file"
            />
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <button
            onClick={() => addBlog()}
            className="text-sm px-6 py-1 border-2 border-gray-700 rounded-full text-gray-700"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
