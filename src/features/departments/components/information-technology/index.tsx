import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Clock,
  BookOpen,
  Users,
  Target,
  Award,
  CheckCircle,
  Code,
  Smartphone,
  Cpu,
  Globe,
  Shield,
} from "lucide-react";

const InformationTechnology = () => {
  const { t } = useTranslation("informationTechnology");

  return (
    <div className="min-h-screen mt-10 bg-background-surface md:mt-20 lg:mt-24">
      <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header Section */}
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

        {/* Training Objectives Section */}
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

        {/* Specific Objectives Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex items-center mb-4 sm:mb-6">
            <Users className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-secondary" />
            <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
              {t("graduationRequirements")}
            </h2>
          </div>

          <p className="mb-4 text-sm sm:mb-6 sm:text-base text-text-secondary">
            {t("trainingObjectives.specific.introduction")}
          </p>

          {/* Political & Ethical Qualities */}
          <div className="mb-6 sm:mb-8">
            <h3 className="flex items-center mb-3 text-lg font-semibold sm:mb-4 sm:text-xl text-text-primary">
              <Shield className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-primary" />
              {t("ethicalQualities")}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 border-l-4 rounded-lg shadow-sm sm:p-4 border-primary bg-background-subtle shadow-primary-light">
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("trainingObjectives.specific.ethicalQualities.eq1")}
                </p>
              </div>
              <div className="p-3 border-l-4 rounded-lg shadow-sm sm:p-4 border-primary bg-background-subtle shadow-primary-light">
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("trainingObjectives.specific.ethicalQualities.eq2")}
                </p>
              </div>
            </div>
          </div>

          {/* Knowledge */}
          <div className="mb-6 sm:mb-8">
            <h3 className="flex items-center mb-3 text-lg font-semibold sm:mb-4 sm:text-xl text-text-primary">
              <BookOpen className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-secondary" />
              {t("knowledgeInfo")}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div
                  key={item}
                  className="p-3 border-l-4 rounded-lg shadow-sm sm:p-4 border-secondary bg-background-subtle shadow-secondary-light"
                >
                  <p className="text-sm sm:text-base text-text-secondary ">
                    {t(`trainingObjectives.specific.knowledge.kn${item}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="mb-6 sm:mb-8">
            <h3 className="flex items-center mb-3 text-lg font-semibold sm:mb-4 sm:text-xl text-text-primary">
              <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
              {t("technicalSkills")}
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 border rounded-lg sm:p-6 border-border-primary bg-background-subtle">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
                  <h4 className="text-sm font-semibold sm:text-base text-text-primary">
                    {t(
                      "trainingObjectives.specific.skills.s1_softwareEngineer_title"
                    )}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("trainingObjectives.specific.skills.s1_softwareEngineer")}
                </p>
              </div>

              <div className="p-4 border rounded-lg sm:p-6 border-border-primary bg-background-subtle">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Smartphone className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
                  <h4 className="text-sm font-semibold sm:text-base text-text-primary">
                    {t(
                      "trainingObjectives.specific.skills.s2_mobileEngineer_title"
                    )}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("trainingObjectives.specific.skills.s2_mobileEngineer")}
                </p>
              </div>

              <div className="p-4 border rounded-lg sm:p-6 border-border-primary bg-background-subtle">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Cpu className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-accent" />
                  <h4 className="text-sm font-semibold sm:text-base text-text-primary">
                    {t(
                      "trainingObjectives.specific.skills.s3_embeddedEngineer_title"
                    )}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("trainingObjectives.specific.skills.s3_embeddedEngineer")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Section */}
        <div className="p-4 mb-6 shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle rounded-2xl border-border-primary">
          <div className="flex items-center mb-4 sm:mb-6">
            <Globe className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-accent" />
            <h2 className="text-xl font-bold sm:text-2xl text-text-primary">
              {t("admissionDetails.admissionInfo")}
            </h2>
          </div>

          <div className="p-3 border rounded-lg sm:p-4 bg-background-subtle border-border-primary">
            <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
              {t("admissionDetails.targetApplicants")}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-4 text-white shadow-xl sm:p-6 lg:p-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
          <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
            {t("graduationRequirementsDetails.title")}
          </h2>
          <p className="text-sm leading-relaxed sm:text-base text-white/90">
            {t("knowledgeReference.outcomeReference")}
          </p>

          <div className="p-3 mt-4 rounded-lg sm:p-4 sm:mt-6 bg-white/10">
            <p className="text-sm sm:text-base text-white/90">
              {t("graduationRequirementsDetails.details")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationTechnology;
