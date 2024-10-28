"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const page = () => {
  
  const [blogs, setBlogs] = useState([])
  const router = useRouter()

  const getAllBlog = async() =>{
    try{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog `)
      setBlogs(response.data.blogs)
    }catch(error){
      console.log('error', error);
    }
  } 

  const cleanText = (text) => {
    const cleanHTML = DOMPurify.sanitize(text);
    const newText = parse(cleanHTML)
    return newText
  };

  useEffect(()=>{
    getAllBlog()
  },[])

  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-full lg:w-3/5 px-5 lg:px-0 mx-auto">
          <p className="font-bold text-2xl">BLOG</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Blog</span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-0 gap-5 mt-20 pb-20">
        {blogs.length !== 0 ? blogs?.map((item) => (
          <div key={item.id} className=" pb-6 hover:outline outline-1 outline-[#00BCD5]">
            <div className="w-full h-60 relative">
              <p className="absolute bottom-0 left-0 px-3 py-1 bg-[#ACEEFE]">
                {new Date(item.createdAt).toLocaleDateString('tr-TR')}
              </p>
              <img onClick={() => router.push(`/blogDetail/${item?.slug}`)} loading="lazy" className="w-full h-full cursor-pointer" src={item.photoUrl} />
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
              <p className="font-medium text-lg hover:text-[#00BCD5] duration-300 cursor-pointer">{item.title}</p>
              <div className="w-full h-24 mt-5 overflow-hidden">
                <p className="text-gray-400 font-light">
                  {cleanText(item.text)}
                </p>
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
          </div>
        )): <p className="text-center text-lg font-bold">Bloglar Hazırlanıyor...</p>}
      </div>
    </div>
  );
};

export default page;
