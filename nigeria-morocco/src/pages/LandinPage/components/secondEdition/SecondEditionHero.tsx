import { useEffect, useMemo, useState } from "react";
import { Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import CarouselItem from "../CarouselItem";

interface Props {
  onRegister: () => void;
  onScrollToPartners: () => void;
}

interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  label: string;
}

const EVENT_DATE = new Date("2025-12-08T09:00:00");

const SecondEditionHero: React.FC<Props> = ({
  onRegister,
  onScrollToPartners,
}) => {
  const { t, i18n } = useTranslation();
  const [countdown, setCountdown] = useState<Countdown>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
    label: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown({
          days: "0",
          hours: "0",
          minutes: "0",
          seconds: "0",
          label: "Event Started!",
        });
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown({
        days: String(days),
        hours: String(hours),
        minutes: String(minutes),
        seconds: String(seconds),
        label: "",
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const ITEMS = useMemo(() => {
    return [
      {
        left: (
          <div className="flex w-full flex-col md:w-4/6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl text-left font-bold drop-shadow-lg animate-slide-down">
              🇳🇬 NIGERIA-MOROCCO 🇲🇦
            </h1>
            <h1 className="text-5xl md:text-6xl text-left font-bold text-primary drop-shadow-lg animate-slide-up">
              {t("businessweek")}
            </h1>
            <h2 className="mt-6 text-left text-black/90 text-2xl animate-fade-in-delay">
              {t("edition")}
            </h2>
            <span className="my-6 text-left text-black/80 animate-fade-in-delay2">
              {t("oct")}
            </span>
            <div className="flex gap-4 mt-4">
              <Button
                onClick={onRegister}
                className="bg-gradient-to-r from-primary to-blue-500 w-[180px] h-12 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-black hover:to-primary transition-all duration-200"
              >
                {i18n.language === "fr"
                  ? "Obtenez Votre Badge"
                  : `${t("Participate")}`}
              </Button>
              <Button
                onClick={onScrollToPartners}
                className="bg-white border border-primary text-primary w-[180px] h-12 font-semibold rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-200"
              >
                {t("learn")}
              </Button>
            </div>
          </div>
        ),
        right: (
          <div className="flex-1 flex items-center justify-center animate-fade-in-delay2">
            <img src="nig.png" alt="Nigeria Morocco Business Week" />
          </div>
        ),
      },
      {
        left: (
          <div className="flex w-100% flex-col md:w-4/6">
            <h1 className="text-5xl md:text-6xl text-left font-bold text-white">
              {t("slide2Head")}
            </h1>
            <span className="my-6 text-left text-white">{t("slide2Body")}</span>
          </div>
        ),
      },
      {
        left: (
          <div className="flex w-100% flex-col md:w-4/6">
            <h1 className="text-5xl md:text-6xl text-left font-bold text-white">
              {t("slide3Head")}
            </h1>
            <span className="my-6 text-left text-white">{t("slide3Body")}</span>
          </div>
        ),
      },
      {
        left: (
          <div className="flex w-100% flex-col md:w-4/6">
            <h1 className="text-5xl md:text-6xl text-left font-bold text-white">
              Nigeria-Morocco Business Week 2024
            </h1>
          </div>
        ),
      },
      {
        left: (
          <div className="flex w-100% flex-col md:w-4/6">
            <h1 className="text-5xl md:text-6xl text-left font-bold text-white">
              Nigeria-Morocco Business Week 2024
            </h1>
          </div>
        ),
      },
      {
        left: (
          <div className="flex w-100% flex-col md:w-4/6">
            <h1 className="text-5xl md:text-6xl text-left font-bold text-white">
              Nigeria-Morocco Business Week 2024
            </h1>
          </div>
        ),
      },
    ];
  }, [i18n.language, onRegister, onScrollToPartners, t]);

  return (
    <div className="min-h-screen flex flex-col relative" id="top">
      <div className="absolute inset-0 bg-gradient from-primary/80 via-blue-900/30 to-transparent z-0 pointer-events-none" />
      <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 z-20 flex-col items-center">
        <div className="bg-white/80 px-6 py-2 rounded-full shadow text-primary font-bold text-lg border border-primary animate-fade-in">
          {countdown.label
            ? countdown.label
            : `Event Starts In: ${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
        </div>
      </div>
      <Carousel
        swipeable={false}
        showStatus={false}
        stopOnHover={false}
        interval={4000}
        autoPlay
        showArrows={false}
        infiniteLoop
        className="flex flex-col w-full min-h-[50vh] md:min-h-[80vh] justify-start text-start z-10"
      >
        {(typeof window !== "undefined" && window.innerWidth < 768
          ? ITEMS.slice(0, 1)
          : ITEMS
        ).map((item, index) => (
          <CarouselItem key={index} item={item} ind={index} />
        ))}
      </Carousel>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <button
          onClick={onScrollToPartners}
          className="flex flex-col items-center animate-bounce cursor-pointer group"
          aria-label="Scroll Down"
        >
          <span className="text-white text-xs mb-1 group-hover:text-primary transition">
            Scroll Down
          </span>
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-white group-hover:text-primary transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SecondEditionHero;

