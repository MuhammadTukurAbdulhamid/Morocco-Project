import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

interface AchievementImage {
  src: string;
  alt: string;
  caption?: string;
}

interface AchievementData {
  id: string;
  title: string;
  description: string;
  date?: string;
  venue?: string;
  images: AchievementImage[];
  content: string[];
  highlights?: string[];
}

const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("highlights");
  const highlightsRef = useRef<HTMLDivElement>(null);
  const exhibitionRef = useRef<HTMLDivElement>(null);
  const b2bRef = useRef<HTMLDivElement>(null);
  const mouRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const achievementsData: Record<string, AchievementData> = {
    highlights: {
      id: "highlights",
      title: "Event Highlights",
      description: "Report of The First Edition of The Nigeria – Morocco Business Week",
      date: "28th October – 1st November 2024",
      venue: "Sofitel Hotel, Casablanca, Morocco",
      images: [
        { src: "/achievements/highlights-4.jpg", alt: "Event Highlights 4" },
        { src: "/achievements/highlights-1.jpg", alt: "Event Highlights 1" },
        { src: "/achievements/highlights-2.jpg", alt: "Event Highlights 2" },
        { src: "/achievements/highlights-3.jpg", alt: "Event Highlights 3" },
        { src: "/achievements/highlights-4.jpg", alt: "Event Highlights 4" },
        { src: "/achievements/highlights-5.jpg", alt: "Event Highlights 5" },
      ],
      content: [
        "First Edition",
        "Main Organizers: Spectre Trans-Trade Global",
        "Organization Partner for Event Center: Ridec Design Company",
        "Under the Auspices of the Nigeria Embassy in Rabat",
        "Institutional Partners: Federal Ministry of Industry, Trade & Investment Nigeria, Ministry of Steel Development Nigeria, AMDIE Morocco, National Automotive Design & Development Council Nigeria, Jigawa State Government, Coalition of Northern States Chambers of Commerce Mines, Industry & Agriculture, Casablanca – Settat Chamber of Commerce, Royal Air Morocco, Highland Integrated Electricity Services Ltd & Jos Electricity Distribution",
      ],
      highlights: [
        "Deepen bilateral trade and commercial relations",
        "Explore investment and partnership opportunities across key sectors: Steel & Metallurgy, Renewable Energy & Electricity, Agriculture & Agro-business, Automotive Industry, Health, Banking & Finance, Solid Minerals & Fertilizer",
        "Seminars/Panel Sessions on policy, regulatory frameworks, and investment opportunities",
        "Factory and Site Visits to industrial facilities",
      ],
    },
    exhibition: {
      id: "exhibition",
      title: "Exhibition",
      description: "Showcasing key industries from Nigeria and Morocco",
      images: [
        { src: "/achievements/exhibition-1.jpg", alt: "Exhibition Stand 1" },
        { src: "/achievements/exhibition-2.jpg", alt: "Exhibition Stand 2" },
        { src: "/achievements/exhibition-3.jpg", alt: "Products Exhibition" },
        { src: "/achievements/exhibition-4.jpg", alt: "Jigawa State Stand" },
        { src: "/achievements/exhibition-5.jpg", alt: "Highland Integrated Stand" },
      ],
      content: [
        "Exhibitions showcasing key industries such as agriculture, energy, and steel",
        "Jigawa State Government at their stand",
        "Highland Integrated Electricity Services Ltd exhibition",
        "Farm Creeds Nig. Ltd explaining products to visitors",
        "National Automotive Design & Development Council products display",
      ],
    },
    b2b: {
      id: "b2b",
      title: "B2B Meetings",
      description: "Business-to-Business meetings facilitating direct partnerships",
      images: [
        { src: "/achievements/b2b-1.jpg", alt: "B2B Meeting 1" },
        { src: "/achievements/b2b-2.jpg", alt: "B2B Meeting 2" },
        { src: "/achievements/b2b-3.jpg", alt: "B2B Meeting 3" },
        { src: "/achievements/b2b-4.jpg", alt: "B2B Meeting 4" },
        { src: "/achievements/b2b-5.jpg", alt: "B2B Meeting 5" },
        { src: "/achievements/b2b-6.jpg", alt: "B2B Meeting 6" },
      ],
      content: [
        "Nigerian and Moroccan firms held over 30 B2B meetings",
        "Site visits to factories including OCP, EMOVE, Maghreb Steel, Cherradi Group, and Lesieur Oil",
        "Hasha Nig. Ltd having B2B with a Moroccan Energy Company",
        "Farm Creeds Nig. Ltd having B2B with Moroccan participants",
        "Highland Integrated Services and MASEN initiated discussions on embedded power generation, solar panel and lithium battery production",
        "Visit to Lesieur Oil Company with Chairman organizing Committee Amb. Usman Sarki",
        "Meeting at ONHYM with Mrs. Amina Benkhadra and the Hon. Minister H.E Uba Ahmadu Maigari",
        "NADDC Director-General's Visit to Emove Company",
        "Closed-Door Roundtable Discussion addressing regulatory challenges and solutions to facilitate trade",
      ],
    },
    mou: {
      id: "mou",
      title: "SIGNED MOU",
      description: "Memoranda of Understanding signed during the event",
      images: [
        { src: "/achievements/mou-1.jpg", alt: "MOU Signing Ceremony" },
        { src: "/achievements/mou-2.jpg", alt: "MOU Document" },
        { src: "/achievements/mou-3.jpg", alt: "MOU Signing 2" },
      ],
      content: [
        "Maghreb Steel & Niger Extraction Company: To establish a scrap metal collection centre in Niger State, Nigeria for exports to Maghreb steel in Morocco. Witnessed by H.E Uba Ahmadu Maigari, The Charge d'Affairs Mr. Adamu Salihu Zanuwa, and directors from the Ministry of Steel Development",
        "NADDC & EMOVE: Ongoing talks for electric vehicle battery production partnership",
        "Nigeria-Morocco Steel Day: To be hosted alternately in both countries to strengthen ties in the steel sector",
        "Lagos–Casablanca Sea Lane: Agreement to pursue direct sea trade to reduce transit time and bypass intermediaries",
        "Greenhouse Project: Nigeria presented a plan to repurpose abandoned vessels into greenhouse farms, seeking Moroccan collaboration",
        "Energy & Solar Cooperation: Highland Integrated Services and MASEN initiated discussions on embedded power generation, solar panel and lithium battery production",
        "Agricultural Trade & Investment: Moroccan firms expressed interest in importing Nigerian soybeans, sesame, garlic, ginger, etc. Nigerian firms showed interest in Moroccan fruits, canned fish, argan oil, etc.",
        "Nigeria-Morocco Economic Forum: Proposal to create a formal joint business forum and initiate bi-monthly virtual follow-up meetings",
      ],
    },
  };

  const tabs = [
    { id: "highlights", label: "Event Highlights", ref: highlightsRef },
    { id: "exhibition", label: "Exhibition", ref: exhibitionRef },
    { id: "b2b", label: "B2B Meeting", ref: b2bRef },
    { id: "mou", label: "SIGNED MOU", ref: mouRef },
  ];

  const handleTabClick = (tabId: string, ref: React.RefObject<HTMLDivElement>) => {
    setActiveTab(tabId);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderAchievementSection = (achievement: AchievementData, ref: React.RefObject<HTMLDivElement>) => {
    const sectionInView = useInView(ref, { once: true, amount: 0.2 });
    const useCarousel = achievement.images.length > 3;

    return (
      <motion.div
        ref={ref}
        id={achievement.id}
        className="py-16 px-4 md:px-8 lg:px-20 bg-white scroll-mt-20"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {achievement.title}
            </motion.h2>
            <p className="text-lg text-gray-600 mb-4">{achievement.description}</p>
            {achievement.date && (
              <p className="text-md text-gray-700 mb-2">
                <span className="font-semibold">Date:</span> {achievement.date}
              </p>
            )}
            {achievement.venue && (
              <p className="text-md text-gray-700 mb-6">
                <span className="font-semibold">Venue:</span> {achievement.venue}
              </p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              {achievement.content.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="text-primary mr-3 mt-1 text-xl"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    •
                  </motion.span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
              {achievement.highlights && (
                <motion.div className="mt-6" variants={itemVariants}>
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Objectives
                  </motion.h3>
                  {achievement.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start mb-3 group"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        className="text-primary mr-3 mt-1 text-xl"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        •
                      </motion.span>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              {useCarousel ? (
                <ImageCarousel images={achievement.images} />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {achievement.images.map((img, index) => (
                    <motion.div
                      key={index}
                      className="relative rounded-lg overflow-hidden shadow-md"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/600x400?text=" +
                            encodeURIComponent(img.alt);
                        }}
                      />
                      {img.caption && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          {img.caption}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        className="bg-white py-12 px-4 md:px-8 lg:px-20"
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            First Edition of The Nigeria – Morocco Business Week
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore the highlights and outcomes from the First Edition of The Nigeria – Morocco
            Business Week
          </motion.p>
        </div>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div
        className="sticky top-[80px] z-20 bg-white shadow-md border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
          <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.ref)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievement Sections */}
      <div>
        {tabs.map((tab) => (
          <div key={tab.id}>
            {renderAchievementSection(achievementsData[tab.id], tab.ref)}
            {tab.id !== tabs[tabs.length - 1].id && (
              <motion.div
                className="border-b border-gray-200 mx-4 md:mx-8 lg:px-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
