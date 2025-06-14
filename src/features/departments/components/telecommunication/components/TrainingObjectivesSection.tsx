import { useTranslation } from "react-i18next";
import { Target } from "lucide-react";

const TrainingObjectivesSection = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="p-6 mb-6 border shadow-lg sm:p-8 sm:mb-8 bg-background-elevated border-border-primary rounded-xl">
      <div className="flex items-center mb-6">
        <Target className="w-8 h-8 mr-3 text-primary" />
        <h2 className="text-2xl font-bold text-text-primary">
          {t("trainingObjectives.general.introduction")}
        </h2>
      </div>

      <div className="mb-6">
        <p className="leading-relaxed text-text-secondary">
          {t("trainingObjectives.general.introduction")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {(
            t("trainingObjectives.general.points", {
              returnObjects: true,
            }) as string[]
          )
            .slice(0, 3)
            .map((point: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-primary/10">
                  <span className="p-2 text-sm font-bold rounded-full text-primary">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {point}
                </p>
              </div>
            ))}
        </div>
        <div className="space-y-4">
          {(
            t("trainingObjectives.general.points", {
              returnObjects: true,
            }) as string[]
          )
            .slice(3)
            .map((point: string, index: number) => (
              <div key={index + 3} className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">
                    {index + 4}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {point}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingObjectivesSection;
