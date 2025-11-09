import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const partnerLogos = {
  auspices: [
    {
      src: "Embassy.png",
      alt: "Embassy",
      style: { maxHeight: 180, maxWidth: 420 },
    },
  ],
  official: [
    {
      src: "fenagri.png",
      alt: "fenagri",
      style: { maxHeight: 120, maxWidth: 380 },
    },
  ],
  partnership: [
    {
      src: "casa.png",
      alt: "casa",
      style: { maxHeight: 120, maxWidth: 380 },
    },
  ],
  institutional: [
    { src: "fmiti.png", alt: "fmiti" },
    { src: "MSD.jpg", alt: "MSD" },
    { src: "NADDC.png", alt: "NADDC" },
  ],
  strategic: [
    { src: "ram.png", alt: "ram" },
    { src: "HIESL.png", alt: "HIESL" },
    { src: "jed.jpg", alt: "jed" },
    { src: "farmcreed.jpg", alt: "farmcreed" },
  ],
};

const SecondEditionPartners = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      id="partners"
      className="flex flex-col items-center p-10 pb-20 bg-gradient-to-br from-white via-blue-50 to-silver/30 rounded-2xl shadow-lg mx-2 md:mx-20 my-10"
    >
      <h1 className="text-2xl text-fontColor font-[700] mb-6 tracking-wide uppercase letter-spacing-2">
        {t("Partners")}
      </h1>
      <p className="uppercase text-primary font-semibold mb-2 text-center text-sm md:text-base tracking-wider">
        Under the Auspices of the Nigeria Embassy Rabat
      </p>
      <div className="flex justify-center items-center mb-6 w-full">
        {partnerLogos.auspices.map(({ src, alt, style }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="rounded-2xl shadow-xl bg-white/90 p-3 border-4 border-primary hover:scale-105 hover:shadow-xl mx-auto block"
            style={{ ...style, width: "100%", objectFit: "contain" }}
          />
        ))}
      </div>
      <p className="uppercase text-red-700 font-semibold mt-2 mb-2 text-center text-sm md:text-base tracking-wider">
        Official Partner Agro Industry
      </p>
      <div className="grid place-items-center justify-center items-center grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-[70%] md:px-32 mt-2 mb-6">
        {partnerLogos.official.map(({ src, alt, style }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="rounded-xl shadow-lg bg-white/90 p-3 border-2 border-blue-200 hover:scale-105 hover:shadow-xl transition-all duration-200 mx-auto block"
            style={{ ...style, width: "100%", objectFit: "contain" }}
          />
        ))}
      </div>
      <p className="uppercase text-blue-700 font-semibold mt-2 mb-2 text-center text-sm md:text-base tracking-wider">
        In partnership with
      </p>
      <div className="grid place-items-center justify-center items-center grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-[70%] md:px-32 mt-2 mb-6">
        {partnerLogos.partnership.map(({ src, alt, style }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="rounded-xl shadow-lg bg-white/90 p-3 border-2 border-blue-200 hover:scale-105 hover:shadow-xl transition-all duration-200 mx-auto block"
            style={{
              ...(style ?? {}),
              maxHeight: style?.maxHeight ?? 120,
              maxWidth: style?.maxWidth ?? 380,
              width: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </div>
      <p className="uppercase text-gray-700 font-semibold mt-2 mb-2 text-center text-sm md:text-base tracking-wider">
        Institutional Partners
      </p>
      <div className="grid place-items-center justify-center items-center grid-cols-2 md:grid-cols-3 gap-5 w-auto md:px-32 mt-2 mb-6">
        {partnerLogos.institutional.map(({ src, alt }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="rounded-lg shadow-md bg-white/80 p-2 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 mx-auto block"
            style={{
              maxHeight: 90,
              maxWidth: 220,
              width: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </div>
      <p className="uppercase text-gray-700 font-semibold mt-2 mb-2 text-center text-sm md:text-base tracking-wider">
        Strategic Partners
      </p>
      <div className="grid place-items-center justify-center items-center grid-cols-2 md:grid-cols-4 gap-5 w-auto md:px-32 mt-2">
        {partnerLogos.strategic.map(({ src, alt }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="rounded-lg shadow-md bg-white/80 p-2 border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 mx-auto block"
            style={{
              maxHeight: 90,
              maxWidth: 220,
              width: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </div>
  );
});

SecondEditionPartners.displayName = "SecondEditionPartners";

export default SecondEditionPartners;

