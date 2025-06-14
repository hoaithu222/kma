import { useTranslation } from "react-i18next";
import { Network, Server, Code } from "lucide-react";

const SpecializationsSection = () => {
  const { t } = useTranslation("informationSecurity");

  return (
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
          <p className="text-xs sm:text-sm text-text-secondary">KM.A.2.2.1</p>
        </div>

        <div className="p-4 transition-shadow border rounded-lg sm:p-6 bg-background-subtle border-border-primary hover:shadow-lg">
          <div className="flex items-center mb-3">
            <Code className="w-5 h-5 mr-2 sm:w-6 sm:h-6 text-accent" />
            <h3 className="text-sm font-semibold sm:text-base text-text-primary">
              {t("specializations.KM.A.2.3.1")}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary">KM.A.2.3.1</p>
        </div>
      </div>
    </div>
  );
};

export default SpecializationsSection;
