"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const DisBeyazlatma = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };
  return (
    <div className="w-full">
      <img loading="lazy" className="w-full" src="teeth-whitening.jpg" />
      <p className="text-3xl font-extralight mt-12">Diş Beyazlatma</p>
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
                  Diş Beyazlatma Yöntemleri
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş beyazlatma, profesyonel klinik uygulamaları veya evde
              kullanılan beyazlatma ürünleri ile yapılabilir. Klinik
              uygulamalar, daha güçlü beyazlatıcı maddeler kullanarak daha hızlı
              sonuçlar verirken, evde kullanılan ürünler daha uzun sürede etkili
              olabilir.
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
                  Diş Beyazlatma Sonrası Bakım
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş beyazlatma işlemi sonrası en az 48 saat boyunca renkli yiyecek
              ve içeceklerden (kahve, çay, kırmızı şarap vb.) kaçınmak
              önemlidir. Diş minesini korumak için ayrıca beyazlatıcı diş
              macunları kullanabilirsiniz.
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
                  Doğal Beyazlatma Yöntemleri
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Karbonat ve limon gibi doğal ürünler diş beyazlatmada sıkça tercih
              edilse de, bunların sık kullanımı diş minesine zarar verebilir. Bu
              yöntemleri dikkatli kullanmalı ve mümkünse diş hekiminizden onay
              alarak uygulamalısınız.
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
                  Diş Beyazlatmanın Yan Etkileri
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş beyazlatma, özellikle hassas dişlerde geçici olarak hassasiyet
              ve diş etlerinde tahrişe yol açabilir. Bu tür yan etkiler
              genellikle hafif ve geçicidir, ancak uzun süre devam ederse
              mutlaka bir diş hekimine danışmalısınız.
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
                  Beyazlatıcı Ürünlerin Etkisi ve Güvenilirliği
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Marketlerde satılan beyazlatıcı diş macunları, jeller ve şeritler
              dişlerde yüzeysel lekeleri çıkarabilir, ancak kalıcı sonuçlar
              almak için profesyonel tedaviler daha etkili olacaktır. Ürün
              seçerken güvenilir markalar ve diş hekimleri tarafından önerilen
              ürünleri tercih etmelisiniz.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default DisBeyazlatma;
