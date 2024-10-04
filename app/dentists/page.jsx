import React from "react";

const page = () => {
  const doctor = [
    {
      id: 1,
      name: "Dr.Anagha Menen",
      title: "Cosmetic Surgery",
      photo: "doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr.Ankitha Prem",
      title: "Maxillofacial Surgery",
      photo: "doctor2.jpg",
    },
    {
      id: 3,
      name: "Dr.Bora Tumnus",
      title: "Orthodontist",
      photo: "doctor3.jpg",
    },
    {
      id: 4,
      name: "Dr.Charl Marks",
      title: "General, Orthodontist",
      photo: "doctor4.jpg",
    },
    {
      id: 5,
      name: "Dr.Anagha Menen",
      title: "Cosmetic Surgery",
      photo: "doctor1.jpg",
    },
    {
      id: 6,
      name: "Dr.Ankitha Prem",
      title: "Maxillofacial Surgery",
      photo: "doctor2.jpg",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      <div className="w-full bg-[#F2F2F2] py-11">
        <div className="w-3/5 mx-auto">
          <p className="font-bold text-2xl">HEKİMLER</p>
          <p className="text-xs mt-2">
            Anasayfa / <span className="text-gray-400">Hekimler</span>
          </p>
        </div>
      </div>

      <div className="w-3/5 mx-auto pb-20">
        {doctor.map((item) => (
          <div className="w-full grid grid-cols-10 mt-20">
            <div className="col-span-3">
                <img loading="lazy" className="w-full h-[350px]" src={item.photo} />
                <button className="w-full h-24 bg-[#ACEEFE] uppercase">Detayı Görüntüle</button>
            </div>
            <div className="col-span-7 pl-10">
                <p className="text-2xl">{item.name} <span className="text-lg text-gray-500">M.D, pH.D</span></p>
                <p className="text-gray-400">{item.title}</p>
                <div className="w-full grid grid-cols-8 mt-10">
                    <div className="col-span-2 py-5 border-r">
                        <p className="uppercase font-light">Deneyim</p>
                    </div>
                    <div className="col-span-6 py-5 pl-14">
                        <p className="font-light">BDS , MDS - Periodontology and Oral Implantology, 16 Years Experience</p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-8 mt-5">
                    <div className="col-span-2 py-5 border-r">
                        <p className="uppercase font-light">Sertifikalar</p>
                    </div>
                    <div className="col-span-6 py-5 pl-14">
                        <ul className="font-light list-disc space-y-2 pl-5">
                            <li className="text-[#2daccc]"><span className="text-black">National Specialist Register in Dental</span></li>
                            <li className="text-[#2daccc]"><span className="text-black">Gynecology Department of Science Major</span></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full grid grid-cols-8 mt-5">
                    <div className="col-span-2 py-5 border-r">
                        <p className="uppercase font-light">Ödüller</p>
                    </div>
                    <div className="col-span-6 py-5 pl-14">
                        <ul className="font-light list-disc space-y-2 pl-5">
                            <li className="text-[#2daccc]"><span className="text-black">National Specialist Register in Dental</span></li>
                            <li className="text-[#2daccc]"><span className="text-black">Gynecology Department of Science Major</span></li>
                        </ul>
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
