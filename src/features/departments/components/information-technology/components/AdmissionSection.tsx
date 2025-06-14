import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const AdmissionSection = () => {
  const { t } = useTranslation("informationTechnology");

  return (
    <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
      <div className="flex items-center mb-4 sm:mb-6">
        <Globe className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-accent" />
        <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
          {t("admissionDetails.admissionInfo")}
        </h2>
      </div>

      <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
        <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
          {t("admissionDetails.targetApplicants")}
        </p>
      </div>
    </div>
  );
};

export default AdmissionSection;
