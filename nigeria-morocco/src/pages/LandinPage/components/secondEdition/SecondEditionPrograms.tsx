import ProgramItems from "../ProgramItems";
import { useTranslation } from "react-i18next";

const programs = [
  { icon: "agric.png", titleKey: "agricProducts" },
  { icon: "automobile.png", titleKey: "automobile" },
  { icon: "energy.jpg", titleKey: "renewable" },
  { icon: "minerals.jpg", titleKey: "minerals" },
  { icon: "digital.jpeg", titleKey: "economy" },
  { icon: "e-government.png", titleKey: "banking" },
];

const SecondEditionPrograms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="programs"
      className="flex flex-col items-center bg-silver/60 p-10 py-20"
    >
      <h1 className="text-2xl text-fontColor font-[600]">
        {t("sectorHeading")}
      </h1>
      <p className="my-5 text-center text-fontColor">{t("sectorBody")}</p>
      <div className="grid place-items-center px-0 grid-cols-1 md:grid-cols-3 gap-8 w-full md:px-5 lg:px-32 mt-10">
        {programs.map(({ icon, titleKey }) => (
          <div
            key={titleKey}
            className="hover:scale-105 hover:shadow-xl transition-all duration-200 bg-white/80 rounded-xl p-4"
          >
            <ProgramItems icon={icon} title={t(titleKey)} content="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondEditionPrograms;

