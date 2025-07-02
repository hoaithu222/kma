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
import { useEffect } from "react";
import { useMaster } from "../../hooks/useMaster";
import masterProgramData from "../../data/masterProgram.json";
import { useHome } from "@/features/home/hooks/useHook";

const TrainingMasterProgram = () => {
  const { master, getMaster, isLoading, error } = useMaster();
  const { page } = useHome();
  // Type guard to check if content is an object
  const isContentObject = (
    content: string | Record<string, any>
  ): content is Record<string, any> => {
    return typeof content === "object" && content !== null;
  };

  // Get master program data from API or use fallback from JSON file
  const getMasterProgramData = () => {
    // If API call was successful and returned valid data, use it
    if (master?.content && isContentObject(master.content)) {
      return master.content.master_program_information_security;
    }
    if (page.length > 0) {
      return page[5].content as Record<string, any>;
    }
    // Otherwise use fallback data from JSON file
    return masterProgramData.master_program_information_security;
  };

  const masterContent = getMasterProgramData();

  useEffect(() => {
    getMaster();
  }, []);

  const programHighlights = [
    {
      icon: Target,
      title:
        masterContent?.general_introduction?.objectives?.title || "Mục tiêu",
      key:
        masterContent?.general_introduction?.objectives?.general_objective ||
        "Đang tải...",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Clock,
      title:
        masterContent?.general_introduction?.training_duration?.title ||
        "Thời gian",
      key:
        masterContent?.general_introduction?.training_duration?.duration ||
        "Đang tải...",
      color: "from-secondary to-secondary-dark",
    },
    {
      icon: Award,
      title:
        masterContent?.general_introduction?.degree_name?.title || "Văn bằng",
      key:
        masterContent?.general_introduction?.degree_name?.vietnamese ||
        "Đang tải...",
      color: "from-accent to-accent-dark",
    },
  ];

  const careerProspects = [
    {
      icon: Shield,
      title: "Tổ chức cung cấp dịch vụ ATTT",
      key:
        masterContent?.general_introduction?.career_prospects
          ?.organizations_providing_services || "Đang tải...",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Network,
      title: "Doanh nghiệp có hệ thống IT",
      key:
        masterContent?.general_introduction?.career_prospects
          ?.organizations_with_it_networks || "Đang tải...",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: BookOpen,
      title: "Tổ chức có nghiên cứu, giảng dạy về ATTT",
      key:
        masterContent?.general_introduction?.career_prospects
          ?.research_teaching_organizations || "Đang tải...",
      gradient: "from-accent to-accent-dark",
    },
  ];

  const learningOutcomes = [
    {
      category: "knowledge",
      icon: Brain,
      title: masterContent?.learning_outcomes?.knowledge?.title || "Kiến thức",
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
      title: masterContent?.learning_outcomes?.skills?.title || "Kỹ năng",
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
        masterContent?.learning_outcomes?.qualities_attitude?.title ||
        "Phẩm chất",
      color: "from-accent to-accent-dark",
      items: ["responsibility_ethics", "lifelong_learning"],
    },
    {
      category: "competencies",
      icon: Lightbulb,
      title:
        masterContent?.learning_outcomes?.competencies?.title || "Năng lực",
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

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="mt-10 min-h-screen rounded-lg sm:mt-16 md:mt-20 lg:mt-24">
        <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <div className="mx-auto mb-4 w-8 h-8 rounded-full border-4 animate-spin border-primary border-t-transparent"></div>
              <p className="text-text-secondary">Đang tải dữ liệu...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if there's an error
  if (error) {
    return (
      <div className="mt-10 min-h-screen rounded-lg sm:mt-16 md:mt-20 lg:mt-24">
        <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <p className="mb-4 text-red-500">Có lỗi xảy ra khi tải dữ liệu</p>
              <button
                onClick={() => getMaster()}
                className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-primary-dark"
              >
                Thử lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Check if we have valid data before rendering
  if (!masterContent || !masterContent.program_title) {
    return (
      <div className="mt-10 min-h-screen rounded-lg sm:mt-16 md:mt-20 lg:mt-24">
        <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <p className="text-text-secondary">Không có dữ liệu</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 min-h-screen rounded-lg sm:mt-16 md:mt-20 lg:mt-24">
      <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-5xl text-center sm:mb-12 lg:mb-16">
          <div className="inline-flex justify-center items-center mb-6 w-16 h-16 bg-gradient-to-r rounded-3xl shadow-2xl sm:w-20 sm:h-20 lg:w-24 lg:h-24 sm:mb-8 from-primary to-primary-dark">
            <GraduationCap className="w-8 h-8 text-white sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>

          <h2 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r sm:mb-6 sm:text-2xl lg:text-3xl from-primary to-primary-dark">
            {masterContent?.program_title || "Chương trình đào tạo Thạc sĩ"}
          </h2>

          <div className="p-4 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 bg-background-subtle border-border-primary">
            <div className="flex flex-col justify-center items-center mb-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-lg font-semibold sm:text-xl text-text-primary">
                {masterContent?.major || "An toàn thông tin"}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full sm:px-3 sm:text-sm text-primary bg-primary/10">
                Mã ngành: {masterContent?.major_code || "8480202"}
              </span>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="mx-auto mb-8 max-w-6xl sm:mb-12 lg:mb-16">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {programHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-300 sm:p-6 group bg-background-subtle border-border-primary hover:shadow-2xl hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${highlight.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold sm:mb-3 sm:text-lg text-text-primary">
                    {highlight.title}
                  </h3>
                  <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                    {highlight.key}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Prospects */}
        <div className="mx-auto mb-8 max-w-6xl sm:mb-12 lg:mb-16">
          <h2 className="mb-6 text-lg font-bold text-center sm:mb-8 sm:text-xl lg:text-2xl text-text-primary">
            {masterContent?.general_introduction?.career_prospects?.title ||
              "Khả năng và vị trí công tác"}
          </h2>

          <div className="p-4 mb-6 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle border-border-primary">
            <p className="text-base leading-relaxed text-center sm:text-lg text-text-secondary">
              {masterContent?.general_introduction?.career_prospects
                ?.introduction || "Đang tải dữ liệu..."}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
            {careerProspects.map((career, index) => {
              const IconComponent = career.icon;
              return (
                <div
                  key={index}
                  className="overflow-hidden relative p-4 rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-500 sm:p-6 group bg-background-subtle border-border-primary hover:shadow-2xl hover:-translate-y-2"
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
                    {career.title}
                  </h3>

                  <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                    {career.key}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mx-auto mb-8 max-w-7xl sm:mb-12 lg:mb-16">
          <h2 className="mb-6 text-xl font-bold text-center sm:mb-8 lg:mb-12 sm:text-2xl lg:text-3xl text-text-primary">
            {masterContent?.learning_outcomes?.title || "Chuẩn đầu ra"}
          </h2>

          <div className="p-4 mb-6 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 sm:mb-8 lg:mb-12 bg-background-subtle border-border-primary">
            <p className="text-sm leading-relaxed text-center sm:text-lg text-text-secondary">
              {masterContent?.learning_outcomes?.introduction ||
                "Đang tải dữ liệu..."}
            </p>
          </div>

          <div className="grid gap-2 sm:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {learningOutcomes.map((outcome) => {
              const IconComponent = outcome.icon;
              return (
                <div
                  key={outcome.category}
                  className="p-2 rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-500 md:p-3 lg:p-4 group bg-background-subtle border-border-primary hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${outcome.color} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                  </div>

                  <h3 className="mb-3 text-sm font-bold transition-colors duration-300 sm:mb-4 sm:text-xl text-text-primary group-hover:text-primary">
                    {outcome.title}
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {outcome.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                          {(masterContent?.learning_outcomes as any)?.[
                            outcome.category
                          ]?.[item] || "Đang tải..."}
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="p-4 text-white bg-gradient-to-r rounded-3xl shadow-2xl sm:p-6 lg:p-8 from-primary to-primary-dark">
            <h3 className="mb-3 text-sm font-bold sm:mb-4 sm:text-xl lg:text-2xl">
              Thông tin tuyển sinh
            </h3>
            <p className="mb-4 text-xs leading-relaxed sm:mb-6 sm:text-sm lg:text-base">
              {masterContent?.admission_contact?.info || "Đang tải dữ liệu..."}
            </p>
            <Link
              to="https://actvn.edu.vn/News/Detail?NewsId=23314"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-white rounded-full shadow-lg transition-colors duration-300 sm:px-6 sm:py-3 sm:text-sm text-primary hover:bg-background-subtle hover:shadow-xl"
            >
              <span>Xem chi tiết tại</span>
              <ExternalLink className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
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
