"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const Kronlar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };
  return (
    <div className="w-full">
      <img loading="lazy" className="w-full" src="crowns-dental.jpg" />
      <p className="text-3xl font-extralight mt-12">Kronlar</p>
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
                  Diş Kronu Nedir?
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kronu, hasar görmüş veya çürümüş bir dişin üzerini tamamen
              kaplayan bir yapıdır. Dişi güçlendirmek, şeklini düzeltmek veya
              görünümünü iyileştirmek amacıyla kullanılır. Genellikle porselen,
              metal veya seramik gibi malzemelerden yapılır.
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
                  Diş Kronu Ne Zaman Gerekir?
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kronları, büyük dolguların yeterli olmadığı durumlarda, zayıf
              dişleri korumak, kırık dişleri onarmak ya da implantları kaplamak
              için tercih edilir. Ayrıca, köprülerin yerinde kalmasını sağlamak
              için de kullanılır.
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
                  Kron Yerleştirme Süreci
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kronu yerleştirme işlemi genellikle iki aşamada
              gerçekleştirilir. İlk aşamada, dişin küçültülmesi ve bir kalıbın
              alınması gerekir. Daha sonra, kişiye özel hazırlanan kron dişin
              üzerine yerleştirilir ve sabitlenir. Geçici bir kron ise bu
              süreçte dişi korur.
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
                  Diş Kronlarının Avantajları
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kronları, hasar görmüş dişleri korumanın yanı sıra doğal bir
              görünüm sunar. Kronlar dayanıklı olduğu için uzun yıllar
              dayanabilir. Diş estetiğini önemli ölçüde iyileştirir ve çiğneme
              fonksiyonunu geri kazandırır.
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
                  Diş Kronu Bakımı
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kronları uzun ömürlü olsa da, iyi bakım gerektirir. Düzenli
              diş fırçalama ve diş ipi kullanımı, kronların çevresindeki diş eti
              sağlığını korumak için önemlidir. Ayrıca, diş hekiminizi düzenli
              olarak ziyaret ederek kronlarınızın durumunu kontrol
              ettirmelisiniz.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default Kronlar;
