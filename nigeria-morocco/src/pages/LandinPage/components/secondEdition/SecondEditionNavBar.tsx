import { useState } from "react";
import { Button, Dropdown, Drawer, Space } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../../../../components/GlobeIcon";
import MenuIcon from "../MenuIcon";

interface Props {
  onRegister: () => void;
  onBook: () => void;
}

const SecondEditionNavBar: React.FC<Props> = ({ onRegister, onBook }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <span
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English 🇬🇧
        </span>
      ),
    },
    {
      key: "fr",
      label: (
        <span
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          French 🇫🇷
        </span>
      ),
    },
  ];

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="nav sticky top-0 z-30 px-5 md:px-20 lg:px-40 min-h-20 p-0 bg-silver/90 backdrop-blur-md shadow-md flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-bold text-primary drop-shadow">
        🇳🇬 NIGERIA-MOROCCO 🇲🇦
      </h1>
      <div className="hidden md:flex items-center space-x-8">
        <a
          className="text-md font-medium hover:text-primary transition"
          href="#top"
        >
          {t("Home")}
        </a>
        <a
          className="text-md font-medium hover:text-primary transition"
          href="#partners"
        >
          {t("Sponsors")}
        </a>
        <a
          className="text-md font-medium hover:text-primary transition"
          href="/"
        >
          {t("firstEditionLink", { defaultValue: "1st Edition" })}
        </a>
        <Button
          type="primary"
          ghost
          onClick={(e) => {
            e.preventDefault();
            onBook();
          }}
          className="h-[40px] hover:scale-105 transition"
        >
          {i18n.language === "fr"
            ? "Obtenez Votre Stand/Espace"
            : t("bookButtton")}
        </Button>
        <Button
          onClick={onRegister}
          className="bg-primary w-[115px] h-[40px] text-white hover:scale-105 transition"
        >
          {i18n.language === "fr" ? "Obtenez Votre Badge" : t("Participate")}
        </Button>
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <Space>
              <p className="text-[10px]">
                {i18n.language === "en"
                  ? "English Language"
                  : "French Language"}
              </p>
              <GlobeIcon />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <GlobeIcon />
          </a>
        </Dropdown>
        <div onClick={showDrawer}>
          <MenuIcon />
        </div>
      </div>

      <Drawer title="Menu" onClose={onClose} open={open}>
        <div className="flex flex-col items-center gap-[20px]">
          <a
            onClick={onClose}
            className="text-[14px]  w-full text-center"
            href="#top"
          >
            {t("Home")}
          </a>
          <a
            onClick={onClose}
            className="text-[14px] w-full text-center"
            href="#partners"
          >
            {t("Sponsors")}
          </a>
          <a
            onClick={onClose}
            className="text-[14px] w-full text-center"
            href="/"
          >
            {t("firstEditionLink", { defaultValue: "1st Edition" })}
          </a>
          <Button
            type="primary"
            ghost
            onClick={(e) => {
              e.preventDefault();
              onBook();
              onClose();
            }}
            className="w-full h-[40px]"
          >
            {i18n.language === "fr"
              ? "Obtenez Votre Stand/Espace"
              : t("bookButtton")}
          </Button>
          <Button
            onClick={() => {
              onRegister();
              onClose();
            }}
            className="bg-primary w-full h-[40px] text-white"
          >
            {i18n.language === "fr" ? "Obtenez Votre Badge" : t("Participate")}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SecondEditionNavBar;
