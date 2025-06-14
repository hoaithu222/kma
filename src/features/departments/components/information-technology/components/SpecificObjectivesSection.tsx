import { useTranslation } from "react-i18next";
import { Users, Shield, BookOpen, Code, Smartphone, Cpu } from "lucide-react";

const SpecificObjectivesSection = () => {
  const { t } = useTranslation("informationTechnology");

  return (
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
  );
};

export default SpecificObjectivesSection;
