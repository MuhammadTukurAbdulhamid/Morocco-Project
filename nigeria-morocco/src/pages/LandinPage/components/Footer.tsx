import { useTranslation } from "react-i18next";
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="bg-black text-white border-t-4 ">
      <div className=" mx-auto py-10 flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20 lg:px-40 gap-10">
        {/* Left Column - Brand */}
        <div className="flex flex-col gap-5 md:w-[40%]">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/ng.png"
              alt="Nigeria flag"
              className="w-4 h-3 rounded-sm shadow-sm"
            />
            <h1 className="font-bold text-2xl flex items-center gap-2">
              Nigeria - Morocco
              <img
                src="https://flagcdn.com/w40/ma.png"
                alt="Morocco flag"
                className="w-4 h-3 rounded-sm shadow-sm"
              />
            </h1>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            {t("FooterDescription", {
              defaultValue:
                "Advancing Nigeria - Morocco Trade & Investments through Economic Integration & Implementation.",
            })}
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <a
              href="#"
              className="w-8 h-8 border border-gray-300 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition"
            >
              <TwitterOutlined className="text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center hover:opacity-90 transition"
            >
              <InstagramOutlined className="text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition"
            >
              <LinkedinOutlined className="text-white" />
            </a>
          </div>
        </div>

        {/* Right Column - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 flex-1">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2">
              {t("QuickLinks", { defaultValue: "Quick Links" })}
            </h2>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("About")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Sectors", { defaultValue: "Sectors" })}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Sponsors & Partner")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Updates")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Contact")}
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-base mb-2">
              {t("Resources", { defaultValue: "Resources" })}
            </h2>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("TravelGuide", { defaultValue: "Travel Guide" })}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Contact")}
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {t("Page", { defaultValue: "Page" })}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-5 md:px-20 lg:px-40">
          <p className="text-xs text-gray-400 text-center md:text-left">
            {t("Copyright", {
              defaultValue:
                "© 2025 Nigeria-Morocco Business Week. All rights reserved.",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
