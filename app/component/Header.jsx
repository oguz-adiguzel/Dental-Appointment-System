'use client'
import React from 'react'
import { useParams, usePathname, useRouter } from "next/navigation";


const Header = () => {
  const router = useRouter();

  const path = usePathname()
   
  const nav = [
    {
      id:1,
      text:'Anasayfa',
      href:'/'
    },
    {
      id:2,
      text:'Hakkımızda',
      href:'/about'
    },
    {
      id:3,
      text:'Servisler',
      href:'/services'
    },
    {
      id:4,
      text:'Blog',
      href:'/blog'
    },
    {
      id:5,
      text:'Hekimler',
      href:'/dentists'
    },
    {
      id:6,
      text:'Portfolyo',
      href:'/portfolio'
    },
  ]
  return (
    <div className='w-full h-24 bg-[#ffffff] flex items-center sticky top-0 z-50'>
        <div className='w-3/5 mx-auto flex items-center justify-between'>
            <img loading='lazy' className='w-36' src='/logo.webp' />
            <ul className='flex space-x-6 text-gray-600'>
              {
                nav.map((item)=>(
                <li onClick={()=> router.push(item.href)} className={`hover:text-[#00BCD5] ${path === item.href ? 'text-[#00BCD5]': 'text-black'} cursor-pointer duration-300 uppercase`}>{item.text}</li>
                ))
              }
            </ul>
            <button onClick={()=>router.push('/appointment')} className='bg-[#00BCD5] text-white px-3 py-2 rounded-sm hover:bg-[#7ae9f8] duration-300'>ONLINE RANDEVU</button>
        </div>
    </div>
  )
}

export default Header