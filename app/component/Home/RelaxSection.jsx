import React from "react";
import { TbDental } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { Fa6 } from "react-icons/fa6";

const RelaxSection = () => {
  return (
    <div className="relaxSection flex justify-start items-center w-full px-3 lg:px-0">
      <div className="lg:ml-72 ml-0 w-full">
        <p className="lg:text-3xl text-xl text-gray-700">
          Rahatlayın… Diş Hekiminiz En İyisini Bilir
        </p>
        <div className="w-full flex items-start justify-start space-x-8 mt-10 group">
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center border-2 border-black rounded-full group-hover:bg-[#57eafd] duration-500 group-hover:border-[#18C2D8] group-hover:text-white">
            <TbDental size={30} />
          </div>
          <div className="lg:w-96 w-full">
            <p className="text-lg lg:text-xl">Diş hijyenini asla unutmayın!</p>
            <p className="text-sm text-gray-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>

        <div className="w-full flex items-start justify-start space-x-8 mt-10 group">
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center border-2 border-black rounded-full  group-hover:bg-[#57eafd] duration-500 group-hover:border-[#18C2D8] group-hover:text-white">
            <MdAccessTime size={30} />
          </div>
          <div className="lg:w-96 w-full">
            <p className="lg:text-xl text-lg">Fırçalarken acele etmeyin!</p>
            <p className="text-sm text-gray-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>

        <div className="w-full flex items-start justify-start space-x-8 mt-10 group">
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center border-2 border-black rounded-full  group-hover:bg-[#57eafd] duration-500 group-hover:border-[#18C2D8] group-hover:text-white">
            <Fa6 size={24} />
          </div>
          <div className="lg:w-96 w-full">
            <p className="text-lg lg:text-xl">6 ayda bir diş hekiminizi ziyaret edin</p>
            <p className="text-sm text-gray-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxSection;
