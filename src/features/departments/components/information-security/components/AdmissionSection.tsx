import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const AdmissionSection = () => {
  const { t } = useTranslation("informationSecurity");

  return (
    <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
      <div className="flex items-center mb-4 sm:mb-6">
        <Globe className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-accent" />
        <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
          {t("admissionInfo.title")}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg sm:p-6 bg-background-subtle border-border-primary">
          <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
            {t("admissionInfo.targetApplicantsTitle")}
          </h3>
          <p className="text-sm sm:text-base text-text-secondary">
            {t("admissionInfo.targetApplicants")}
          </p>
        </div>

        <div className="p-4 border rounded-lg sm:p-6 bg-background-subtle border-border-primary">
          <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
            {t("admissionInfo.admissionMethodTitle")}
          </h3>
          <p className="text-sm sm:text-base text-text-secondary">
            {t("admissionInfo.admissionMethod")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
