import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Shield,
  Target,
  Clock,
  Award,
  BookOpen,
  Brain,
  Lightbulb,
  Star,
  ExternalLink,
  CheckCircle,
  Settings,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

const TrainingMasterProgram = () => {
  const { t } = useTranslation("masterProgram");

  const programHighlights = [
    {
      icon: Target,
      title:
        "master_program_information_security.general_introduction.objectives.title",
      key: "master_program_information_security.general_introduction.objectives.general_objective",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Clock,
      title:
        "master_program_information_security.general_introduction.training_duration.title",
      key: "master_program_information_security.general_introduction.training_duration.duration",
      color: "from-secondary to-secondary-dark",
    },
    {
      icon: Award,
      title:
        "master_program_information_security.general_introduction.degree_name.title",
      key: "master_program_information_security.general_introduction.degree_name.vietnamese",
      color: "from-accent to-accent-dark",
    },
  ];

  const careerProspects = [
    {
      icon: Shield,
      title: "admission_contact.organizations_providing_services",
      key: "master_program_information_security.general_introduction.career_prospects.organizations_providing_services",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Network,
      title: "admission_contact.organizations_with_it_networks",
      key: "master_program_information_security.general_introduction.career_prospects.organizations_with_it_networks",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: BookOpen,
      title: "admission_contact.research_teaching_organizations",
      key: "master_program_information_security.general_introduction.career_prospects.organizations_with_it_networks",
      gradient: "from-accent to-accent-dark",
    },
  ];

  const learningOutcomes = [
    {
      category: "knowledge",
      icon: Brain,
      title:
        "master_program_information_security.learning_outcomes.knowledge.title",
      color: "from-primary to-primary-dark",
      items: [
        "comprehensive_understanding",
        "advanced_knowledge",
        "threats_solutions",
      ],
    },
    {
      category: "skills",
      icon: Settings,
      title:
        "master_program_information_security.learning_outcomes.skills.title",
      color: "from-secondary to-secondary-dark",
      items: [
        "writing_presentation",
        "technology_application",
        "system_security_skills",
        "scientific_method_strategic_thinking",
      ],
    },
    {
      category: "qualities_attitude",
      icon: Star,
      title:
        "master_program_information_security.learning_outcomes.qualities_attitude.title",
      color: "from-accent to-accent-dark",
      items: ["responsibility_ethics", "lifelong_learning"],
    },
    {
      category: "competencies",
      icon: Lightbulb,
      title:
        "master_program_information_security.learning_outcomes.competencies.title",
      color: "from-primary to-primary-dark",
      items: [
        "systemic_thinking_self_research",
        "research_application_new_technologies",
        "teaching_phd_potential",
        "expert_roles",
        "project_planning_management",
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-10 rounded-lg sm:mt-16 md:mt-20 lg:mt-24 ">
      <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-8 text-center sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-2xl sm:w-20 sm:h-20 lg:w-24 lg:h-24 sm:mb-8 bg-gradient-to-r from-primary to-primary-dark rounded-3xl">
            <GraduationCap className="w-8 h-8 text-white sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>

          <h2 className="mb-4 text-xl font-bold text-transparent sm:mb-6 sm:text-2xl lg:text-3xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text">
            {t("master_program_information_security.program_title")}
          </h2>

          <div className="p-4 border shadow-xl sm:p-6 lg:p-8 bg-background-subtle backdrop-blur-sm rounded-3xl border-border-primary">
            <div className="flex flex-col items-center justify-center mb-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-lg font-semibold sm:text-xl text-text-primary">
                {t("master_program_information_security.major")}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full sm:px-3 sm:text-sm text-primary bg-primary/10">
                {t("admission_contact.major_code")}:
                {t("master_program_information_security.major_code")}
              </span>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {programHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-4 transition-all duration-300 border shadow-xl sm:p-6 group bg-background-subtle backdrop-blur-sm rounded-2xl border-border-primary hover:shadow-2xl hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${highlight.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold sm:mb-3 sm:text-lg text-text-primary">
                    {t(highlight.title)}
                  </h3>
                  <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                    {t(highlight.key)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Prospects */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="mb-6 text-lg font-bold text-center sm:mb-8 sm:text-xl lg:text-2xl text-text-primary">
            {t(
              "master_program_information_security.general_introduction.career_prospects.title"
            )}
          </h2>

          <div className="p-4 mb-6 border shadow-xl sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle backdrop-blur-sm rounded-3xl border-border-primary">
            <p className="text-base leading-relaxed text-center sm:text-lg text-text-secondary">
              {t(
                "master_program_information_security.general_introduction.career_prospects.introduction"
              )}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
            {careerProspects.map((career, index) => {
              const IconComponent = career.icon;
              return (
                <div
                  key={index}
                  className="relative p-4 overflow-hidden transition-all duration-500 border shadow-xl sm:p-6 group bg-background-subtle backdrop-blur-sm rounded-2xl border-border-primary hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${career.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${career.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="mb-2 text-sm font-bold transition-colors duration-300 sm:mb-3 sm:text-lg text-text-primary group-hover:text-primary">
                    {t(career.title)}
                  </h3>

                  <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                    {t(career.key)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-7xl">
          <h2 className="mb-6 text-xl font-bold text-center sm:mb-8 lg:mb-12 sm:text-2xl lg:text-3xl text-text-primary">
            {t("master_program_information_security.learning_outcomes.title")}
          </h2>

          <div className="p-4 mb-6 border shadow-xl sm:p-6 lg:p-8 sm:mb-8 lg:mb-12 bg-background-subtle backdrop-blur-sm rounded-3xl border-border-primary">
            <p className="text-sm leading-relaxed text-center sm:text-lg text-text-secondary">
              {t(
                "master_program_information_security.learning_outcomes.introduction"
              )}
            </p>
          </div>

          <div className="grid gap-2 sm:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {learningOutcomes.map((outcome) => {
              const IconComponent = outcome.icon;
              return (
                <div
                  key={outcome.category}
                  className="p-2 transition-all duration-500 border shadow-xl md:p-3 lg:p-4 group bg-background-subtle backdrop-blur-sm rounded-2xl border-border-primary hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${outcome.color} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                  </div>

                  <h3 className="mb-3 text-sm font-bold transition-colors duration-300 sm:mb-4 sm:text-xl text-text-primary group-hover:text-primary">
                    {t(outcome.title)}
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {outcome.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                          {t(
                            `master_program_information_security.learning_outcomes.${outcome.category}.${item}`
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-4 text-white shadow-2xl sm:p-6 lg:p-8 bg-gradient-to-r from-primary to-primary-dark rounded-3xl">
            <h3 className="mb-3 text-sm font-bold sm:mb-4 sm:text-xl lg:text-2xl">
              {t("admission_contact.title")}
            </h3>
            <p className="mb-4 text-xs leading-relaxed sm:mb-6 sm:text-sm lg:text-base">
              {t("master_program_information_security.admission_contact.info")}
            </p>
            <Link
              to="https://actvn.edu.vn/News/Detail?NewsId=23314"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold transition-colors duration-300 bg-white rounded-full shadow-lg sm:px-6 sm:py-3 sm:text-sm text-primary hover:bg-background-subtle hover:shadow-xl"
            >
              <span>{t("admission_contact.details_link")}</span>
              <ExternalLink className="w-3 h-3 ml-2 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center space-x-2 text-text-muted">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 delay-100 rounded-full bg-secondary animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 delay-200 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingMasterProgram;
