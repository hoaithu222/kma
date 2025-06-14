import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Clock, BookOpen } from "lucide-react";

const HeaderSection = () => {
  const { t } = useTranslation("informationTechnology");

  return (
    <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
      <div className="flex flex-col items-start mb-4 sm:flex-row sm:items-center sm:mb-6">
        <div className="p-2 mb-4 mr-0 rounded-full sm:p-3 sm:mr-4 sm:mb-0 bg-gradient-to-r from-primary to-primary-dark">
          <GraduationCap className="w-6 h-6 text-white sm:w-8 sm:h-8" />
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl text-text-primary">
            {t("programInfo.programName")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            {t("programInfo.specialization")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
          <div className="flex items-center mb-2">
            <Award className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm font-semibold sm:text-base text-text-primary">
              {t("degreeTitle")}
            </span>
          </div>
          <p className="text-sm sm:text-base text-text-secondary">
            {t("programInfo.degreeAwarded")}
          </p>
        </div>

        <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-sm font-semibold sm:text-base text-text-primary">
              {t("programDuration")}
            </span>
          </div>
          <p className="text-sm sm:text-base text-text-secondary">
            {t("programDurationDetails.totalTime")}
          </p>
        </div>

        <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
          <div className="flex items-center mb-2">
            <BookOpen className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
            <span className="text-sm font-semibold sm:text-base text-text-primary">
              {t("programCredits")}
            </span>
          </div>
          <p className="text-sm sm:text-base text-text-secondary">
            {t("programCreditDetails.totalCredits")}
          </p>
        </div>
      </div>

      <div className="p-3 mt-4 border rounded-lg sm:p-4 sm:mt-6 bg-background-subtle border-border-primary">
        <p className="text-sm sm:text-base text-text-secondary">
          {t("programInfo.framework")}
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
