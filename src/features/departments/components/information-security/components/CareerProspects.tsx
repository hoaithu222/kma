import {
  Award,
  Code,
  Shield,
  Server,
  Lock,
  Bug,
  Building,
  Lightbulb,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface CareerPath {
  title: string;
  description: string[];
}

const CareerProspects = () => {
  const { t } = useTranslation("informationSecurity");

  const getCareerIcon = (index: number) => {
    const icons = [Shield, Code, Server, Lock, Bug, Building, Lightbulb];
    const IconComponent = icons[index];
    return <IconComponent className="w-6 h-6 text-white md:w-8 md:h-8" />;
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      "from-red-500 to-red-600",
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-orange-500 to-orange-600",
      "from-indigo-500 to-indigo-600",
    ];
    return gradients[index];
  };

  const careerPaths = [
    "securityAnalystEngineer",
    "malwareAnalystDigitalForensics",
    "pentestEngineer",
    "cryptographySpecialist",
    "governmentTechnicalOfficer",
    "cloudBlockchainSecuritySpecialist",
  ];

  const careers = careerPaths.map((path) => {
    const career = t(`careerPathsInfoSec.${path}`, {
      returnObjects: true,
    }) as CareerPath;
    return career;
  });

  return (
    <div className="max-w-6xl min-h-screen p-4 mx-auto md:p-6 bg-background-surface">
      {/* Header */}
      <div className="mb-8 text-center md:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg md:w-20 md:h-20 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <Award className="w-8 h-8 text-white md:w-10 md:h-10" />
        </div>
        <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-text-primary">
          {t("careerPathsInfoSec.title")}
        </h3>
        <p className="mb-4 text-text-secondary">
          {t("careerPathsInfoSec.intro")}
        </p>
        <div className="w-16 h-1 mx-auto rounded-full md:w-24 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        {careers.map((career, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 border group bg-card-bg border-border-primary shadow-card hover:shadow-card-hover rounded-xl md:rounded-2xl hover:-translate-y-2 hover:border-primary/20"
          >
            {/* Card Header */}
            <div className="p-4 transition-colors duration-300 border-b md:p-6 border-border-primary group-hover:border-primary/20">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-r ${getGradientClass(index)} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  {getCareerIcon(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold leading-tight transition-colors duration-300 md:text-xl text-text-primary group-hover:text-primary">
                    {career?.title || ""}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 md:p-6">
              <ul className="space-y-2 md:space-y-3">
                {career?.description?.map((desc: string, descIndex: number) => (
                  <li
                    key={descIndex}
                    className="flex items-start space-x-2 transition-transform duration-300 md:space-x-3 group-hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 mt-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="flex-1 text-sm leading-relaxed transition-colors duration-300 md:text-base text-text-secondary group-hover:text-text-primary">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer with Progress Bar */}
            <div className="px-4 pb-4 md:px-6 md:pb-6">
              <div className="h-1 overflow-hidden rounded-full bg-border-muted">
                <div
                  className={`h-full bg-gradient-to-r ${getGradientClass(index)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerProspects;
