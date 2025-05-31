import { useTranslation } from "react-i18next";
import {
  Shield,
  Network,
  Code,
  Clock,
  BookOpen,
  Target,
  Award,
  CheckCircle,
  Users,
  Globe,
  AlertTriangle,
  Server,
} from "lucide-react";

const InformationSecurity = () => {
  const { t } = useTranslation("informationSecurity");

  return (
    <div className="min-h-screen mt-10 bg-background-surface md:mt-20 lg:mt-24">
      <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex flex-col items-start mb-4 sm:flex-row sm:items-center sm:mb-6">
            <div className="p-2 mb-4 mr-0 rounded-full sm:p-3 sm:mr-4 sm:mb-0 bg-gradient-to-r from-primary to-primary-dark">
              <Shield className="w-6 h-6 text-white sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-bold sm:text-3xl text-text-primary">
                {t("programName")}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary">
                {t("majorName")}:{t("majorCode")}
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
                {t("degreeAwarded")}
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
                {t("programDuration")}
              </p>
            </div>

            <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
              <div className="flex items-center mb-2">
                <BookOpen className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm font-semibold sm:text-base text-text-primary">
                  {t("totalCredits")}
                </span>
              </div>
              <p className="text-sm sm:text-base text-text-secondary">
                {t("totalCredits")}
              </p>
            </div>
          </div>

          <div className="p-3 mt-4 border rounded-lg sm:p-4 sm:mt-6 bg-background-subtle border-border-primary">
            <div className="flex items-center mb-2">
              <Target className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-primary" />
              <span className="text-sm font-semibold sm:text-base text-text-primary">
                <span className="font-semibold text-primary">
                  {t("majorName")}
                </span>
                : {t("majorCode")}
              </span>
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex items-center mb-4 sm:mb-6">
            <Network className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-secondary" />
            <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
              {t("specializations.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <div className="p-4 transition-shadow border rounded-lg sm:p-6 bg-background-subtle border-border-primary hover:shadow-lg">
              <div className="flex items-center mb-3">
                <Server className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-primary" />
                <h3 className="text-sm font-semibold sm:text-base text-text-primary">
                  {t("specializations.KM.A.2.1")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary">KM.A.2.1</p>
            </div>

            <div className="p-4 transition-shadow border rounded-lg sm:p-6 bg-background-subtle border-border-primary hover:shadow-lg">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-secondary" />
                <h3 className="text-sm font-semibold sm:text-base text-text-primary">
                  {t("specializations.KM.A.2.2.1")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary">
                KM.A.2.2.1
              </p>
            </div>

            <div className="p-4 transition-shadow border rounded-lg sm:p-6 bg-background-subtle border-border-primary hover:shadow-lg">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-accent" />
                <h3 className="text-sm font-semibold sm:text-base text-text-primary">
                  {t("specializations.KM.A.2.3.1")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary">
                KM.A.2.3.1
              </p>
            </div>
          </div>
        </div>

        {/* Training Objectives Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex items-center mb-4 sm:mb-6">
            <Target className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-primary" />
            <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
              {t("trainingObjectives.title")}
            </h2>
          </div>

          <p className="mb-6 text-sm leading-relaxed sm:text-base text-text-secondary">
            {t("trainingObjectives.generalObjectives")}
          </p>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-start p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary"
              >
                <CheckCircle className="flex-shrink-0 w-4 h-4 mt-1 mr-2 sm:w-5 sm:h-5 sm:mr-3 text-success" />
                <p className="text-sm sm:text-base text-text-secondary">
                  {t(`trainingObjectives.generalPoints.${item - 1}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Objectives Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex items-center mb-4 sm:mb-6">
            <Users className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-secondary" />
            <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
              {t("trainingObjectives.specificObjectives.title")}
            </h2>
          </div>

          {/* System Security Specialization */}
          <div className="mb-6 sm:mb-8">
            <div className="p-4 border-l-4 rounded-lg sm:p-6 border-primary bg-background-subtle">
              <div className="flex items-center mb-3 sm:mb-4">
                <Server className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-primary" />
                <h3 className="text-lg font-semibold sm:text-xl text-text-primary">
                  {t(
                    "trainingObjectives.specificObjectives.systemSecurity.title"
                  )}
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
                {t(
                  "trainingObjectives.specificObjectives.systemSecurity.description"
                )}
              </p>
            </div>
          </div>

          {/* Network Security Engineering */}
          <div className="mb-6 sm:mb-8">
            <div className="p-4 border-l-4 rounded-lg sm:p-6 border-secondary bg-background-subtle">
              <div className="flex items-center mb-3 sm:mb-4">
                <Network className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-secondary" />
                <h3 className="text-lg font-semibold sm:text-xl text-text-primary">
                  {t(
                    "trainingObjectives.specificObjectives.networkSecurityEngineering.title"
                  )}
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
                {t(
                  "trainingObjectives.specificObjectives.networkSecurityEngineering.description"
                )}
              </p>
            </div>
          </div>

          {/* Secure Software Technology */}
          <div className="mb-6 sm:mb-8">
            <div className="p-4 border-l-4 rounded-lg sm:p-6 border-accent bg-background-subtle">
              <div className="flex items-center mb-3 sm:mb-4">
                <Code className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-accent" />
                <h3 className="text-lg font-semibold sm:text-xl text-text-primary">
                  {t(
                    "trainingObjectives.specificObjectives.secureSoftwareTechnology.title"
                  )}
                </h3>
              </div>
              <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
                {t(
                  "trainingObjectives.specificObjectives.secureSoftwareTechnology.description"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Admission Section */}
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

        {/* Additional Info */}
        <div className="p-4 text-white shadow-xl sm:p-6 lg:p-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-5 h-5 mr-2 text-white sm:w-6 sm:h-6 sm:mr-3" />
            <h2 className="text-xl font-bold sm:text-2xl">
              {t("additionalInfo.title")}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
                {t("additionalInfo.graduationRequirementsTitle")}
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                {t("graduationRequirements")}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
                {t("additionalInfo.outcomeReferenceTitle")}
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                {t("outcomeReference")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSecurity;
