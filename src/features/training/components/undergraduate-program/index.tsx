import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Shield,
  Code,
  Cpu,
  Award,
  Clock,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrainingUndergraduateProgram = () => {
  const { t } = useTranslation("undergraduateProgram");

  const programs = [
    {
      key: "information_security",
      icon: Shield,
      gradient: "from-primary to-primary-dark",
      hoverGradient: "hover:from-primary-dark hover:to-primary",
    },
    {
      key: "information_technology",
      icon: Code,
      gradient: "from-secondary to-secondary-dark",
      hoverGradient: "hover:from-secondary-dark hover:to-secondary",
    },
    {
      key: "electronics_telecommunications",
      icon: Cpu,
      gradient: "from-accent to-accent-dark",
      hoverGradient: "hover:from-accent-dark hover:to-accent",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="container min-h-screen px-2 py-4 mx-auto mt-4 rounded-lg shadow-md sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 bg-background-surface md:mt-8 lg:mt-12">
      <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-8 text-center sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg sm:w-20 sm:h-20 sm:mb-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
            <GraduationCap className="w-8 h-8 text-white sm:w-10 sm:h-10" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text">
            {t("title")}
          </h2>

          {/* Program Title */}
          <div className="p-4 mb-6 border shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle backdrop-blur-sm rounded-3xl border-border-primary">
            <h2 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl lg:text-3xl text-text-primary">
              {t("undergraduate_programs.title")}
            </h2>
            <p className="text-base leading-relaxed sm:text-lg text-text-secondary">
              {t("undergraduate_programs.introduction")}
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.key}
                  className="relative p-4 transition-all duration-500 border shadow-xl sm:p-6 lg:p-8 group bg-background-subtle backdrop-blur-sm rounded-3xl border-border-primary hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Icon Header */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${program.gradient} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                  </div>

                  {/* Program Title */}
                  <h3 className="mb-3 text-lg font-bold transition-colors duration-300 sm:mb-4 sm:text-xl text-text-primary group-hover:text-primary">
                    {t(`undergraduate_programs.${program.key}.title`)}
                  </h3>

                  {/* Bachelor Program */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Award className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-primary" />
                      <span className="font-semibold text-text-secondary">
                        {t("certificate")}
                      </span>
                      <Clock className="w-3 h-3 ml-auto sm:w-4 sm:h-4 text-text-muted" />
                    </div>
                    <p className="pl-6 text-xs leading-relaxed sm:text-sm text-text-secondary sm:pl-7">
                      {t(`undergraduate_programs.${program.key}.bachelor`)}
                    </p>
                  </div>

                  {/* Engineer Program */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <BookOpen className="w-4 h-4 mr-2 sm:w-5 sm:h-5 text-secondary" />
                      <span className="font-semibold text-text-secondary">
                        {t("engineer")}
                      </span>
                      <Clock className="w-3 h-3 ml-auto sm:w-4 sm:h-4 text-text-muted" />
                    </div>
                    <p className="pl-6 text-xs leading-relaxed sm:text-sm text-text-secondary sm:pl-7">
                      {t(`undergraduate_programs.${program.key}.engineer`)}
                    </p>
                  </div>

                  {/* Details Link */}
                  <div className="pt-3 border-t sm:pt-4 border-border-primary">
                    <button
                      className={`inline-flex items-center cursor-pointer text-xs sm:text-sm font-medium bg-gradient-to-r ${program.gradient} ${program.hoverGradient} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 group-hover:shadow-lg`}
                      onClick={() =>
                        navigate(
                          t(`undergraduate_programs.${program.key}.link`)
                        )
                      }
                    >
                      <span>
                        {t(
                          `undergraduate_programs.${program.key}.details_link`
                        )}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-2 transition-transform duration-300 sm:w-4 sm:h-4 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-8 text-center sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center space-x-2 text-text-secondary">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 delay-100 rounded-full bg-secondary animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 delay-200 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingUndergraduateProgram;
