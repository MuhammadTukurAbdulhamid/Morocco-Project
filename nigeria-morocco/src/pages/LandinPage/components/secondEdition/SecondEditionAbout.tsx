import { Button } from "antd";
import { useTranslation } from "react-i18next";

const SecondEditionAbout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row justify-between my-10 items-center w-full px-5 md:px-20 gap-10 lg:px-40"
    >
      <img
        src="bweek.jpg"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
        alt="Nigeria-Morocco Business Week"
      />
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-fontColor">
          {t("newsHeader1")}
        </h1>
        <div className="text-justify text-[13px] text-fontColor space-y-3">
          <p>{t("newsBody1")}</p>
          <p>
            <b>{t("venue")}:</b> Lagos, Kano and Abuja (Nigeria).
          </p>
          <p>{t("news1Body2")}</p>
          <p>{t("news1Body3")}</p>
        </div>
        <Button className="bg-primary w-1/2 mt-4 md:w-1/3 h-12 text-white hover:bg-black rounded-lg shadow-md hover:scale-105 transition">
          {t("learn")}
        </Button>
      </div>
    </div>
  );
};

export default SecondEditionAbout;

