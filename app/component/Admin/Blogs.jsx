"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegComment, FaTag } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);

  const getAllBlog = async () => {
    try {
      const response = await axios.get("http://localhost:3001/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/blog/${id}`);
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
      getAllBlog()
    } catch (error) {
      console.log("error", error);
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
  };

  const cleanText = (text) => {
    const cleanHTML = DOMPurify.sanitize(text);
    const newText = parse(cleanHTML)
    return newText
  };

  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <>
    <ToastContainer />
      <div className="text-black w-[90%] h-[90%] overflow-scroll mx-auto mt-10 py-10 px-6 rounded-xl bg-white grid grid-cols-4 gap-7">
        {blogs.length !== 0 ? (
          blogs?.map((item) => (
            <div
              key={item.id}
              className=" pb-6 hover:outline outline-1 border outline-[#00BCD5]"
            >
              <div className="w-full h-60 relative">
                <p className="absolute bottom-0 left-0 px-3 py-1 bg-[#ACEEFE]">
                  {new Date(item.createdAt).toLocaleDateString("tr-TR")}
                </p>
                <img
                  loading="lazy"
                  className="w-full h-full"
                  src={item.photoUrl}
                />
              </div>
              <div className="flex justify-between items-center px-5 mt-2">
                <p>
                  by <span className="text-gray-400">Admin</span>
                </p>
                <div className="flex items-center space-x-1">
                  <FaRegComment color="#00BCD5" />
                  <p className="text-gray-400 font-extralight">1</p>
                </div>
              </div>
              <div className="px-5 mt-7">
                <p className="font-medium text-lg hover:text-[#00BCD5] duration-300 cursor-pointer">
                  {item.title}
                </p>
                <div className="w-full h-24 mt-5 overflow-hidden">
                  <p className="text-gray-400 font-light">{cleanText(item.text)}</p>
                </div>
                <div className="mt-5 flex space-x-5 font-light">
                  <div className="flex items-center space-x-1">
                    <FaTag size={14} color="#00BCD5" />
                    <p className="text-sm">blog</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MdOutlineCategory size={16} color="#00BCD5" />
                    <p className="text-sm">News, Doctor</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => deleteBlog(item._id)}
                  className="border-2 border-red-500 px-4 py-1 text-sm text-red-500 rounded-full"
                >
                  Bloğu Sil
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-bold">
            Bloglar Hazırlanıyor...
          </p>
        )}
      </div>
    </>
  );
};

export default Blogs;
