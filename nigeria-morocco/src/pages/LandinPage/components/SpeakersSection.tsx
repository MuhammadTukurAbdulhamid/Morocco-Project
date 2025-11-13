import React, { useState, useEffect, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Speaker {
  id: number;
  name: string;
  image: string;
  title?: string;
  organization?: string;
  role?: string;
  subtitle?: string;
}

const SpeakersSection: React.FC = () => {
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
  
  const [activeTab, setActiveTab] = useState("confirmed");
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const confirmedSpeakers: Speaker[] = useMemo(
    () => [
      {
        id: 1,
        name: "H.E. Uba Ahmadu Maigari",
        title: t("speaker1Title", {
          defaultValue:
            "Delivering His Keynote Address Honorable Minister Federal Republic of Nigeria.",
        }),
        image: "/achievements/b2b-1.jpg",
      },
      {
        id: 2,
        name: "H.E. AMB Usman Sarki",
        title: t("speaker2Title", {
          defaultValue:
            "Delivering welcome Address Chairman Organizing Committee",
        }),
        image: "/achievements/b2b-2.jpg",
      },
      {
        id: 3,
        name: "Malam Abdullahi Naziru",
        title: t("speaker3Title", {
          defaultValue:
            "Executive Vice President KK Kingdom Group delivering a presentation about Green Economic Zone Kaduna",
        }),
        organization: t("speaker3Organization", {
          defaultValue: "Federal Institute of Agriculture, Abuja",
        }),
        image: "speaker-abdullahi-naziru.jpeg",
      },
      {
        id: 4,
        name: "Mr. Tarik Bourqouqou",
        title: t("speaker4Title", {
          defaultValue: "Manager Intl. Projects MASEN",
        }),
        image: "speaker-tarik.jpeg",
      },
      {
        id: 5,
        name: "Mr. Oluwemimo Joseph Osanipin",
        title: t("speaker5Title", {
          defaultValue:
            "Director-General National Automotive Design & Development Council",
        }),
        image: "speaker-oluwamilo.jpeg",
      },
    ],
    [t]
  );

  const pastSpeakers: Speaker[] = useMemo(
    () => [
      {
        id: 4,
        name: "Jane Smith",
        title: t("Director", { defaultValue: "Director" }),
        organization: t("pastSpeakerOrganization1", {
          defaultValue: "National Research Institute",
        }),
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      },
      {
        id: 5,
        name: "Michael Brown",
        title: t("Professor", { defaultValue: "Professor" }),
        organization: t("pastSpeakerOrganization2", {
          defaultValue: "University of Agriculture",
        }),
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
    ],
    [t]
  );

  const displaySpeakers =
    activeTab === "confirmed" ? confirmedSpeakers : pastSpeakers;

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 3 : 1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Group speakers into slides
  const getSlides = () => {
    const slides: Speaker[][] = [];
    for (let i = 0; i < displaySpeakers.length; i += itemsPerSlide) {
      slides.push(displaySpeakers.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = getSlides();

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-white via-blue-50/30 to-silver/20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {getTranslation("Speakers", "Speakers", "Conférenciers")}
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            {getTranslation(
              "speakersDescription",
              "View list of present and past event speakers",
              "Voir la liste des conférenciers présents et passés de l'événement"
            )}
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("confirmed")}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "confirmed"
                ? "bg-primary text-white scale-105"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-primary hover:bg-gray-50"
            }`}
          >
            {getTranslation(
              "ConfirmedSpeakers",
              "Confirmed Speakers",
              "Conférenciers confirmés"
            )}
          </button>
        </div>

        <div className="relative">
          <Carousel
            key={activeTab}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={false}
            swipeable={true}
            emulateTouch={true}
            centerMode={false}
            centerSlidePercentage={100}
            className="speakers-carousel"
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  onClick={onClickHandler}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 border-2 border-gray-200 hover:border-primary transition-all hover:scale-110"
                  aria-label={t("PreviousSpeakers", {
                    defaultValue: "Previous speakers",
                  })}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 border-2 border-gray-200 hover:border-primary transition-all hover:scale-110"
                  aria-label={t("NextSpeakers", {
                    defaultValue: "Next speakers",
                  })}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )
            }
          >
            {slides.map((slideSpeakers, slideIndex) => (
              <div
                key={slideIndex}
                className={`grid gap-6 px-2 md:px-4 ${
                  itemsPerSlide === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {slideSpeakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-[320px] object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/400x320?text=Speaker";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {speaker.name}
                      </h3>
                      {speaker.title && (
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {speaker.title}
                        </p>
                      )}
                      {(speaker.organization || speaker.role) && (
                        <p className="text-sm font-medium text-primary">
                          {speaker.organization || speaker.role}
                        </p>
                      )}
                      {speaker.subtitle && (
                        <p className="text-xs text-gray-500 mt-2">
                          {speaker.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
