import React, { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../../../components/GlobeIcon";
import MenuIcon from "./MenuIcon";
import { Drawer } from "antd";

interface Props {
  onRegister: () => void;
  onBook: () => void;
  onNavigateSecondEdition: () => void;
  onNavigateFirstEdition: () => void;
  currentEdition?: "first" | "second";
}

const NavBar: React.FC<Props> = ({
  onRegister,
  onBook,
  onNavigateSecondEdition,
  onNavigateFirstEdition,
  currentEdition = "first",
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

  const items = [
    {
      key: "1",
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
      key: "2",
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

  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const isFirstEdition = currentEdition === "first";
  const isSecondEdition = currentEdition === "second";

  const renderEditionLinks = (variant: "desktop" | "mobile") => {
    const handleSecondEditionClick = () => {
      if (!isSecondEdition) {
        onNavigateSecondEdition();
        if (variant === "mobile") {
          onClose();
        }
      }
    };

    const handleFirstEditionClick = () => {
      if (!isFirstEdition) {
        onNavigateFirstEdition();
        if (variant === "mobile") {
          onClose();
        }
      }
    };

    return (
      <div
        className={
          variant === "desktop"
            ? "flex items-center gap-4"
            : "w-full flex flex-col gap-3"
        }
      >
        <button
          onClick={handleSecondEditionClick}
          className={
            variant === "desktop"
              ? `text-sm font-semibold ${
                  isSecondEdition
                    ? "text-primary underline underline-offset-4"
                    : "text-gray-700 hover:text-primary"
                }`
              : `w-full text-center py-2 rounded-md border ${
                  isSecondEdition
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-gray-700 hover:text-primary"
                }`
          }
          type="button"
          aria-current={isSecondEdition ? "page" : undefined}
        >
          {getTranslation("secondEditionLink", "2nd Edition", "2ème édition")}
        </button>
        <button
          onClick={handleFirstEditionClick}
          className={
            variant === "desktop"
              ? `text-sm font-semibold ${
                  isFirstEdition
                    ? "text-primary underline underline-offset-4"
                    : "text-gray-700 hover:text-primary"
                }`
              : `w-full text-center py-2 rounded-md border ${
                  isFirstEdition
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-gray-700 hover:text-primary"
                }`
          }
          type="button"
          aria-current={isFirstEdition ? "page" : undefined}
        >
          {getTranslation("firstEditionLink", "1st Edition", "1ère édition")}
        </button>
      </div>
    );
  };

  return (
    <div
      key={`navbar-${i18n.language}`}
      className="nav sticky top-0 z-30 py-8 px-5 md:px-20 lg:px-30 min-h-20 p-0 bg-white backdrop-blur-md shadow-md flex items-center justify-between"
    >
      <div className="flex items-center justify-center gap-2 whitespace-nowrap">
        <img
          src="https://flagcdn.com/w40/ng.png"
          alt="Nigeria flag"
          className="w-4 h-3 rounded-sm shadow-sm"
        />

        <h1 className="text-xl md:text-2xl font-semibold text-black flex items-center gap-2 drop-shadow">
          Nigeria - Morocco
        </h1>

        <img
          src="https://flagcdn.com/w40/ma.png"
          alt="Morocco flag"
          className="w-5 h-4 md:w-4 md:h-3 rounded-sm shadow-sm object-cover"
        />
      </div>

      <div className="hidden xl:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 flex-wrap xl:flex-nowrap">
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#about"
        >
          {getTranslation("About", "About", "À propos")}
        </a>
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#sectors"
        >
          {getTranslation("Sector", "Sector", "Secteur")}
        </a>
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#speakers"
        >
          {getTranslation(
            "Sponsors & Partner",
            "Sponsors & Partner",
            "Sponsors et Partenaires"
          )}
        </a>
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#updates"
        >
          {getTranslation("Updates", "Updates", "Mises à jour")}
        </a>
        <a
          className="text-[13px] lg:text-[14px] font-medium hover:text-primary transition whitespace-nowrap"
          href="#contact"
        >
          {getTranslation("Contact", "Contact", "Contact")}
        </a>
        {renderEditionLinks("desktop")}
        <Button
          type="primary"
          ghost
          onClick={(e) => {
            e.preventDefault();
            onBook();
          }}
          className="h-[40px] text-[12px] lg:text-sm hover:scale-105 transition whitespace-nowrap"
        >
          {getTranslation("bookButtton", "Book A Space", "Réserver un espace")}
        </Button>
        <Button
          onClick={onRegister}
          className="bg-primary px-6 h-[40px] text-[12px] lg:text-sm text-white hover:scale-105 transition whitespace-nowrap"
        >
          {getTranslation("Participate", "Participate", "Participer")}
        </Button>
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <Space>
              <p className="text-[10px]">
                {i18n.language == "en"
                  ? t("EnglishLanguage", { defaultValue: "English Language" })
                  : t("FrenchLanguage", { defaultValue: "French Language" })}
              </p>
              <GlobeIcon />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="flex items-center gap-4 xl:hidden">
        <Dropdown menu={{ items }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <GlobeIcon />
          </a>
        </Dropdown>
        <div onClick={showDrawer}>
          <MenuIcon />
        </div>
      </div>

      <Drawer
        title={getTranslation("Menu", "Menu", "Menu")}
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col items-center gap-[20px]">
          <a
            onClick={onClose}
            className="text-[14px]  w-full text-center"
            href="#about"
          >
            {getTranslation("Home", "Home", "Accueil")}
          </a>
          <a
            onClick={onClose}
            className="text-[14px] w-full text-center"
            href="#speakers"
          >
            {getTranslation("Sponsors", "Sponsors", "Sponsors")}
          </a>
          <div className="w-full flex flex-col gap-2">
            {renderEditionLinks("mobile")}
          </div>
          <Button
            type="primary"
            ghost
            onClick={(e) => {
              e.preventDefault();
              onBook();
            }}
            className="w-full h-[40px]"
          >
            {getTranslation(
              "bookButtton",
              "Book A Space",
              "Réserver un espace"
            )}
          </Button>
          <Button
            onClick={onRegister}
            className="bg-primary px-6 h-[40px] text-white"
          >
            {getTranslation("Participate", "Participate", "Participer")}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
