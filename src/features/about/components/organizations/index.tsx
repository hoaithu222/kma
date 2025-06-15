import { useTranslation } from "react-i18next";

const Organizations = () => {
  const { t } = useTranslation("organizations");

  return (
    <div className="container mx-auto mt-12 sm:p-2 md:px-3 md:py-6 lg:px-4 lg:py-10 sm:mt-18 md:mt-24 lg:mt-28">
      <div className="max-w-5xl mx-auto sm:max-w-6xl">
        <h2 className="mb-4 text-xl font-bold text-center text-text-primary sm:text-2xl sm:mb-6 md:text-3xl md:mb-8 lg:text-4xl lg:mb-10">
          {t("academy_name")}
        </h2>

        {/* Organizational Chart */}
        <div className="p-1 mb-6 border rounded-lg shadow-lg border-border-primary bg-background-surface sm:p-4 sm:mb-8 md:p-6 md:mb-10 lg:p-8 lg:mb-12">
          <h2 className="mb-3 text-base font-bold text-center text-text-primary sm:text-lg sm:mb-4 md:text-xl md:mb-6 lg:text-2xl lg:mb-8">
            {t("organizational_chart")}
          </h2>

          {/* Chart Container */}
          <div className="relative overflow-x-auto">
            <div className="min-w-[300px] mx-auto sm:min-w-[380px] md:min-w-[450px] lg:min-w-[800px]">
              {/* Top Level - Hội đồng trường */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <div className="px-3 py-1.5 font-bold text-center transition-transform duration-300 transform rounded-lg shadow-lg text-text-on-primary bg-primary hover:scale-105 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
                  {t("school_council_title")}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary sm:border-l-[6px] sm:border-r-[6px] sm:border-t-[12px] md:border-l-[8px] md:border-r-[8px] md:border-t-[16px] lg:border-l-[12px] lg:border-r-[12px] lg:border-t-[20px]"></div>
              </div>

              {/* Second Level - Ban Giám hiệu and Hội đồng tư vấn quốc tế */}
              <div className="flex flex-col items-center justify-between gap-3 px-2 mb-3 sm:flex-row sm:gap-4 sm:px-4 sm:mb-4 md:mb-6 lg:mb-8">
                <div className="w-full max-w-[150px] px-2 py-1.5 text-sm text-center transition-shadow duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg sm:max-w-[180px] sm:px-3 sm:py-2 sm:text-base md:max-w-[200px] md:px-4 md:py-2.5 lg:px-6 lg:py-3">
                  {t("science_education_council")}
                </div>
                <div className="w-full max-w-[60px] px-2 py-1.5 text-sm font-bold text-center transition-transform duration-300 transform shadow-lg text-text-on-primary bg-secondary-dark rounded-lg hover:scale-105 sm:max-w-[130px] sm:px-3 sm:py-2 sm:text-base md:max-w-[150px] md:px-4 md:py-2.5 lg:px-6 lg:py-3">
                  {t("management_board")}
                </div>
                <div className="w-full max-w-[150px] px-2 py-1.5 text-sm text-center transition-shadow duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg sm:max-w-[180px] sm:px-3 sm:py-2 sm:text-base md:max-w-[200px] md:px-4 md:py-2.5 lg:px-6 lg:py-3">
                  {t("international_advisory_council")}
                </div>
              </div>

              {/* Connecting lines */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <div className="relative w-full h-0 border-t border-border-primary sm:border-t-2">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary sm:border-l-[6px] sm:border-r-[6px] sm:border-t-[12px] md:border-l-[8px] md:border-r-[8px] md:border-t-[16px] lg:border-l-[12px] lg:border-r-[12px] lg:border-t-[20px]"></div>
                </div>
              </div>

              {/* Third Level - Main Departments */}
              <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2 sm:gap-4 md:gap-6 md:mb-6 lg:grid-cols-3 lg:gap-8 lg:mb-8">
                {/* Khối đào tạo */}
                <div className="p-2 transition-shadow duration-300 rounded-lg shadow-lg bg-accent hover:shadow-xl sm:p-3 md:p-4 lg:p-6">
                  <div className="py-1.5 mb-2 font-bold text-center shadow-md text-text-on-accent bg-accent-dark rounded-lg sm:py-2 sm:mb-3 md:py-2.5 md:mb-4 lg:py-3">
                    {t("education_block")}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("information_technology_faculty")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("general_information_security_faculty")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("electronic_information_faculty")}
                    </div>
                  </div>
                </div>

                {/* Khối nghiên cứu */}
                <div className="p-2 transition-shadow duration-300 rounded-lg shadow-lg bg-warning hover:shadow-xl sm:p-3 md:p-4 lg:p-6">
                  <div className="py-1.5 mb-2 font-bold text-center shadow-md text-text-on-accent bg-warning rounded-lg sm:py-2 sm:mb-3 md:py-2.5 md:mb-4 lg:py-3">
                    {t("research_block")}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("cryptography_security_center")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("information_center")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("practice_departments")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("testing_departments")}
                    </div>
                  </div>
                </div>

                {/* Khối phục vụ/hỗ trợ */}
                <div className="p-2 transition-shadow duration-300 rounded-lg shadow-lg bg-success hover:shadow-xl sm:p-3 md:p-4 lg:p-6">
                  <div className="py-1.5 mb-2 font-bold text-center shadow-md text-text-on-accent bg-success rounded-lg sm:py-2 sm:mb-3 md:py-2.5 md:mb-4 lg:py-3">
                    {t("support_block")}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("school_office")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("computing_center")}
                    </div>
                    <div className="px-2 py-1.5 text-sm transition-all duration-300 rounded-lg shadow-md text-text-on-primary bg-secondary hover:shadow-lg hover:transform hover:scale-105 sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 lg:px-4 lg:py-3">
                      {t("innovation_center")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Structure Details */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="p-3 transition-shadow duration-300 border rounded-lg shadow-lg bg-background-elevated border-border-primary hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-primary sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-text-primary sm:text-base md:text-lg lg:text-xl">
                  {t("organizational_structure.introduction")}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
                {t("organizational_structure.introduction_text")}
              </p>
            </div>

            <div className="p-3 transition-shadow duration-300 border rounded-lg shadow-lg bg-background-elevated border-border-primary hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-secondary sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-text-primary sm:text-base md:text-lg lg:text-xl">
                  {t("organizational_structure.faculties.title")}
                </h3>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold rounded-lg shadow-md text-secondary bg-background-subtle sm:w-8 sm:h-8 sm:text-sm sm:mr-3 md:w-10 md:h-10 md:text-base lg:w-12 lg:h-12 lg:text-lg">
                  {t("organizational_structure.faculties.count")}
                </span>
                <span className="pt-0.5 text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
                  {t("organizational_structure.faculties.description")}
                </span>
              </div>
            </div>

            <div className="p-3 transition-shadow duration-300 border rounded-lg shadow-lg bg-background-elevated border-border-primary hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-success sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-text-primary sm:text-base md:text-lg lg:text-xl">
                  {t("organizational_structure.research_centers.title")}
                </h3>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold rounded-lg shadow-md text-success bg-background-subtle sm:w-8 sm:h-8 sm:text-sm sm:mr-3 md:w-10 md:h-10 md:text-base lg:w-12 lg:h-12 lg:text-lg">
                  {t("organizational_structure.research_centers.count")}
                </span>
                <span className="pt-0.5 text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
                  {t("organizational_structure.research_centers.description")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="p-3 transition-shadow duration-300 border rounded-lg shadow-lg bg-background-elevated border-border-primary hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-warning sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-text-primary sm:text-base md:text-lg lg:text-xl">
                  {t("organizational_structure.support_centers.title")}
                </h3>
              </div>
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold rounded-lg shadow-md text-warning bg-background-subtle sm:w-8 sm:h-8 sm:text-sm sm:mr-3 md:w-10 md:h-10 md:text-base lg:w-12 lg:h-12 lg:text-lg">
                  {t("organizational_structure.support_centers.count")}
                </span>
                <span className="pt-0.5 text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
                  {t("organizational_structure.support_centers.description")}
                </span>
              </div>
            </div>

            <div className="p-3 transition-shadow duration-300 border rounded-lg shadow-lg bg-background-elevated border-border-primary hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-accent sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-text-primary sm:text-base md:text-lg lg:text-xl">
                  {t(
                    "organizational_structure.administrative_department.title"
                  )}
                </h3>
              </div>
              <div className="flex items-start mb-2 sm:mb-3 md:mb-4">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold rounded-lg shadow-md text-accent bg-background-subtle sm:w-8 sm:h-8 sm:text-sm sm:mr-3 md:w-10 md:h-10 md:text-base lg:w-12 lg:h-12 lg:text-lg">
                  {t(
                    "organizational_structure.administrative_department.count"
                  )}
                </span>
                <span className="pt-0.5 text-xs font-semibold text-text-primary sm:text-sm md:text-base">
                  {t("organizational_structure.administrative_department.name")}
                </span>
              </div>
              <p className="ml-8 text-xs leading-relaxed text-text-secondary sm:text-sm sm:ml-10 md:text-base md:ml-12 lg:ml-14">
                {t("organizational_structure.administrative_department.role")}
              </p>
            </div>

            <div className="p-3 transition-shadow duration-300 border-2 rounded-lg shadow-lg border-border-primary bg-background-subtle hover:shadow-xl sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-1.5 h-5 mr-2 rounded-full bg-primary sm:w-2 sm:h-6 sm:mr-3 md:h-8 md:mr-4"></div>
                <h3 className="text-sm font-bold text-primary sm:text-base md:text-lg lg:text-xl">
                  {t("school_council.title")}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-text-secondary sm:text-sm md:text-base">
                {t("school_council.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
