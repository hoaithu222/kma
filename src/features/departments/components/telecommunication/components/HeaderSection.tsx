import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";

const HeaderSection = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="p-6 mb-6 border shadow-lg sm:p-8 sm:mb-8 bg-background-elevated border-border-primary rounded-2xl">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
        </div>
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-text-primary">
          {t("programName")}
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 rounded-lg bg-background-subtle">
            <div className="text-sm font-medium text-primary">
              {t("majorName")}
            </div>
            <div className="text-lg font-bold text-text-primary">
              {t("major")}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-background-subtle">
            <div className="text-sm font-medium text-secondary">
              {t("majorName")}
            </div>
            <div className="text-lg font-bold text-text-primary">
              {t("majorCode")}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-background-subtle">
            <div className="text-sm font-medium text-accent">
              {t("specialization")}
            </div>
            <div className="text-lg font-bold text-text-primary">
              {t("specialization")}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-background-subtle">
            <div className="text-sm font-medium text-primary">
              {t("trainingType")}
            </div>
            <div className="text-lg font-bold text-text-primary">
              {t("trainingType")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
