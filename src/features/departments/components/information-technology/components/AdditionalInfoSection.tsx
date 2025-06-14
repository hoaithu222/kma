import { useTranslation } from "react-i18next";

const AdditionalInfoSection = () => {
  const { t } = useTranslation("informationTechnology");

  return (
    <div className="p-4 text-white shadow-xl sm:p-6 lg:p-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
      <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
        {t("graduationRequirementsDetails.title")}
      </h2>
      <p className="text-sm leading-relaxed sm:text-base text-white/90">
        {t("knowledgeReference.outcomeReference")}
        <a
          href={
            "https://actvneduvn-my.sharepoint.com/:b:/g/personal/vinhlk_actvn_edu_vn/EdhUZKISlRhIqUf16uHfDUIBat_uWgtq4M-WKlPQjueE9g?e=d6ppvt"
          }
          className="text-white underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("knowledgeReference.outcomeReferenceLink")}
        </a>
      </p>

      <div className="p-3 mt-4 rounded-lg sm:p-4 sm:mt-6 bg-white/10">
        <p className="text-sm sm:text-base text-white/90">
          {t("graduationRequirementsDetails.details")}
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfoSection;
