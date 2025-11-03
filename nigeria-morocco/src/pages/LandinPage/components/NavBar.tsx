import React, { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../../../components/GlobeIcon";
import MenuIcon from "./MenuIcon";
import { Drawer } from "antd";

interface Props {
    onRegister: () => void;
    onBook: () => void;
}

const NavBar: React.FC<Props> = ({ onRegister, onBook }) => {
    const { t, i18n } = useTranslation();
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

    return (
        <div className="nav sticky top-0 z-30 py-8 px-5 md:px-20 lg:px-30 min-h-20 p-0 bg-white backdrop-blur-md shadow-md flex items-center justify-between">
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


            <div className="hidden xl:flex items-center space-x-6 whitespace-nowrap">
                <a className="text-md hover:text-primary transition font-medium" href="/"> {t("About")}</a>
                <a className="text-md hover:text-primary transition font-medium" href="#partners"> {t("Sector")} </a>
                <a className="text-md hover:text-primary transition font-medium" href="#partners"> {t("Sponsors & Partner")} </a>
                <a className="text-md hover:text-primary transition font-medium" href="#partners"> {t("Updates")} </a>
                <a className="text-md hover:text-primary transition font-medium" href="#partners"> {t("Contact")} </a>
                {i18n?.language === "fr" ? (
                    <>
                        <Button type="primary" ghost onClick={(e) => { e.preventDefault(); onBook(); }} className="h-[40px] hover:scale-105 transition">
                            Obtenez Votre Stand/Espace
                        </Button>
                        <Button onClick={onRegister} className="bg-primary h-[40px] text-white hover:scale-105 transition">Obtenez Votre Badge</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={onRegister} className="bg-primary px-6  h-[40px] text-white hover:scale-105 transition">{t("Participate")}</Button>
                    </>
                )}
                <Dropdown menu={{ items }}>
                    <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
                        <Space>
                            <p className="text-[10px]">{i18n.language == "en" ? "English Language" : "French Language"}</p>
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

            <Drawer title="Menu" onClose={onClose} open={open}>
                <div className="flex flex-col items-center gap-[20px]">
                    <a onClick={onClose} className="text-[14px]  w-full text-center" href="/">{t("Home")}</a>
                    <a onClick={onClose} className="text-[14px] w-full text-center" href="#partners">{t("Sponsors")}</a>
                    {i18n?.language === "fr" ? (
                        <>
                            <Button type="primary" ghost onClick={(e) => { e.preventDefault(); onBook(); }} className="w-full h-[40px]">Obtenez Votre Stand/Espace</Button>
                            <Button onClick={onRegister} className="bg-primary px-6 h-[40px] text-white">Obtenez Votre Badge</Button>
                        </>
                    ) : (
                        <>
                            <Button type="primary" ghost onClick={(e) => { e.preventDefault(); onBook(); }} className="w-full h-[40px]">Book A Space</Button>
                            <Button onClick={onRegister} className="bg-primary px-6 h-[40px] text-white">Participate</Button>
                        </>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default NavBar;
