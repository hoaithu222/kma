import { useTranslation } from "react-i18next";
import { Target, CheckCircle } from "lucide-react";

const TrainingObjectivesSection = () => {
  const { t } = useTranslation("informationTechnology");

  return (
    <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
      <div className="flex items-center mb-4 sm:mb-6">
        <Target className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-primary" />
        <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
          {t("admissionInfo")}
        </h2>
      </div>

      <div className="mb-4 sm:mb-6">
        <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
          {t("trainingObjectives.general.introduction")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex items-start p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary"
          >
            <CheckCircle className="flex-shrink-0 w-4 h-4 mt-1 mr-2 sm:w-5 sm:h-5 sm:mr-3 text-success" />
            <p className="text-sm sm:text-base text-text-secondary">
              {t(`trainingObjectives.general.item${item}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingObjectivesSection;
