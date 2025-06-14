import { useTranslation } from "react-i18next";
import { Briefcase, Star } from "lucide-react";

const CareerProspectsSection = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="p-6 mb-6 border shadow-lg sm:p-8 sm:mb-8 bg-background-elevated border-border-primary rounded-xl">
      <div className="flex items-center mb-6">
        <Briefcase className="w-8 h-8 mr-3 text-secondary" />
        <h2 className="text-2xl font-bold text-text-primary">
          {t("trainingObjectives.careerProspects.title")}
        </h2>
      </div>

      <p className="mb-6 leading-relaxed text-text-secondary">
        {t("trainingObjectives.careerProspects.description")}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {(
          t("trainingObjectives.careerProspects.positions", {
            returnObjects: true,
          }) as string[]
        ).map((position: string, index: number) => (
          <div
            key={index}
            className="p-4 border rounded-lg border-border-primary bg-background-subtle"
          >
            <div className="flex items-start space-x-3">
              <Star className="flex-shrink-0 w-5 h-5 mt-1 text-secondary" />
              <p className="text-sm leading-relaxed text-text-secondary">
                {position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerProspectsSection;
