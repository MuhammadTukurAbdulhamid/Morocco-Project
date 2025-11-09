import { useTranslation } from "react-i18next";

const faqKeys = [
  { question: "faq1", answer: "faq1ans" },
  { question: "faq2", answer: "faq2ans" },
  { question: "faq3", answer: "faq3ans" },
  { question: "faq4", answer: "faq4ans" },
];

const SecondEditionFAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="faq"
      className="w-full flex flex-col items-center py-20 bg-white/80"
    >
      <h2 className="text-2xl font-bold text-primary mb-6">{t("FAQ")}</h2>
      <div className="w-full max-w-2xl">
        {faqKeys.map(({ question, answer }) => (
          <details
            key={question}
            className="mb-4 border rounded-lg p-4 bg-silver/40"
          >
            <summary className="font-semibold cursor-pointer">
              {t(question)}
            </summary>
            <p className="mt-2 text-gray-700">{t(answer)}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default SecondEditionFAQ;

