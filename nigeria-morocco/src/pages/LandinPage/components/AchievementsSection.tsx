import React, { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  useCarousel?: boolean;
}

const AchievementsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Helper function to get translation with language-specific defaults
  const getTranslation = (
    key: string,
    enDefault: string,
    frDefault?: string
  ) => {
    const defaultValue =
      i18n.language === "fr" && frDefault ? frDefault : enDefault;
    return t(key, { defaultValue });
  };
  
  const [activeTab, setActiveTab] = useState("highlights");
  const highlightsRef = useRef<HTMLDivElement>(null);
  const exhibitionRef = useRef<HTMLDivElement>(null);
  const b2bRef = useRef<HTMLDivElement>(null);
  const mouRef = useRef<HTMLDivElement>(null);
  const panelSessionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const achievementsData: Record<string, AchievementData> = useMemo(
    () => ({
      highlights: {
        id: "highlights",
        title: getTranslation(
          "EventHighlights",
          "Event Highlights",
          "Points forts de l'événement"
        ),
        description: getTranslation(
          "firstEditionReport",
          "Report of The First Edition of The Nigeria – Morocco Business Week",
          "Rapport de la première édition de la Semaine des affaires Nigeria – Maroc"
        ),
        date: "28th October – 1st November 2024",
        venue: "Sofitel Hotel, Casablanca, Morocco",
        images: [
          { src: "/achievements/panel-session-4.jpeg", alt: "Panel Session 3" },
          { src: "/achievements/highlights-1.jpg", alt: "Event Highlights 1" },
          { src: "/achievements/highlights-2.jpg", alt: "Event Highlights 2" },
          { src: "/achievements/highlights-3.jpg", alt: "Event Highlights 3" },
          { src: "/achievements/highlights-5.jpg", alt: "Event Highlights 5" },
          { src: "/achievements/highlights-6.jpeg", alt: "Event Highlights 6" },
          { src: "/achievements/highlights-7.jpeg", alt: "Event Highlights 7" },
          { src: "/achievements/highlights-8.jpeg", alt: "Event Highlights 8" },
          { src: "/achievements/highlights-9.jpeg", alt: "Event Highlights 9" },
        ],
        content: [
          getTranslation("firstEdition", "First Edition", "Première édition"),
          getTranslation(
            "mainOrganizers",
            "Main Organizers: Spectre Trans-Trade Global",
            "Organisateurs principaux : Spectre Trans-Trade Global"
          ),
          getTranslation(
            "organizationPartner",
            "Organization Partner for Event Center: Ridec Design Company",
            "Partenaire d'organisation pour le centre d'événements : Ridec Design Company"
          ),
          getTranslation(
            "underAuspices",
            "Under the Auspices of the Nigeria Embassy in Rabat",
            "Sous les auspices de l'ambassade du Nigeria à Rabat"
          ),
          getTranslation(
            "institutionalPartners",
            "Institutional Partners: Federal Ministry of Industry, Trade & Investment Nigeria, Ministry of Steel Development Nigeria, AMDIE Morocco, National Automotive Design & Development Council Nigeria, Jigawa State Government, Coalition of Northern States Chambers of Commerce Mines, Industry & Agriculture, Casablanca – Settat Chamber of Commerce, Royal Air Morocco, Highland Integrated Electricity Services Ltd & Jos Electricity Distribution",
            "Partenaires institutionnels : Ministère fédéral de l'industrie, du commerce et de l'investissement du Nigeria, Ministère du développement de l'acier du Nigeria, AMDIE Maroc, Conseil national de conception et de développement automobile du Nigeria, Gouvernement de l'État de Jigawa, Coalition des chambres de commerce des États du Nord Mines, Industrie et Agriculture, Chambre de commerce Casablanca – Settat, Royal Air Maroc, Highland Integrated Electricity Services Ltd et Jos Electricity Distribution"
          ),
        ],
        highlights: [
          getTranslation(
            "deepenBilateralTrade",
            "Deepen bilateral trade and commercial relations",
            "Approfondir les relations commerciales et commerciales bilatérales"
          ),
          getTranslation(
            "exploreInvestment",
            "Explore investment and partnership opportunities across key sectors: Steel & Metallurgy, Renewable Energy & Electricity, Agriculture & Agro-business, Automotive Industry, Health, Banking & Finance, Solid Minerals & Fertilizer",
            "Explorer les opportunités d'investissement et de partenariat dans les secteurs clés : Acier et Métallurgie, Énergie renouvelable et Électricité, Agriculture et Agro-industrie, Industrie automobile, Santé, Banque et Finance, Minéraux solides et Engrais"
          ),
          getTranslation(
            "seminarsPanelSessions",
            "Seminars/Panel Sessions on policy, regulatory frameworks, and investment opportunities",
            "Séminaires/Sessions de panel sur les politiques, les cadres réglementaires et les opportunités d'investissement"
          ),
          getTranslation(
            "factorySiteVisits",
            "Factory and Site Visits to industrial facilities",
            "Visites d'usines et de sites d'installations industrielles"
          ),
        ],
      },
      exhibition: {
        id: "exhibition",
        title: getTranslation("Exhibition", "Exhibition", "Exposition"),
        description: getTranslation(
          "exhibitionDescription",
          "Showcasing key industries from Nigeria and Morocco",
          "Mise en valeur des industries clés du Nigeria et du Maroc"
        ),
        images: [
          { src: "/achievements/exhibition-1.jpg", alt: "Exhibition Stand 1" },
          { src: "/achievements/exhibition-2.jpg", alt: "Exhibition Stand 2" },
          { src: "/achievements/exhibition-3.jpg", alt: "Products Exhibition" },
          { src: "/achievements/exhibition-4.jpg", alt: "Jigawa State Stand" },
          {
            src: "/achievements/exhibition-5.jpg",
            alt: "Highland Integrated Stand",
          },
        ],
        content: [
          getTranslation(
            "exhibitionsShowcasing",
            "Exhibitions showcasing key industries such as agriculture, energy, and steel",
            "Expositions mettant en valeur des industries clés telles que l'agriculture, l'énergie et l'acier"
          ),
          getTranslation(
            "jigawaStateStand",
            "Jigawa State Government at their stand",
            "Gouvernement de l'État de Jigawa à leur stand"
          ),
          getTranslation(
            "highlandIntegratedExhibition",
            "Highland Integrated Electricity Services Ltd exhibition",
            "Exposition de Highland Integrated Electricity Services Ltd"
          ),
          getTranslation(
            "farmCreedsExhibition",
            "Farm Creeds Nig. Ltd explaining products to visitors",
            "Farm Creeds Nig. Ltd expliquant les produits aux visiteurs"
          ),
          getTranslation(
            "naddcProductsDisplay",
            "National Automotive Design & Development Council products display",
            "Exposition de produits du Conseil national de conception et de développement automobile"
          ),
        ],
      },
      b2b: {
        id: "b2b",
        title: getTranslation("B2BMeetings", "B2B Meetings", "Rencontres B2B"),
        description: getTranslation(
          "b2bDescription",
          "Business-to-Business meetings facilitating direct partnerships",
          "Rencontres interentreprises facilitant les partenariats directs"
        ),
        images: [
          { src: "/achievements/b2b-1.jpg", alt: "B2B Meeting 1" },
          { src: "/achievements/b2b-2.jpg", alt: "B2B Meeting 2" },
          { src: "/achievements/b2b-3.jpg", alt: "B2B Meeting 3" },
          { src: "/achievements/b2b-4.jpg", alt: "B2B Meeting 4" },
          { src: "/achievements/b2b-5.jpg", alt: "B2B Meeting 5" },
          { src: "/achievements/b2b-6.jpg", alt: "B2B Meeting 6" },
        ],
        content: [
          getTranslation(
            "b2bMeetingsCount",
            "Nigerian and Moroccan firms held over 30 B2B meetings",
            "Les entreprises nigérianes et marocaines ont organisé plus de 30 rencontres B2B"
          ),
          getTranslation(
            "siteVisitsFactories",
            "Site visits to factories including OCP, EMOVE, Maghreb Steel, Cherradi Group, and Lesieur Oil",
            "Visites de sites d'usines, notamment OCP, EMOVE, Maghreb Steel, Cherradi Group et Lesieur Oil"
          ),
          getTranslation(
            "hashaB2B",
            "Hasha Nig. Ltd having B2B with a Moroccan Energy Company",
            "Hasha Nig. Ltd en B2B avec une entreprise énergétique marocaine"
          ),
          getTranslation(
            "farmCreedsB2B",
            "Farm Creeds Nig. Ltd having B2B with Moroccan participants",
            "Farm Creeds Nig. Ltd en B2B avec des participants marocains"
          ),
          getTranslation(
            "highlandMASEN",
            "Highland Integrated Services and MASEN initiated discussions on embedded power generation, solar panel and lithium battery production",
            "Highland Integrated Services et MASEN ont initié des discussions sur la production d'électricité intégrée, les panneaux solaires et la production de batteries au lithium"
          ),
          getTranslation(
            "lesieurOilVisit",
            "Visit to Lesieur Oil Company with Chairman organizing Committee Amb. Usman Sarki",
            "Visite de la société Lesieur Oil avec le président du comité d'organisation Amb. Usman Sarki"
          ),
          getTranslation(
            "onhymMeeting",
            "Meeting at ONHYM with Mrs. Amina Benkhadra and the Hon. Minister H.E Uba Ahmadu Maigari",
            "Réunion à l'ONHYM avec Mme Amina Benkhadra et le ministre honoraire S.E. Uba Ahmadu Maigari"
          ),
          getTranslation(
            "naddcEmoveVisit",
            "NADDC Director-General's Visit to Emove Company",
            "Visite du directeur général du NADDC à la société Emove"
          ),
          getTranslation(
            "roundtableDiscussion",
            "Closed-Door Roundtable Discussion addressing regulatory challenges and solutions to facilitate trade",
            "Discussion de table ronde à huis clos abordant les défis réglementaires et les solutions pour faciliter le commerce"
          ),
        ],
      },
      mou: {
        id: "mou",
        title: getTranslation("SignedMOU", "SIGNED MOU", "MOU SIGNÉS"),
        description: getTranslation(
          "mouDescription",
          "Memoranda of Understanding signed during the event",
          "Protocoles d'accord signés pendant l'événement"
        ),
        images: [
          { src: "/achievements/mou-1.jpg", alt: "MOU Signing Ceremony" },
          { src: "/achievements/mou-2.jpg", alt: "MOU Document" },
          { src: "/achievements/mou-3.jpg", alt: "MOU Signing 2" },
        ],
        content: [
          getTranslation(
            "maghrebSteelMOU",
            "Maghreb Steel & Niger Extraction Company: To establish a scrap metal collection centre in Niger State, Nigeria for exports to Maghreb steel in Morocco. Witnessed by H.E Uba Ahmadu Maigari, The Charge d'Affairs Mr. Adamu Salihu Zanuwa, and directors from the Ministry of Steel Development",
            "Maghreb Steel et Niger Extraction Company : Établir un centre de collecte de ferraille dans l'État de Niger, au Nigeria, pour les exportations vers Maghreb steel au Maroc. Témoins : S.E. Uba Ahmadu Maigari, le chargé d'affaires M. Adamu Salihu Zanuwa et les directeurs du ministère du développement de l'acier"
          ),
          getTranslation(
            "naddcEmoveMOU",
            "NADDC & EMOVE: Ongoing talks for electric vehicle battery production partnership",
            "NADDC et EMOVE : Discussions en cours pour un partenariat de production de batteries pour véhicules électriques"
          ),
          getTranslation(
            "steelDayMOU",
            "Nigeria-Morocco Steel Day: To be hosted alternately in both countries to strengthen ties in the steel sector",
            "Journée de l'acier Nigeria-Maroc : À organiser alternativement dans les deux pays pour renforcer les liens dans le secteur de l'acier"
          ),
          getTranslation(
            "seaLaneMOU",
            "Lagos–Casablanca Sea Lane: Agreement to pursue direct sea trade to reduce transit time and bypass intermediaries",
            "Voie maritime Lagos-Casablanca : Accord pour poursuivre le commerce maritime direct afin de réduire le temps de transit et de contourner les intermédiaires"
          ),
          getTranslation(
            "greenhouseProjectMOU",
            "Greenhouse Project: Nigeria presented a plan to repurpose abandoned vessels into greenhouse farms, seeking Moroccan collaboration",
            "Projet de serres : Le Nigeria a présenté un plan pour réutiliser les navires abandonnés en fermes de serres, cherchant la collaboration marocaine"
          ),
          getTranslation(
            "energySolarMOU",
            "Energy & Solar Cooperation: Highland Integrated Services and MASEN initiated discussions on embedded power generation, solar panel and lithium battery production",
            "Coopération énergétique et solaire : Highland Integrated Services et MASEN ont initié des discussions sur la production d'électricité intégrée, les panneaux solaires et la production de batteries au lithium"
          ),
          getTranslation(
            "agriculturalTradeMOU",
            "Agricultural Trade & Investment: Moroccan firms expressed interest in importing Nigerian soybeans, sesame, garlic, ginger, etc. Nigerian firms showed interest in Moroccan fruits, canned fish, argan oil, etc.",
            "Commerce et investissement agricoles : Les entreprises marocaines ont exprimé leur intérêt à importer du soja, du sésame, de l'ail, du gingembre, etc. du Nigeria. Les entreprises nigérianes ont montré leur intérêt pour les fruits marocains, le poisson en conserve, l'huile d'argan, etc."
          ),
          getTranslation(
            "economicForumMOU",
            "Nigeria-Morocco Economic Forum: Proposal to create a formal joint business forum and initiate bi-monthly virtual follow-up meetings",
            "Forum économique Nigeria-Maroc : Proposition de créer un forum d'affaires conjoint formel et d'initier des réunions de suivi virtuelles bimensuelles"
          ),
        ],
      },
      panelSession: {
        id: "panelSession",
        title: getTranslation(
          "PanelSessions",
          "Panel Sessions",
          "Sessions de panel"
        ),
        description: getTranslation(
          "panelSessionsDescription",
          "Seminars and panel discussions on policy, regulatory frameworks, and investment opportunities",
          "Séminaires et discussions de panel sur les politiques, les cadres réglementaires et les opportunités d'investissement"
        ),
        images: [
          { src: "/achievements/panel-session-1.jpeg", alt: "Panel Session 1" },
          { src: "/achievements/panel-session-2.jpeg", alt: "Panel Session 2" },
          { src: "/achievements/panel-session-3.jpeg", alt: "Panel Session 3" },
          { src: "/achievements/panel-session-4.jpeg", alt: "Panel Session 3" },
        ],
        content: [
          getTranslation(
            "panelSessionsRegulatory",
            "Panel Sessions on the regulatory environment, AfCFTA, and bilateral trade opportunities in sectors like agriculture, automotive, solid minerals, and steel",
            "Sessions de panel sur l'environnement réglementaire, la ZLECAf et les opportunités de commerce bilatéral dans des secteurs comme l'agriculture, l'automobile, les minéraux solides et l'acier"
          ),
          getTranslation(
            "chambersOfCommerceRole",
            "The Role of Chambers of Commerce in enhancing economic relations between Nigeria and Morocco",
            "Le rôle des chambres de commerce dans l'amélioration des relations économiques entre le Nigeria et le Maroc"
          ),
          getTranslation(
            "panelSessionEnergy",
            "Panel Session on Energy, Steel & Solid Minerals with key stakeholders from both countries",
            "Session de panel sur l'énergie, l'acier et les minéraux solides avec les principales parties prenantes des deux pays"
          ),
          getTranslation(
            "roundtableDiscussionPanel",
            "Closed-Door Roundtable Discussion addressing regulatory challenges and solutions to facilitate trade",
            "Discussion de table ronde à huis clos abordant les défis réglementaires et les solutions pour faciliter le commerce"
          ),
          getTranslation(
            "highLevelDiscussions",
            "High-level discussions on policy frameworks and investment opportunities",
            "Discussions de haut niveau sur les cadres politiques et les opportunités d'investissement"
          ),
        ],
        useCarousel: true,
      },
    }),
    [i18n.language]
  );

  const tabs = useMemo(
    () => [
      {
        id: "highlights",
        label: getTranslation(
          "EventHighlights",
          "Event Highlights",
          "Points forts de l'événement"
        ),
        ref: highlightsRef,
      },
      {
        id: "exhibition",
        label: getTranslation("Exhibition", "Exhibition", "Exposition"),
        ref: exhibitionRef,
      },
      {
        id: "b2b",
        label: getTranslation("B2BMeeting", "B2B Meeting", "Rencontre B2B"),
        ref: b2bRef,
      },
      {
        id: "mou",
        label: getTranslation("SignedMOU", "SIGNED MOU", "MOU SIGNÉS"),
        ref: mouRef,
      },
      {
        id: "panelSession",
        label: getTranslation(
          "PanelSessions",
          "Panel Sessions",
          "Sessions de panel"
        ),
        ref: panelSessionRef,
      },
    ],
    [
      i18n.language,
      highlightsRef,
      exhibitionRef,
      b2bRef,
      mouRef,
      panelSessionRef,
    ]
  );

  const handleTabClick = (
    tabId: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
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

  const renderAchievementSection = (
    achievement: AchievementData,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const sectionInView = useInView(ref, { once: true, amount: 0.2 });
    const useCarousel =
      achievement.useCarousel !== undefined
        ? achievement.useCarousel
        : achievement.images.length > 3;

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
            <p className="text-lg text-gray-600 mb-4">
              {achievement.description}
            </p>
            {achievement.date && (
              <p className="text-md text-gray-700 mb-2">
                <span className="font-semibold">
                  {getTranslation("Date", "Date", "Date")}:
                </span>{" "}
                {achievement.date}
              </p>
            )}
            {achievement.venue && (
              <p className="text-md text-gray-700 mb-6">
                <span className="font-semibold">
                  {getTranslation("Venue", "Venue", "Lieu")}:
                </span>{" "}
                {achievement.venue}
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
                    {getTranslation("Objectives", "Objectives", "Objectifs")}
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
    <div id="sectors" className="bg-gray-50 scroll-mt-20">
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
            animate={
              headerInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {getTranslation(
              "firstEditionTitle",
              "First Edition of The Nigeria – Morocco Business Week",
              "Première édition de la Semaine des affaires Nigeria – Maroc"
            )}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {getTranslation(
              "exploreHighlights",
              "Explore the highlights and outcomes from the First Edition of The Nigeria – Morocco Business Week",
              "Explorez les points forts et les résultats de la première édition de la Semaine des affaires Nigeria – Maroc"
            )}
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
