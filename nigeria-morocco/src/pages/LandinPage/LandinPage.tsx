import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import PartnersSection from "./components/PartnersSection";
import SpeakersSection from "./components/SpeakersSection";
import Modals from "./components/Modals";

import Footer from "./components/Footer";
import SponsorshipSection from "./components/SponsorshipSection";
import HearFromClient from "./components/HearFromClient";
import UpdatedNews from "./components/UpdatedNews";
import RelatedArticles from "./components/RelatedArticles";

export default function LandinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [value, setValue] = useState("+234");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNavigateSecondEdition = () => {
    navigate("/second-edition");
  };

  const handleNavigateFirstEdition = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="min-h-screen flex flex-col relative">
        <NavBar
          onRegister={() => setIsModalOpen(true)}
          onBook={() => setBookingModalOpen(true)}
          onNavigateSecondEdition={handleNavigateSecondEdition}
          onNavigateFirstEdition={handleNavigateFirstEdition}
          currentEdition="first"
        />
        <div className="absolute inset-0 bg-gradient from-primary/80 via-blue-900/30 to-transparent z-0 pointer-events-none" />
        <HeroCarousel
          onRegister={() => setIsModalOpen(true)}
          onBook={() => setBookingModalOpen(true)}
          onNavigateSecondEdition={handleNavigateSecondEdition}
        />
      </div>

      <AchievementsSection />

      <PartnersSection scrollRef={scrollRef} />

      <SpeakersSection />
      <SponsorshipSection />
      <HearFromClient />
      <UpdatedNews />
      <RelatedArticles />

      <Footer />
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

