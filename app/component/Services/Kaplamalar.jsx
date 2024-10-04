"use client";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const Kaplamalar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };
  return (
    <div className="w-full">
      <img loading="lazy" className="w-full" src="veneers.jpg" />
      <p className="text-3xl font-extralight mt-12">Kaplamalar</p>
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
                  Diş Kaplaması Nedir?
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kaplaması, dişlerin görünümünü iyileştirmek veya hasar görmüş
              dişleri onarmak için kullanılan ince yapraklar veya kılıflardır.
              Genellikle porselen ya da kompozit reçine malzemelerden yapılır ve
              doğal diş renginde olur.
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
                  Diş Kaplaması Çeşitleri
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kaplamaları genellikle porselen ve kompozit kaplamalar olarak
              ikiye ayrılır. Porselen kaplamalar daha dayanıklı ve doğal
              görünümlüdür, ancak kompozit kaplamalar daha hızlı uygulanabilir
              ve daha ekonomiktir. Hangi türün sizin için uygun olduğuna diş
              hekiminiz karar verebilir.
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
                  Diş Kaplaması Süreci
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kaplaması işlemi genellikle birkaç aşamada tamamlanır. İlk
              olarak dişinizde hafif bir törpüleme işlemi yapılır ve ardından
              dişinize uygun kaplama hazırlanır. Son aşamada, kaplama dişinize
              sabitlenir ve doğal bir görünüm kazandırılır.
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
                  Diş Kaplamalarının Bakımı
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kaplamalarının uzun ömürlü olabilmesi için günlük ağız
              bakımınıza dikkat etmelisiniz. Sert yiyeceklerden kaçınmak,
              düzenli olarak dişlerinizi fırçalamak ve diş ipi kullanmak
              kaplamalarınızın daha uzun süre dayanmasına yardımcı olacaktır.
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
                  Diş Kaplaması İçin Uygun Adaylar
                </span>
              </span>
            }
          >
            <p className="m-0 text-gray-400 text-sm leading-6">
              Diş kaplamaları, kırık, çatlak veya renk değişikliği yaşayan
              dişler için uygundur. Aynı zamanda diş aralarındaki boşlukları
              kapatmak ve dişlerin genel estetiğini iyileştirmek için de tercih
              edilir. Ancak ciddi diş eti problemleri veya zayıf diş yapısı olan
              bireyler için uygun olmayabilir.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default Kaplamalar;
