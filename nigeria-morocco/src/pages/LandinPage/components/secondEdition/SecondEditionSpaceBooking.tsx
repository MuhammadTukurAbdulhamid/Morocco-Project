import { Button } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  onBook: () => void;
}

const SecondEditionSpaceBooking: React.FC<Props> = ({ onBook }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="space"
      className="flex bg-silver/80 min-h-[308px] justify-center flex-col md:flex-row md:justify-between items-center w-full py-5 px-5 md:px-20 gap-5 md:gap-10 lg:px-40 rounded-xl shadow-inner my-10"
    >
      <div className="gap-4">
        <h1 className="text-4xl font-bold text-primary drop-shadow">
          {t("exhibitionHead")}{" "}
          <span className="text-blue-700 text-4xl font-bold">
            {t("exhibitionSpace")}?
          </span>
        </h1>
        <p className="text-left text-fontColor mt-2">{t("exhibitionBody")}</p>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-20">
        <Button
          onClick={onBook}
          className="bg-gradient-to-r from-primary to-blue-500 w-full mt-4 md:min-w-[200px] h-12 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:from-black hover:to-primary transition-all duration-200"
        >
          {i18n.language === "fr"
            ? "Obtenez Votre Stand/Espace"
            : t("bookButtton", { defaultValue: "Book A Space" })}
        </Button>
      </div>
    </div>
  );
};

export default SecondEditionSpaceBooking;
 