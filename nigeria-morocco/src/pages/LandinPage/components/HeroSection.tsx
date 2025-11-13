import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useAnimatedCounter } from "../../Dashboard/hooks/useAnimatedCounter";

interface Props {
  onRegister: () => void;
  onBook: () => void;
  onNavigateSecondEdition: () => void;
}

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<Props> = ({
  // onRegister,
  // onBook,
  onNavigateSecondEdition,
}) => {
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

  // Animated counters for each stat
  const citiesCount = useAnimatedCounter(3);
  const exhibitorsCount = useAnimatedCounter(120);
  const delegatesCount = useAnimatedCounter(1800); // 1.8K = 1800
  const sessionsCount = useAnimatedCounter(45);

  const stats: StatItem[] = [
    {
      value: citiesCount.count,
      label: getTranslation(
        "firstEditionCities",
        "Host Cities",
        "Villes hôtes"
      ),
      ref: citiesCount.ref,
    },
    {
      value: exhibitorsCount.count,
      suffix: "+",
      label: getTranslation(
        "firstEditionExhibitors",
        "Exhibitors",
        "Exposants"
      ),
      ref: exhibitorsCount.ref,
    },
    {
      value: delegatesCount.count,
      suffix: "+",
      label: getTranslation("firstEditionDelegates", "Delegates", "Délégués"),
      ref: delegatesCount.ref,
    },
    {
      value: sessionsCount.count,
      label: getTranslation(
        "firstEditionSessions",
        "Strategic Sessions",
        "Sessions stratégiques"
      ),
      ref: sessionsCount.ref,
    },
  ];

  // Format number with K suffix if >= 1000
  const formatStatValue = (value: number, suffix?: string): string => {
    if (value >= 1000) {
      const kValue = (value / 1000).toFixed(1);
      return `${kValue}K${suffix || ""}`;
    }
    return `${value}${suffix || ""}`;
  };

  return (
    <div
      id="about"
      style={{
        background:
          "linear-gradient(rgba(10, 25, 41, 0.75), rgba(26, 58, 82, 0.75)), url(/landinghome.svg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex w-full px-5 flex-col justify-start md:flex-row md:justify-between items-center flex-1 md:px-20 lg:px-40 py-24 md:py-32 scroll-mt-20"
    >
      <div className="flex w-full flex-col md:w-4/6 animate-fade-in">
        <p className="text-sm md:text-base tracking-[0.4em] text-primary font-semibold uppercase">
          {getTranslation(
            "firstEditionTag",
            "First Edition Recap",
            "Récapitulatif de la première édition"
          )}
        </p>
        <h1 className="text-4xl md:text-6xl text-left font-bold text-white drop-shadow-lg mt-4">
          {getTranslation(
            "firstEditionTitle",
            "Nigeria - Morocco Business Week 2024",
            "Semaine des affaires Nigeria - Maroc 2024"
          )}
        </h1>
        <h2 className="mt-4 text-left text-white/90 text-xl md:text-2xl font-medium">
          {getTranslation(
            "firstEditionSubTitle",
            "Abuja · Lagos · Kano — 8 - 11 December 2024",
            "Abuja · Lagos · Kano — 8 - 11 décembre 2024"
          )}
        </h2>
        <p className="mt-6 text-left text-white/80 text-base md:text-lg max-w-2xl">
          {getTranslation(
            "firstEditionSummary",
            "Thank you to our partners, sponsors, and over 1,800 delegates who made the inaugural edition a landmark platform for trade and investment collaboration across key sectors.",
            "Merci à nos partenaires, sponsors et plus de 1 800 délégués qui ont fait de la première édition une plateforme phare pour la collaboration commerciale et d'investissement dans les secteurs clés."
          )}
        </p>

        <div className="bg-white/95 rounded-2xl px-6 py-4 mt-8 inline-flex gap-6 w-fit flex-wrap md:flex-nowrap shadow-lg">
          {stats.map(({ value, suffix, label, ref }) => (
            <div
              key={label}
              ref={ref}
              className="flex flex-col items-center min-w-[90px]"
            >
              <span className="text-primary font-bold text-3xl md:text-4xl">
                {formatStatValue(value, suffix)}
              </span>
              <span className="text-gray-700 text-xs md:text-sm text-center">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {/* <Button
            onClick={onRegister}
            className="bg-primary hover:bg-primary/90 w-full sm:w-[200px] h-12 text-white font-semibold hover:scale-105 transition-all duration-200"
          >
            {t("firstEditionCta", { defaultValue: "Download Highlights" })}
          </Button>
          <Button
            onClick={onBook}
            className="bg-white border-2 border-white text-gray-900 hover:bg-gray-100 w-full sm:w-[200px] h-12 font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
          >
            {t("contactTeamCta", { defaultValue: "Contact Our Team" })}
          </Button> */}
          <Button
            onClick={onNavigateSecondEdition}
            className="bg-green-600 hover:bg-green-700 w-full sm:w-[220px] h-12 text-white font-semibold hover:scale-105 transition-all duration-200"
          >
            {getTranslation(
              "secondEditionLink",
              "Explore 2nd Edition",
              "Explorer la 2ème édition"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
