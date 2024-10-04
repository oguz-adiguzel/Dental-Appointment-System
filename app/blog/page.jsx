"use client";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";

const page = () => {
  const blogData = [
    {
      id: 1,
      img: "blog1.jpg",
      title: "Painless Dental Procedures",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
      tag: "blog",
      category: "News, Doctor",
    },
    {
        id: 2,
        img: "blog2.jpg",
        title: "Dentures Realignment",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
        tag: "Business",
        category: "Uncategorized",
      },
      {
        id: 3,
        img: "blog3.jpg",
        title: "Dental Hygiene – A Must During Pregnancy",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
        tag: "Creative",
        category: " magazine, News",
      },
      {
        id: 4,
        img: "blog4.jpg",
        title: "Dental Hygiene-the dos and donts",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
        tag: "news",
        category: " News, Technical",
      },
      {
        id: 5,
        img: "blog5.jpg",
        title: "Tooth Extraction – the final destination",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
        tag: "news",
        category: " News, Technical",
      },
      {
        id: 6,
        img: "blog6.jpg",
        title: "Root Canal Treatment – RCT Prevention is better than cure",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...",
        tag: "blog, Business",
        category: " News, Technical",
      }
  ];
  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-3/5 mx-auto">
          <p className="font-bold text-2xl">BLOG</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Blog</span>
          </p>
        </div>
      </div>
      <div className="w-3/5 mx-auto grid grid-cols-3 gap-5 mt-20 pb-20">
        {blogData.map((item) => (
          <div key={item.id} className=" pb-6 hover:outline outline-1 outline-[#00BCD5]">
            <div className="w-full h-60 relative">
              <p className="absolute bottom-0 left-0 px-3 py-1 bg-[#ACEEFE] font-bold">
                18 <span className="font-light">Jun 2024</span>
              </p>
              <img loading="lazy" className="w-full h-full" src={item.img} />
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
              <p className="font-medium text-lg">{item.title}</p>
              <div className="w-full h-24 mt-5 overflow-hidden">
                <p className="text-gray-400 font-light">
                  {item.text}
                </p>
              </div>
              <div className="mt-5 flex space-x-5 font-light">
                <div className="flex items-center space-x-1">
                  <FaTag size={14} color="#00BCD5" />
                  <p className="text-sm">{item.tag}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MdOutlineCategory size={16} color="#00BCD5" />
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
