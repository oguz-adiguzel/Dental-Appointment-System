import Image from "next/image";
import Main from "./component/Home/Main";
import TreatmentsSection from "./component/Home/TreatmentsSection";
import RelaxSection from "./component/Home/RelaxSection";
import DoctorSection from "./component/Home/DoctorSection";
import HoursSection from "./component/Home/HoursSection";
import SpecialitiesSection from "./component/Home/SpecialitiesSection";
import InfoSection from "./component/Home/InfoSection";
import PartnerSection from "./component/Home/PartnerSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <title>Dental | Online Randevu Sistemi</title>
      <Main />
      <TreatmentsSection />
      <RelaxSection />
      <DoctorSection />
      <HoursSection />
      <SpecialitiesSection />
      <InfoSection />
      <PartnerSection />
    </div>
  );
}
