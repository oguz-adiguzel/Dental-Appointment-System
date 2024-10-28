'use client'
import React from 'react'

const TreatmentsSection = () => {
  
  const cardData = [
    {
      id:1,
      title:'Ağız Diş Çene Cerrahisi',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon1.webp',
      hover:'ico1-hover.png'
    },
    {
      id:2,
      title:'Protez Diş İmplantları',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon2.webp',
      hover:'icon2-hover.png'
    },
    {
      id:3,
      title:'Ortodonti ve Diş Teli',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon3.webp',
      hover:'ico3-hover.png'
    },
    {
      id:4,
      title:'Endodonti',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon4.webp',
      hover:'ico4-hover.png'
    },
    {
      id:5,
      title:'Asgari Müdahaleli Diş Hekimliği',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon5.webp',
      hover:'ico5-hover.png'
    },
    {
      id:6,
      title:'Çocuk Diş Hekimliği',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon:'icon6.webp',
      hover:'ico6-hover.png'
    },
  ]
  return (
    <div className='w-full py-20 flex flex-col items-center relative'>
      <img className='absolute top-9' src='title_img1.png' />
        <p className='text-center font-bold lg:text-5xl text-2xl text-[#00BCD5]'>Diş Tedavilerimiz</p>
        <p className='text-gray-400 mt-2 text-sm lg:text-base text-center'>Gülümseyin….bu sizin yüz değerinizi yükseltir!</p>
        <div className='w-2/3 mx-auto py-20 grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-20 mt-10'>
          {
            cardData.map((item)=>(
              <div key={item.id} className='border py-16 px-8 relative flex flex-col items-center group hover:bg-[#F6F9F9] duration-500'>
                <img loading='lazy' className='absolute -right-10 -bottom-16 opacity-0 group-hover:opacity-100 duration-500 group-hover:right-0 group-hover:-bottom-6' src={item.hover} />
            <div className='w-20 h-20 bg-[#9ff1fa] rounded-full mx-auto absolute -top-10 flex justify-center items-center'>
              <img loading='lazy' src={item.icon} />
            </div>
            <p className='text-center text-2xl text-gray-600 mt-5'>{item.title}</p>
            <p className='text-center mt-5 text-gray-400'>{item.text}</p>
          </div>
            ))
          }
        </div>
    </div>
  )
}

export default TreatmentsSection