import React from "react";

const InfoSection = () => {
  const data = [
    {
      id: 1,
      title: "150",
      text: "Özel Doktorlar",
      icon: "nc1.webp",
    },
    {
      id: 2,
      title: "200",
      text: "Klinik Odaları",
      icon: "nc2.webp",
    },
    {
      id: 3,
      title: "340",
      text: "Ödüller",
      icon: "nc3.webp",
    },
    {
      id: 4,
      title: "1500",
      text: "Mutlu Müşteriler",
      icon: "nc4.webp",
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-4 gap-x-10 px-40 pb-20">
      {data.map((item) => (
        <div key={item.id} className="bg-[#F6F9F9] flex flex-col items-center py-14">
          <img loading="lazy" src={item.icon} />
          <p className="text-5xl mt-2">{item.title}</p>
          <p className="text-gray-400 mt-1">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
