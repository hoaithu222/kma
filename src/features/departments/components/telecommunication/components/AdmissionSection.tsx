import { useTranslation } from "react-i18next";
import { Users, BookOpen } from "lucide-react";

const AdmissionSection = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
      <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
        <div className="flex items-center mb-4">
          <Users className="w-8 h-8 mr-3 text-accent" />
          <h3 className="text-xl font-bold text-text-primary">
            {t("admissionInfo.targetApplicantsTitle")}
          </h3>
        </div>
        <p className="leading-relaxed text-text-secondary">
          {t("admissionInfo.targetApplicants")}
        </p>
      </div>

      <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
        <div className="flex items-center mb-4">
          <BookOpen className="w-8 h-8 mr-3 text-primary" />
          <h3 className="text-xl font-bold text-text-primary">
            {t("admissionInfo.admissionMethodTitle")}
          </h3>
        </div>
        <p className="leading-relaxed text-text-secondary">
          {t("admissionInfo.admissionMethod")}
        </p>
      </div>
    </div>
  );
};

export default AdmissionSection;
