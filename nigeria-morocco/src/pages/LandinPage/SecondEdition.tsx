import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Modals from "./components/Modals";
import SecondEditionHero from "./components/secondEdition/SecondEditionHero";
import SecondEditionPartners from "./components/secondEdition/SecondEditionPartners";
import SecondEditionPrograms from "./components/secondEdition/SecondEditionPrograms";
import SecondEditionSpaceBooking from "./components/secondEdition/SecondEditionSpaceBooking";
import SecondEditionAbout from "./components/secondEdition/SecondEditionAbout";
import SecondEditionNews from "./components/secondEdition/SecondEditionNews";
import SecondEditionTestimonials from "./components/secondEdition/SecondEditionTestimonials";
import SecondEditionFAQ from "./components/secondEdition/SecondEditionFAQ";
import SecondEditionNavBar from "./components/secondEdition/SecondEditionNavBar";
import ConceptNote from "./components/secondEdition/ConceptNote";

export default function SecondEdition() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [value, setValue] = useState("+234");
  const [phone, setPhone] = useState("");
  const partnersRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScrollToPartners = () => {
    partnersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white">
      <SecondEditionNavBar
        onRegister={() => setIsModalOpen(true)}
        onBook={() => setBookingModalOpen(true)}
      />
      <div className="overflow-x-hidden">
        <SecondEditionHero
          onRegister={() => setIsModalOpen(true)}
          onScrollToPartners={handleScrollToPartners}
        />
        <ConceptNote />

        <SecondEditionPartners ref={partnersRef} />
        <SecondEditionPrograms />
        <SecondEditionSpaceBooking onBook={() => setBookingModalOpen(true)} />
        <SecondEditionAbout />
        <SecondEditionNews />
        <SecondEditionTestimonials />
        <SecondEditionFAQ />

        <FloatingWhatsApp />
        <Footer />
      </div>

      <Modals
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        bookingModalOpen={bookingModalOpen}
        setBookingModalOpen={setBookingModalOpen}
        phone={phone}
        setPhone={setPhone}
        value={value}
        setValue={setValue}
        navigate={navigate}
      />
    </div>
  );
}