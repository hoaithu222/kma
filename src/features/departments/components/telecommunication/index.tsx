import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  BookOpen,
  Target,
  Users,
  Briefcase,
  Award,
  Clock,
  CreditCard,
  Star,
} from "lucide-react";

const Telecommunication = () => {
  const { t } = useTranslation("telecommunication");

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-background-surface">
      <div className="max-w-6xl mx-auto mt-6 sm:mt-10 md:mt-16 lg:mt-20">
        {/* Header Section */}
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

        {/* Program Details */}
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
            <p className="text-2xl font-bold text-secondary">
              {t("totalCredits")}
            </p>
          </div>

          <div className="p-6 border shadow-lg bg-background-elevated border-border-primary rounded-xl">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3 text-accent" />
              <h3 className="text-xl font-bold text-text-primary">
                {t("degreeTitle")}
              </h3>
            </div>
            <p className="text-2xl font-bold text-accent">
              {t("degreeAwarded")}
            </p>
          </div>
        </div>

        {/* Training Objectives */}
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

        {/* Admission Information */}
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

        <div className="p-6 mt-8 text-center sm:mt-12 text-text-on-primary bg-gradient-to-r from-primary to-primary-dark rounded-xl">
          <h3 className="mb-2 text-xl font-bold">{t("footer.title")}</h3>
          <p className="text-primary-light">{t("footer.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Telecommunication;
