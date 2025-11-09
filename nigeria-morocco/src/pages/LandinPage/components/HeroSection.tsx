import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  onRegister: () => void;
  onBook: () => void;
  onNavigateSecondEdition: () => void;
}

const HeroSection: React.FC<Props> = ({
  onRegister,
  onBook,
  onNavigateSecondEdition,
}) => {
  const { t } = useTranslation();

  const stats = [
    {
      value: "3",
      label: t("firstEditionCities", { defaultValue: "Host Cities" }),
    },
    {
      value: "120+",
      label: t("firstEditionExhibitors", { defaultValue: "Exhibitors" }),
    },
    {
      value: "1.8K+",
      label: t("firstEditionDelegates", { defaultValue: "Delegates" }),
    },
    {
      value: "45",
      label: t("firstEditionSessions", { defaultValue: "Strategic Sessions" }),
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(10, 25, 41, 0.75), rgba(26, 58, 82, 0.75)), url(/landinghome.svg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex w-full px-5 flex-col justify-start md:flex-row md:justify-between items-center flex-1 md:px-20 lg:px-40 py-24 md:py-32"
    >
      <div className="flex w-full flex-col md:w-4/6 animate-fade-in">
        <p className="text-sm md:text-base tracking-[0.4em] text-primary font-semibold uppercase">
          {t("firstEditionTag", { defaultValue: "First Edition Recap" })}
        </p>
        <h1 className="text-4xl md:text-6xl text-left font-bold text-white drop-shadow-lg mt-4">
          {t("firstEditionTitle", {
            defaultValue: "Nigeria - Morocco Business Week 2024",
          })}
        </h1>
        <h2 className="mt-4 text-left text-white/90 text-xl md:text-2xl font-medium">
          {t("firstEditionSubTitle", {
            defaultValue: "Abuja · Lagos · Kano — 8 - 11 December 2024",
          })}
        </h2>
        <p className="mt-6 text-left text-white/80 text-base md:text-lg max-w-2xl">
          {t("firstEditionSummary", {
            defaultValue:
              "Thank you to our partners, sponsors, and over 1,800 delegates who made the inaugural edition a landmark platform for trade and investment collaboration across key sectors.",
          })}
        </p>

        <div className="bg-white/95 rounded-2xl px-6 py-4 mt-8 inline-flex gap-6 w-fit flex-wrap md:flex-nowrap shadow-lg">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center min-w-[90px]"
            >
              <span className="text-primary font-bold text-3xl md:text-4xl">
                {value}
              </span>
              <span className="text-gray-700 text-xs md:text-sm text-center">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button
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
          </Button>
          <Button
            onClick={onNavigateSecondEdition}
            className="bg-green-600 hover:bg-green-700 w-full sm:w-[220px] h-12 text-white font-semibold hover:scale-105 transition-all duration-200"
          >
            {t("secondEditionLink", { defaultValue: "Explore 2nd Edition" })}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
