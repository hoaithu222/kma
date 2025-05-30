import { SchoolIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const TrainingStructure = () => {
  const { t } = useTranslation("trainingStructure");

  return (
    <div className="container px-4 py-8 mx-auto mt-10 md:mt-18 lg:mt-28">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-bold text-text-primary sm:text-2xl">
          {t("heading")}
        </h2>

        {/* Core Majors */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {(t("core_majors", { returnObjects: true }) as any[]).map(
            (major, _index) => (
              <div
                key={major.major_code}
                className="p-4 transition-shadow border rounded-lg shadow-md sm:p-6 bg-background-elevated border-border-primary hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl">
                    {major.major_name}
                  </h3>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-primary bg-background-subtle">
                    {t("major_title")}: {major.major_code}
                  </span>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-medium tracking-wide uppercase text-text-secondary">
                    {t("specialization_title")}:
                  </h4>
                  <ul className="space-y-2 ">
                    {major.specializations.map(
                      (spec: string, specIndex: number) => (
                        <li key={specIndex} className="flex items-start ">
                          <SchoolIcon className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm leading-relaxed text-text-secondary">
                            {spec}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Admission Information */}
      <div className="p-4 mb-8 rounded-lg sm:p-6 bg-background-subtle">
        <h3 className="mb-3 text-base font-semibold text-text-primary sm:text-lg">
          {t("admission_information_title")}
        </h3>
        <p className="leading-relaxed text-text-secondary">
          {t("admission_information")}
        </p>
      </div>

      {/* Student Achievements */}
      <div className="p-4 mb-8 rounded-lg sm:p-6 bg-background-subtle">
        <h3 className="mb-4 text-base font-semibold text-text-primary sm:text-lg">
          {t("student_achievements_title")}
        </h3>
        <p className="mb-4 leading-relaxed text-text-secondary">
          {t("student_achievements.introduction")}
        </p>

        <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
          {(
            t("student_achievements.list_of_awards", {
              returnObjects: true,
            }) as string[]
          ).map((award, index) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-md shadow-sm sm:p-4 bg-background-elevated"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-accent-light">
                <span className="text-sm font-bold text-accent-foreground">
                  🏆
                </span>
              </div>
              <span className="text-sm leading-relaxed text-text-secondary">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="p-4 rounded-lg sm:p-6 bg-background-subtle">
        <h3 className="mb-3 text-base font-semibold text-text-primary sm:text-lg">
          {t("conclusion_title")}
        </h3>
        <p className="italic leading-relaxed text-text-secondary">
          {t("conclusion")}
        </p>
      </div>
    </div>
  );
};

export default TrainingStructure;
