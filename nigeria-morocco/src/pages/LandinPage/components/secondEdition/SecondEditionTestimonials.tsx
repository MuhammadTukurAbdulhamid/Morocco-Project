import { useTranslation } from "react-i18next";

const testimonials = [
  { id: 1, name: "Amina S., Lagos", key: "testimonial1" },
  { id: 2, name: "Youssef M., Casablanca", key: "testimonial2" },
  { id: 3, name: "Chinedu O., Abuja", key: "testimonial3" },
];

const SecondEditionTestimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="testimonials"
      className="w-full flex flex-col items-center py-20 bg-silver/60"
    >
      <h2 className="text-2xl font-bold text-primary mb-6">
        {t("Testimonial")}
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ id, name, key }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src="/default.png"
              alt={`Testimonial ${id}`}
              className="w-16 h-16 rounded-full mb-3"
            />
            <p className="text-gray-700 italic">{t(key)}</p>
            <span className="mt-2 font-semibold text-primary">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondEditionTestimonials;

