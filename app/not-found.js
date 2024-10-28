"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const NotFound = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleGoHome = () => {
    setIsNavigating(true);
  };

  useEffect(() => {
    if (isNavigating) {
      const timeoutId = setTimeout(() => {
        router.push("/");
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isNavigating, router]);
  return (
    <div className="w-full h-screen flex justify-center items-center notFound">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-light text-black">
          404 - Sayfa Bulunamadı
        </h1>
        <button
          onClick={handleGoHome}
          className="text-black px-11 py-3 mt-7 border border-gray-600 hover:shadow-lg duration-200"
        >
          Anasayfa
        </button>
      </div>
    </div>
  );
};

export default NotFound;
