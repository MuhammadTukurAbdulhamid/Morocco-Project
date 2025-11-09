import { useCallback, useMemo, useState } from "react";
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

  const handleChangeLanguage = useCallback(
    (lng: string) => () => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const languageOptions: MenuProps["items"] = useMemo(
    () => [
      {
        key: "en",
        label: <span onClick={handleChangeLanguage("en")}>English 🇬🇧</span>,
      },
      {
        key: "fr",
        label: <span onClick={handleChangeLanguage("fr")}>French 🇫🇷</span>,
      },
    ],
    [handleChangeLanguage]
  );

  const desktopLinks = [
    { key: "home", label: t("Home", { defaultValue: "Home" }), href: "#top" },
    {
      key: "about",
      label: t("firstEditionTag", { defaultValue: "About" }),
      href: "#about",
    },
    {
      key: "partners",
      label: t("Partners", { defaultValue: "Partners" }),
      href: "#partners",
    },
    {
      key: "programs",
      label: t("sectorHeading", { defaultValue: "Sectors" }),
      href: "#programs",
    },
    {
      key: "space",
      label: t("exhibitionSpace", { defaultValue: "Book Space" }),
      href: "#space",
    },
    {
      key: "news",
      label: t("newsHeader2", { defaultValue: "News" }),
      href: "#news",
    },
    {
      key: "faq",
      label: t("FAQ", { defaultValue: "FAQ" }),
      href: "#faq",
    },
  ];

  const closeDrawer = () => setOpen(false);

  const renderNavLinks = (variant: "desktop" | "mobile") => (
    <div
      className={
        variant === "desktop"
          ? "flex items-center space-x-6"
          : "flex flex-col items-center gap-4 w-full"
      }
    >
      {desktopLinks.map(({ key, label, href }) => (
        <a
          key={key}
          href={href}
          onClick={variant === "mobile" ? closeDrawer : undefined}
          className={
            variant === "desktop"
              ? "text-sm hover:text-primary transition font-medium"
              : "text-sm w-full text-center hover:text-primary transition"
          }
        >
          {label}
        </a>
      ))}
      <a
        href="/"
        onClick={variant === "mobile" ? closeDrawer : undefined}
        className={
          variant === "desktop"
            ? "text-sm font-semibold text-primary hover:text-primary/80 transition"
            : "text-sm font-semibold text-primary w-full text-center"
        }
      >
        {t("firstEditionLink", { defaultValue: "1st Edition" })}
      </a>
    </div>
  );

  return (
    <div className="nav sticky top-0 z-30 px-5 md:px-20 lg:px-40 py-6 bg-white backdrop-blur-md shadow-md flex items-center justify-between">
      <a href="#top" className="flex items-center justify-center gap-2">
        <span className="text-2xl font-semibold text-primary drop-shadow">
          🇳🇬 NIGERIA-MOROCCO 🇲🇦
        </span>
      </a>

      <div className="hidden xl:flex items-center gap-8">
        {renderNavLinks("desktop")}
        <div className="flex items-center gap-4">
          <Dropdown menu={{ items: languageOptions }}>
            <a
              className="cursor-pointer text-xs"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                {i18n.language === "fr"
                  ? t("frenchLanguageLabel", {
                      defaultValue: "French Language",
                    })
                  : t("englishLanguageLabel", {
                      defaultValue: "English Language",
                    })}
                <GlobeIcon />
              </Space>
            </a>
          </Dropdown>
          <Button
            type="primary"
            ghost
            onClick={(e) => {
              e.preventDefault();
              onBook();
            }}
            className="h-[40px]"
          >
            {i18n.language === "fr"
              ? "Obtenez Votre Stand/Espace"
              : t("bookButtton", { defaultValue: "Book A Space" })}
          </Button>
          <Button
            onClick={onRegister}
            className="bg-primary text-white h-[40px] px-6"
          >
            {i18n.language === "fr"
              ? "Obtenez Votre Badge"
              : t("Participate", { defaultValue: "Participate" })}
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:hidden">
        <Dropdown menu={{ items: languageOptions }}>
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <GlobeIcon />
          </a>
        </Dropdown>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2"
        >
          <MenuIcon />
        </button>
      </div>

      <Drawer title="Menu" placement="right" onClose={closeDrawer} open={open}>
        <div className="flex flex-col items-center gap-5">
          {renderNavLinks("mobile")}
          <Button
            type="primary"
            ghost
            onClick={(e) => {
              e.preventDefault();
              onBook();
              closeDrawer();
            }}
            className="w-full h-[40px]"
          >
            {i18n.language === "fr"
              ? "Obtenez Votre Stand/Espace"
              : t("bookButtton", { defaultValue: "Book A Space" })}
          </Button>
          <Button
            onClick={() => {
              onRegister();
              closeDrawer();
            }}
            className="bg-primary w-full h-[40px] text-white"
          >
            {i18n.language === "fr"
              ? "Obtenez Votre Badge"
              : t("Participate", { defaultValue: "Participate" })}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SecondEditionNavBar;
 