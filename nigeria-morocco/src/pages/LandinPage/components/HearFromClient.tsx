import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = useMemo(
    () => [
      {
        quote: t("testimonial1", {
          defaultValue:
            "A truly world-class event. The networking opportunities were amazing!",
        }),
        name: "Amina S.",
        location: "Lagos",
        avatar: "profile.svg",
      },
      {
        quote: t("testimonial2", {
          defaultValue:
            "We found new partners and clients. Highly recommended for any business.",
        }),
        name: "Youssef M.",
        location: "Casablanca",
        avatar: "profile.svg",
      },
      {
        quote: t("testimonial3", {
          defaultValue:
            "Excellent organization and great speakers. Looking forward to next year!",
        }),
        name: "Oluwade O.",
        location: "Abuja",
        avatar: "profile.svg",
      },
      {
        quote: t("testimonial1", {
          defaultValue:
            "A truly world-class event. The networking opportunities were amazing!",
        }),
        name: "Amina S.",
        location: "Lagos",
        avatar: "profile.svg",
      },
      {
        quote: t("testimonial2", {
          defaultValue:
            "We found new partners and clients. Highly recommended for any business.",
        }),
        name: "Youssef M.",
        location: "Casablanca",
        avatar: "profile.svg",
      },
      {
        quote: t("testimonial3", {
          defaultValue:
            "Excellent organization and great speakers. Looking forward to next year!",
        }),
        name: "Oluwade O.",
        location: "Abuja",
        avatar: "profile.svg",
      },
    ],
    [t]
  );

  return (
    <div className="w-full bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t("HearFromClients", { defaultValue: "Hear from Clients" })}
          </h2>
          <p className="text-3xl font-bold text-gray-900">
            {t("ThatTrustUs", { defaultValue: "That Trust Us" })}
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-sm transition-shadow duration-200"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <img src="quoteup.svg" alt="" />
              </div>

              {/* Quote Text */}
              <p className="text-[#202020] font-regular text-sm mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-md">
                    {testimonial.name}
                  </p>
                  <p className="text-[#202020] text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
