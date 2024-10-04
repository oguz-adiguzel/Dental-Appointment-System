import React from "react";

const SpecialitiesSection = () => {
  const data = [
    {
      id: 1,
      photo: "treatment1.jpg",
      title: "Diş Temizleme ve Parlatma",
    },
    {
      id: 2,
      photo: "treatment2.jpg",
      title: "Ağrısız Diş Çekimi",
    },
    {
        id: 3,
        photo: "treatment3.jpg",
        title: "Diş Hijyeni - Hamilelikte Bir Zorunluluk",
      }
  ];
  return (
    <div className="w-full py-20">
      <p className="text-4xl text-center">
        Hizmetlerimiz <span className="text-[#00BCD5]">ve</span> Uzmanlıklarımız
      </p>
      <p className="text-gray-400 text-center mt-1">
        Güne gülümseyerek başlayın ve bitirin!
      </p>
      <div className="w-3/4 mx-auto py-10 grid grid-cols-3 gap-x-20 px-10">
        {data.map((item) => (
          <div>
            <img loading="lazy" src={item.photo} />
            <p className="text-center text-xl mt-6">{item.title}</p>
            <p className="text-center px-14 mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id est sed lacus volutpat lobortis. Lorem ipsum dolor sit
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesSection;
