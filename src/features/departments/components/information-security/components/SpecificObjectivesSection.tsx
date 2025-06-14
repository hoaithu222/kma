import { useTranslation } from "react-i18next";
import { Users, Server, Network, Code } from "lucide-react";

const SpecificObjectivesSection = () => {
  const { t } = useTranslation("informationSecurity");

  return (
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
              {t("trainingObjectives.specificObjectives.systemSecurity.title")}
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
  );
};

export default SpecificObjectivesSection;
