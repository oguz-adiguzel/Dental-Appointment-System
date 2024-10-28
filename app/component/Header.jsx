"use client";
import React, { useRef } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { LuMenuSquare } from "react-icons/lu";

import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";

const Header = () => {
  const router = useRouter();

  const path = usePathname();

  const menuRight = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      items: [
        {
          label: "Anasayfa",
          url: "/",
        },
        {
          label: "Hakkımızda",
          url: "/about",
        },
        {
          label: "Servisler",
          url: "/services",
        },
        {
          label: "Blog",
          url: "/blog",
        },
        {
          label: "Hekimler",
          url: "/dentists",
        },
        {
          label: "Portfolyo",
          url: "/portfolio",
        },
        {
          command: () => {
            toast.current.show({
              severity: "info",
              summary: "Info",
              detail: "Item Selected",
              life: 3000,
            });
          },
          template: (item, options) => {
            return (
              <div className="w-full flex justify-center mt-3">
                <button
                  onClick={() => router.push("/appointment")}
                  className="bg-[#00BCD5] text-white px-3 py-2 rounded-sm hover:bg-[#7ae9f8] duration-300"
                >
                  ONLINE RANDEVU
                </button>
              </div>
            );
          },
        },
      ],
    },
  ];

  const nav = [
    {
      id: 1,
      text: "Anasayfa",
      href: "/",
    },
    {
      id: 2,
      text: "Hakkımızda",
      href: "/about",
    },
    {
      id: 3,
      text: "Servisler",
      href: "/services",
    },
    {
      id: 4,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      text: "Hekimler",
      href: "/dentists",
    },
    {
      id: 6,
      text: "Portfolyo",
      href: "/portfolio",
    },
  ];
  return (
    <div className="w-full h-24 bg-[#ffffff] flex items-center sticky top-0 z-50">
      <div className="w-full lg:hidden h-full flex items-center justify-between px-2">
        <img loading="lazy" className="w-40" src="/logo.webp" />
        <div
          onClick={(event) => menuRight.current.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup
        >
          <button>
            <LuMenuSquare color="#00BCD5" size={32} />
          </button>

          <Toast ref={toast}></Toast>
          <Menu
            model={items}
            popup
            ref={menuRight}
            id="popup_menu_right"
            popupAlignment="right"
          />
        </div>
      </div>
      <div className="w-3/5 mx-auto lg:flex hidden lg:items-center lg:justify-between">
        <img loading="lazy" className="w-36" src="/logo.webp" />
        <ul className="flex space-x-6 text-gray-600">
          {nav.map((item) => (
            <li
              onClick={() => router.push(item.href)}
              className={`hover:text-[#00BCD5] ${
                path === item.href ? "text-[#00BCD5]" : "text-black"
              } cursor-pointer duration-300 uppercase`}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <button
          onClick={() => router.push("/appointment")}
          className="bg-[#00BCD5] text-white px-3 py-2 rounded-sm hover:bg-[#7ae9f8] duration-300"
        >
          ONLINE RANDEVU
        </button>
      </div>
    </div>
  );
};

export default Header;
