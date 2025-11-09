import { Button, Divider } from "antd";
import { useTranslation } from "react-i18next";

const newsItems = [
  {
    image: "lagos.jpg",
    alt: "lagos",
    titleKey: "newsHeader2",
    bodyKey: "newsBody2",
  },
  {
    image: "kano.webp",
    alt: "kano",
    titleKey: "newsHeader3",
    bodyKey: "newsBody3",
  },
  {
    image: "abuja.jpg",
    alt: "abuja",
    titleKey: "newsHeader4",
    bodyKey: "newsBody4",
  },
];

const SecondEditionNews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="news" className="w-full px-5 md:px-20">
      <Divider
        style={{
          borderColor: "#e9e9e9",
        }}
      />
      {newsItems.map(({ image, alt, titleKey, bodyKey }, index) => (
        <div key={titleKey}>
          <div className="flex flex-col md:flex-row justify-between my-10 items-center w-full gap-10 lg:px-20">
            <img
              src={image}
              alt={alt}
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <h1 className="text-2xl font-bold text-fontColor">
                {t(titleKey)}
              </h1>
              <p className="text-justify text-[13px] text-fontColor">
                {t(bodyKey)}
              </p>
              <Button className="bg-primary w-1/2 mt-4 md:w-1/3 h-12 text-white hover:bg-black rounded-lg shadow-md hover:scale-105 transition">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://spectretranstradeglobal.com"
                >
                  {t("learn")}
                </a>
              </Button>
            </div>
          </div>
          {index < newsItems.length - 1 && (
            <Divider
              style={{
                borderColor: "#e9e9e9",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SecondEditionNews;

