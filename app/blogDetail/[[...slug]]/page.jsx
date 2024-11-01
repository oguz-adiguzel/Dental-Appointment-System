"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegComment, FaTag } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const page = () => {
  
  const [blog, setBlog] = useState();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/${params.slug[0]}`,{
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
          },
        }
      );
      setBlog(response.data.blog);
    } catch (error) {
      console.log("error", error);
      router.push("/blog");
    }
  };

  const cleanText = (text) => {
    const cleanHTML = DOMPurify.sanitize(text);
    const newText = parse(cleanHTML)
    return newText
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="w-3/5 mx-auto pt-6 pb-16">
        <h1 className="uppercase font-bold text-2xl">{blog?.title}</h1>
        <p className="text-xs text-gray-500">Anasayfa / Blog / {blog?.title}</p>
        <div className="w-full h-auto relative mt-16">
          <p className="absolute bottom-0 left-0 px-3 py-1 bg-[#ACEEFE]">
            {new Date(blog?.createdAt).toLocaleDateString("tr-TR")}
          </p>
          <img
            loading="lazy"
            className="w-full h-full cursor-pointer"
            src={blog?.photoUrl}
          />
        </div>
        <div className="w-full px-6 mt-5">
          <div className="flex justify-between items-center">
            <p>
              by <span className="text-gray-400">Admin</span>
            </p>
            <div className="flex items-center space-x-1">
              <FaRegComment color="#00BCD5" />
              <p className="text-gray-400 font-extralight">1</p>
            </div>
          </div>
          <h2 className="font-semibold text-lg mt-6">{blog?.title}</h2>
          <p className="text-gray-400 mt-4 font-light leading-6">
            {cleanText(blog?.text)}
          </p>
          <div className="flex items-center mt-7 space-x-4">
            <div className="flex items-center space-x-1">
              <FaTag size={14} color="#00BCD5" />
              <p className="text-sm font-extralight">blog</p>
            </div>
            <div className="flex items-center space-x-1">
              <MdOutlineCategory size={16} color="#00BCD5" />
              <p className="text-sm font-extralight">News, Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
