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
  const { t } = useTranslation();
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
    <div className="w-full ">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="rounded-lg p-8 ">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("WeLoveToHearFromYou", {
                defaultValue: "We Love to Hear from You.",
              })}
            </h2>
            <p className="text-gray-600">
              {t("contactDescription", {
                defaultValue:
                  "Have questions? Want to register or sponsor? Reach out to our team in Nigeria or Morocco",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Office Information */}
            <div className="space-y-6">
              {/* Nigeria Office */}
              <div className="bg-[#AAD4791A] shadow-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("NigeriaOffice", { defaultValue: "Nigeria Office" })}
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
                  {t("MoroccoOffice", { defaultValue: "Morocco Office" })}
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
                {t("SendUsAMessage", { defaultValue: "Send Us a message" })}
              </h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("FullName", { defaultValue: "Full Name" })}
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
                      {t("CompanyOrganization", {
                        defaultValue: "Company/organization",
                      })}
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
                      {t("EmailAddress", { defaultValue: "Email Address" })}
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
                    {t("EnquiryType", { defaultValue: "Enquiry Type" })}
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  >
                    <option>{t("Sponsor", { defaultValue: "Sponsor" })}</option>
                    <option>
                      {t("Register", { defaultValue: "Register" })}
                    </option>
                    <option>
                      {t("GeneralInquiry", { defaultValue: "General Inquiry" })}
                    </option>
                    <option>
                      {t("Partnership", { defaultValue: "Partnership" })}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("YourMessage", { defaultValue: "Your message" })}
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
                  {t("Submit", { defaultValue: "Submit" })}
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
              {t("ctaDescription", {
                defaultValue:
                  "Be part of this powerful movement. Start today by becoming a sponsor, register to attend to learn.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBook}
                className="bg-white hover:bg-gray-100 text-teal-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                {t("RegisterAttend", { defaultValue: "Register/ Attend" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}