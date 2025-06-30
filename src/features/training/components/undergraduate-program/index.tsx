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
import { useEffect } from "react";
import { useUnder } from "../../hooks/useUnder";
import masterProgramData from "../../data/masterProgram.json";

const TrainingUndergraduateProgram = () => {
  const { under, getUnder, isLoading, error } = useUnder();

  // Type guard to check if content is an object
  const isContentObject = (
    content: string | Record<string, any>
  ): content is Record<string, any> => {
    return typeof content === "object" && content !== null;
  };

  // Get undergraduate program data from API or use fallback from JSON file
  const getUndergraduateProgramData = () => {
    // If API call was successful and returned valid data, use it
    if (under?.content && isContentObject(under.content)) {
      return under.content as any;
    }
    // Otherwise use fallback data from JSON file
    return masterProgramData.undergraduate_programs as any;
  };

  const undergraduateContent = getUndergraduateProgramData();

  useEffect(() => {
    getUnder();
  }, []);

  const programIcons = {
    "An toàn thông tin": Shield,
    "Công nghệ thông tin": Code,
    "Kỹ thuật Điện tử – Viễn thông": Cpu,
  };

  const programGradients = {
    "An toàn thông tin": {
      gradient: "from-primary to-primary-dark",
      hoverGradient: "hover:from-primary-dark hover:to-primary",
    },
    "Công nghệ thông tin": {
      gradient: "from-secondary to-secondary-dark",
      hoverGradient: "hover:from-secondary-dark hover:to-secondary",
    },
    "Kỹ thuật Điện tử – Viễn thông": {
      gradient: "from-accent to-accent-dark",
      hoverGradient: "hover:from-accent-dark hover:to-accent",
    },
  };

  const navigate = useNavigate();

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="container px-2 py-4 mx-auto mt-4 min-h-screen rounded-lg sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 md:mt-8 lg:mt-16">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="mx-auto mb-4 w-8 h-8 rounded-full border-4 animate-spin border-primary border-t-transparent"></div>
            <p className="text-text-secondary">Đang tải dữ liệu...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if there's an error
  if (error) {
    return (
      <div className="container px-2 py-4 mx-auto mt-4 min-h-screen rounded-lg sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 md:mt-8 lg:mt-16">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <p className="mb-4 text-red-500">Có lỗi xảy ra khi tải dữ liệu</p>
            <button
              onClick={() => getUnder()}
              className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-primary-dark"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Check if we have valid data before rendering
  if (
    !undergraduateContent ||
    (!undergraduateContent.heading && !undergraduateContent.title)
  ) {
    return (
      <div className="container px-2 py-4 mx-auto mt-4 min-h-screen rounded-lg sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 md:mt-8 lg:mt-16">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <p className="text-text-secondary">Không có dữ liệu</p>
          </div>
        </div>
      </div>
    );
  }

  // Check if this is the new API structure (has core_majors) or old structure
  const isNewStructure =
    undergraduateContent.core_majors &&
    Array.isArray(undergraduateContent.core_majors);

  return (
    <div className="container px-2 py-4 mx-auto mt-4 min-h-screen rounded-lg sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 md:mt-8 lg:mt-16">
      <div className="px-1 py-6 mx-auto max-w-7xl sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-15">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <div className="inline-flex justify-center items-center mb-6 w-16 h-16 bg-gradient-to-r rounded-2xl shadow-lg sm:w-20 sm:h-20 sm:mb-8 from-primary to-primary-dark">
            <GraduationCap className="w-8 h-8 text-white sm:w-10 sm:h-10" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r sm:mb-6 sm:text-4xl lg:text-5xl from-primary to-primary-dark">
            {undergraduateContent?.title || "Chương trình đào tạo"}
          </h2>

          {/* Program Introduction */}
          <div className="p-4 mb-6 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 sm:mb-8 bg-background-subtle border-border-primary">
            <h2 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl lg:text-3xl text-text-primary">
              {undergraduateContent?.title || "Chương trình đào tạo"}
            </h2>
            <p className="text-base leading-relaxed sm:text-lg text-text-secondary">
              {undergraduateContent?.heading ||
                undergraduateContent?.introduction ||
                "Đang tải dữ liệu..."}
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isNewStructure
              ? // New API structure with core_majors array
                undergraduateContent.core_majors?.map(
                  (major: any, index: number) => {
                    const IconComponent =
                      programIcons[
                        major.major_name as keyof typeof programIcons
                      ] || Shield;
                    const gradients =
                      programGradients[
                        major.major_name as keyof typeof programGradients
                      ] || programGradients["An toàn thông tin"];

                    return (
                      <div
                        key={index}
                        className="relative p-4 rounded-3xl border shadow-xl backdrop-blur-sm transition-all duration-500 sm:p-6 lg:p-8 group bg-background-subtle border-border-primary hover:shadow-2xl hover:-translate-y-2"
                      >
                        {/* Icon Header */}
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradients.gradient} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                        </div>

                        {/* Program Title */}
                        <h3 className="mb-3 text-lg font-bold transition-colors duration-300 sm:mb-4 sm:text-xl text-text-primary group-hover:text-primary">
                          {major.major_name || "Đang tải..."}
                        </h3>

                        {/* Major Code */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center mb-2 sm:mb-3">
                            <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            <span className="font-semibold text-text-secondary">
                              {undergraduateContent?.major_title || "Mã ngành"}
                            </span>
                            <span className="px-2 py-1 ml-auto text-xs font-medium rounded-full bg-primary/10 text-primary">
                              {major.major_code || "N/A"}
                            </span>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center mb-2 sm:mb-3">
                            <BookOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <span className="font-semibold text-text-secondary">
                              {major.specialization_title ||
                                undergraduateContent?.specialization_title ||
                                "Chuyên ngành"}
                            </span>
                          </div>
                          <div className="pl-6 space-y-2 sm:pl-7">
                            {major.specializations?.map(
                              (spec: string, specIndex: number) => (
                                <div
                                  key={specIndex}
                                  className="flex items-start space-x-2"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-xs leading-relaxed sm:text-sm text-text-secondary">
                                    {spec}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Details Link */}
                        <div className="pt-3 border-t sm:pt-4 border-border-primary">
                          <button
                            className={`inline-flex items-center cursor-pointer text-xs sm:text-sm font-medium bg-gradient-to-r ${gradients.gradient} ${gradients.hoverGradient} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 group-hover:shadow-lg`}
                            onClick={() => navigate("/departments")}
                          >
                            <span>Chi tiết xem tại đây</span>
                            <ExternalLink className="ml-2 w-3 h-3 transition-transform duration-300 sm:w-4 sm:h-4 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )
              : // Old structure with individual program objects
                [
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
                    hoverGradient:
                      "hover:from-secondary-dark hover:to-secondary",
                  },
                  {
                    key: "electronics_telecommunications",
                    icon: Cpu,
                    gradient: "from-accent to-accent-dark",
                    hoverGradient: "hover:from-accent-dark hover:to-accent",
                  },
                ].map((program) => {
                  const IconComponent = program.icon;
                  const programData = undergraduateContent?.[program.key];

                  return (
                    <div
                      key={program.key}
                      className="relative p-4 rounded-3xl border shadow-xl backdrop-blur-sm transition-all duration-500 sm:p-6 lg:p-8 group bg-background-subtle border-border-primary hover:shadow-2xl hover:-translate-y-2"
                    >
                      {/* Icon Header */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${program.gradient} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white sm:w-8 sm:h-8" />
                      </div>

                      {/* Program Title */}
                      <h3 className="mb-3 text-lg font-bold transition-colors duration-300 sm:mb-4 sm:text-xl text-text-primary group-hover:text-primary">
                        {programData?.title || "Đang tải..."}
                      </h3>

                      {/* Bachelor Program */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          <span className="font-semibold text-text-secondary">
                            Cử nhân
                          </span>
                          <Clock className="ml-auto w-3 h-3 sm:w-4 sm:h-4 text-text-muted" />
                        </div>
                        <p className="pl-6 text-xs leading-relaxed sm:text-sm text-text-secondary sm:pl-7">
                          {programData?.bachelor || "Đang tải..."}
                        </p>
                      </div>

                      {/* Engineer Program */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <BookOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                          <span className="font-semibold text-text-secondary">
                            Kỹ sư
                          </span>
                          <Clock className="ml-auto w-3 h-3 sm:w-4 sm:h-4 text-text-muted" />
                        </div>
                        <p className="pl-6 text-xs leading-relaxed sm:text-sm text-text-secondary sm:pl-7">
                          {programData?.engineer || "Đang tải..."}
                        </p>
                      </div>

                      {/* Details Link */}
                      <div className="pt-3 border-t sm:pt-4 border-border-primary">
                        <button
                          className={`inline-flex items-center cursor-pointer text-xs sm:text-sm font-medium bg-gradient-to-r ${program.gradient} ${program.hoverGradient} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 group-hover:shadow-lg`}
                          onClick={() => navigate("/departments")}
                        >
                          <span>{programData?.details_link || "Chi tiết"}</span>
                          <ExternalLink className="ml-2 w-3 h-3 transition-transform duration-300 sm:w-4 sm:h-4 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>

        {/* Admission Information - Only show for new structure */}
        {isNewStructure && undergraduateContent?.admission_information && (
          <div className="mx-auto mt-8 max-w-4xl sm:mt-12 lg:mt-16">
            <div className="p-4 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 bg-background-subtle border-border-primary">
              <h3 className="mb-4 text-lg font-bold text-center sm:text-xl lg:text-2xl text-text-primary">
                {undergraduateContent?.admission_information_title ||
                  "Thông tin tuyển sinh"}
              </h3>
              <p className="text-base leading-relaxed text-center sm:text-lg text-text-secondary">
                {undergraduateContent?.admission_information}
              </p>
            </div>
          </div>
        )}

        {/* Student Achievements - Only show for new structure */}
        {isNewStructure && undergraduateContent?.student_achievements && (
          <div className="mx-auto mt-8 max-w-6xl sm:mt-12 lg:mt-16">
            <div className="p-4 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 bg-background-subtle border-border-primary">
              <h3 className="mb-4 text-lg font-bold text-center sm:text-xl lg:text-2xl text-text-primary">
                {undergraduateContent?.student_achievements
                  ?.student_achievements_title ||
                  undergraduateContent?.student_achievements_title ||
                  "Thành tích sinh viên"}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-center sm:text-lg text-text-secondary">
                {undergraduateContent?.student_achievements?.introduction}
              </p>
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {undergraduateContent?.student_achievements?.list_of_awards?.map(
                  (award: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start p-3 space-x-3 rounded-xl bg-background-elevated"
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
                        {award}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Conclusion - Only show for new structure */}
        {isNewStructure && undergraduateContent?.conclusion && (
          <div className="mx-auto mt-8 max-w-4xl text-center sm:mt-12 lg:mt-16">
            <div className="p-4 rounded-3xl border shadow-xl backdrop-blur-sm sm:p-6 lg:p-8 bg-background-subtle border-border-primary">
              <h3 className="mb-4 text-lg font-bold sm:text-xl lg:text-2xl text-text-primary">
                {undergraduateContent?.conclusion_title || "Kết luận"}
              </h3>
              <p className="text-base leading-relaxed sm:text-lg text-text-secondary">
                {undergraduateContent?.conclusion}
              </p>
            </div>
          </div>
        )}

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
