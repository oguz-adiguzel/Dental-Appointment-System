"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const DisKopruleri = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };
  return (
    <div className="w-full">
      <img loading="lazy" className="w-full" src="dental-bridges.jpg" />
      <p className="text-3xl font-extralight mt-12">Diş Köprüleri</p>
      <div className="w-32 h-0.5 bg-[#ACEEFE] mt-4"></div>
      <p className="text-sm text-gray-400 mt-5 leading-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <p className="text-sm text-gray-400 mt-6">
        For more information on dental queries please visit
        www.dentalcaresolutions.com
      </p>
      <p className="text-3xl font-extralight mt-12">
        Sağlıklı Dişler İçin Planlama
      </p>
      <div className="w-32 h-0.5 bg-[#ACEEFE] mt-4"></div>
      <p className="text-sm text-gray-400 mt-5 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est
        sed lacus volutpat lobortis. Lorem ipsum dolor sit amet. Going to use a
        passage of Lorem Ipsum, you need to be sure there isn’t anything
        embarrassing hidden in the middle of text.
      </p>
      <p className="text-sm text-gray-400 mt-5 leading-7">
        <span className="text-black">
          Diş tedavisi sırasında nasıl bakım yapılır:{" "}
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est
        sed lacus volutpat lobortis. Lorem ipsum dolor sit amet. Going to use a
        passage of Lorem Ipsum, you need to be sure there isn’t anything
        embarrassing hidden in the middle of text.
      </p>
      <p className="text-sm text-gray-400 mt-5 leading-7">
        <span className="text-black">
          Doktorunuzu Ne Zaman Ziyaret Etmelisiniz?{" "}
        </span>{" "}
        Consectetur adipiscing elit. Maecenas id est sed lacus volutpat
        lobortis. Lorem ipsum dolor sit amet. Going to use a passage of Lorem
        Ipsum, you need to be sure there isn’t anything embarrassing hidden in
        the middle of text.
      </p>
      <p className="text-sm text-gray-400 mt-5 leading-7">
        <span className="text-black">Diş Seçenekleri: </span> Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Maecenas id est sed lacus
        volutpat lobortis. Lorem ipsum dolor sit amet. Going to use a passage of
        Lorem Ipsum, you need to be sure there isn’t anything embarrassing
        hidden in the middle of text.
      </p>

      <div className="w-full mt-10 h-[420px]">
        <Accordion activeIndex={activeIndex} onTabChange={onTabChange}>
          <AccordionTab
            header={
              <span className="flex space-x-2 items-center w-full">
                <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                <span
                  className={`font-light ${
                    activeIndex === 0 ? "text-[#2FC8DD]" : "text-gray-400"
                  }`}
                >
                  Diş Köprüsü Nedir?
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş köprüsü, bir veya birden fazla eksik dişi yerine koymak için
              kullanılan protez yapıdır. Köprü, boşluğun iki yanındaki dişlere
              veya implantlara sabitlenir ve eksik dişin işlevini geri
              kazandırır. Genellikle porselen, metal ya da zirkonyum
              malzemelerden yapılır.
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex space-x-2 items-center w-full">
                <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                <span
                  className={`font-light ${
                    activeIndex === 1 ? "text-[#2FC8DD]" : "text-gray-400"
                  }`}
                >
                  Diş Köprüsü Ne Zaman Gerekir?
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş köprüsü, eksik dişlerin yerine geçerek çiğneme fonksiyonunu
              geri kazandırır ve estetik açıdan diş yapısını tamamlar. Eksik
              dişlerin neden olduğu diş kaymalarını ve çene problemlerini
              önlemek için önerilir.
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex space-x-2 items-center w-full">
                <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                <span
                  className={`font-light ${
                    activeIndex === 2 ? "text-[#2FC8DD]" : "text-gray-400"
                  }`}
                >
                  Diş Köprüsü Yerleştirme Süreci
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş köprüsü işlemi birkaç aşamada gerçekleştirilir. İlk olarak,
              köprünün destekleneceği dişler hazırlanır. Ardından dişlerin
              kalıbı alınır ve kişiye özel bir köprü yapılır. Son aşamada köprü,
              dişlerin üzerine sabitlenir ve doğal bir görünüm sağlanır.
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex space-x-2 items-center w-full">
                <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                <span
                  className={`font-light ${
                    activeIndex === 3 ? "text-[#2FC8DD]" : "text-gray-400"
                  }`}
                >
                  Diş Köprüsünün Faydaları
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş köprüleri, eksik dişleri tamamlayarak konuşma, çiğneme ve
              estetik açıdan büyük fayda sağlar. Ayrıca dişlerin kaymasını
              önleyerek diş yapısının bozulmasını engeller. Köprüler aynı
              zamanda çene yapısının korunmasına da yardımcı olur.
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex space-x-2 items-center w-full">
                <div className="w-4 h-4 rounded-full border-4 border-[#2FC8DD] "></div>
                <span
                  className={`font-light ${
                    activeIndex === 4 ? "text-[#2FC8DD]" : "text-gray-400"
                  }`}
                >
                  Diş Köprüsü Bakımı
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş köprüsünün uzun ömürlü olması için düzenli ağız bakımı
              önemlidir. Diş ipi kullanarak köprü altındaki alanları temizlemek,
              köprünün çevresindeki diş eti sağlığını korumaya yardımcı olur.
              Diş hekiminize düzenli kontroller için gitmek de köprünün sağlıklı
              kalmasını sağlar.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default DisKopruleri;
