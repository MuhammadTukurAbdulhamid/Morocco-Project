import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function RelatedArticles({ onBook }: { onBook: () => void }) {
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
  
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    enquiryType: "Sponsor",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      company: "",
      email: "",
      enquiryType: "Sponsor",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="w-full scroll-mt-20">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="rounded-lg p-8 ">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {getTranslation(
                "WeLoveToHearFromYou",
                "We Love to Hear from You.",
                "Nous aimons avoir de vos nouvelles."
              )}
            </h2>
            <p className="text-gray-600">
              {getTranslation(
                "contactDescription",
                "Have questions? Want to register or sponsor? Reach out to our team in Nigeria or Morocco",
                "Des questions ? Vous souhaitez vous inscrire ou devenir sponsor ? Contactez notre équipe au Nigeria ou au Maroc"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Office Information */}
            <div className="space-y-6">
              {/* Nigeria Office */}
              <div className="bg-[#AAD4791A] shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {getTranslation(
                    "NigeriaOffice",
                    "Nigeria Office",
                    "Bureau du Nigeria"
                  )}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <EnvironmentOutlined className="text-lg text-gray-600 mt-1" />
                    <span className="text-gray-700">
                      No 1 Garki Layout, Abuja
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneOutlined className="text-lg text-gray-600" />
                    <span className="text-gray-700">+234 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailOutlined className="text-lg text-gray-600" />
                    <span className="text-gray-700 text-sm">
                      info@nigeria-moroccobusinessweek.com
                    </span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition"
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
              </div>

              {/* Morocco Office */}
              <div className="bg-[#F6CECE2B] rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {getTranslation(
                    "MoroccoOffice",
                    "Morocco Office",
                    "Bureau du Maroc"
                  )}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <EnvironmentOutlined className="text-lg text-gray-600 mt-1" />
                    <span className="text-gray-700">
                      No 1 Garki Layout, Abuja
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneOutlined className="text-lg text-gray-600" />
                    <span className="text-gray-700">+234 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailOutlined className="text-lg text-gray-600" />
                    <span className="text-gray-700">
                      moroccobusinessweek.com
                    </span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition"
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
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {getTranslation(
                  "SendUsAMessage",
                  "Send Us a message",
                  "Envoyez-nous un message"
                )}
              </h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation("FullName", "Full Name", "Nom complet")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getTranslation(
                        "CompanyOrganization",
                        "Company/organization",
                        "Entreprise/organisation"
                      )}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ABC Company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getTranslation(
                        "EmailAddress",
                        "Email Address",
                        "Adresse e-mail"
                      )}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@domain.net"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation(
                      "EnquiryType",
                      "Enquiry Type",
                      "Type de demande"
                    )}
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  >
                    <option>
                      {getTranslation("Sponsor", "Sponsor", "Sponsor")}
                    </option>
                    <option>
                      {getTranslation("Register", "Register", "S'inscrire")}
                    </option>
                    <option>
                      {getTranslation(
                        "GeneralInquiry",
                        "General Inquiry",
                        "Demande générale"
                      )}
                    </option>
                    <option>
                      {getTranslation(
                        "Partnership",
                        "Partnership",
                        "Partenariat"
                      )}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation(
                      "YourMessage",
                      "Your message",
                      "Votre message"
                    )}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  {getTranslation("Submit", "Submit", "Soumettre")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-5 pb-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#037145] via-gray-700 to-[#B12833]"></div>

          <div className="relative z-10 text-center py-16 px-8 ">
            <h1 className="text-5xl md:text-4xl text-center font-bold text-white drop-shadow-lg animate-slide-down mb-2">
              <span
                className=""
                style={{
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                NIGERIA-MOROCCO
              </span>{" "}
              <span className="font-extrabold text-white">
                BUSINESS WEEK 2025.
              </span>
            </h1>

            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              {getTranslation(
                "ctaDescription",
                "Be part of this powerful movement. Start today by becoming a sponsor, register to attend to learn.",
                "Faites partie de ce mouvement puissant. Commencez dès aujourd'hui en devenant sponsor, inscrivez-vous pour participer et apprendre."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBook}
                className="bg-white hover:bg-gray-100 text-teal-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                {getTranslation(
                  "RegisterAttend",
                  "Register/ Attend",
                  "S'inscrire / Participer"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}