"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const TibbiTavsiyeler = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div className="w-full">
      <img loading="lazy" className="w-full" src="medical-advices.jpg" />
      <p className="text-3xl font-extralight mt-12">Tıbbi Tavsiyeler</p>
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
                  Diş Fırçalama Tekniği
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Dişlerinizi günde en az iki kez, yumuşak kıllı bir diş fırçası ve
              florürlü diş macunu ile fırçalayın. Diş fırçalama sırasında
              dairesel hareketler kullanarak diş etlerinizi tahriş etmeden diş
              yüzeylerini temizleyin.
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
                  Diş İpi Kullanımı
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş ipi, diş fırçasının ulaşamadığı diş aralarındaki plak ve
              yiyecek artıklarını temizlemek için vazgeçilmezdir. Diş ipini her
              gün kullanarak diş eti sağlığınızı koruyabilir ve diş çürümelerini
              önleyebilirsiniz.
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
                  Ağız Gargarası Kullanımı
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Florürlü ağız gargaraları, ağız sağlığınızı destekler ve diş
              çürüklerini önlemeye yardımcı olur. Özellikle yemeklerden sonra
              veya dişlerinizi fırçalayamadığınız zamanlarda kullanmak etkili
              olabilir.
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
                  Dengeli Beslenme ve Şeker Tüketimi
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Aşırı şeker tüketimi, diş çürüklerine yol açan bakterileri besler.
              Diş sağlığını korumak için şekerli yiyecek ve içeceklerden uzak
              durarak daha dengeli bir beslenme düzeni oluşturun. Süt ürünleri
              ve sebzeler diş minesini güçlendirebilir.
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
                  Düzenli Diş Hekimi Kontrolleri
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş hekiminizi en az 6 ayda bir ziyaret ederek düzenli kontroller
              yaptırın. Erken teşhis edilen diş problemleri daha kolay ve düşük
              maliyetle tedavi edilebilir, ayrıca genel ağız sağlığınızı
              korumanıza yardımcı olur.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default TibbiTavsiyeler;
