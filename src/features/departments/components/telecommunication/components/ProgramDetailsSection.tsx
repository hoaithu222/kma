import { useTranslation } from "react-i18next";
import { Clock, CreditCard, Award } from "lucide-react";

const ProgramDetailsSection = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="grid grid-cols-1 gap-6 mb-6 sm:gap-8 sm:mb-8 lg:grid-cols-3">
      <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
        <div className="flex items-center mb-4">
          <Clock className="w-8 h-8 mr-3 text-primary" />
          <h3 className="text-xl font-bold text-text-primary">
            {t("programDurationTitle")}
          </h3>
        </div>
        <p className="text-2xl font-bold text-primary">
          {t("programDuration")}
        </p>
      </div>

      <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
        <div className="flex items-center mb-4">
          <CreditCard className="w-8 h-8 mr-3 text-secondary" />
          <h3 className="text-xl font-bold text-text-primary">
            {t("totalCreditsTitle")}
          </h3>
        </div>
        <p className="text-2xl font-bold text-secondary">{t("totalCredits")}</p>
      </div>

      <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
        <div className="flex items-center mb-4">
          <Award className="w-8 h-8 mr-3 text-accent" />
          <h3 className="text-xl font-bold text-text-primary">
            {t("degreeTitle")}
          </h3>
        </div>
        <p className="text-2xl font-bold text-accent">{t("degreeAwarded")}</p>
      </div>
    </div>
  );
};

export default ProgramDetailsSection;
