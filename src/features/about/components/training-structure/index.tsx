import { SchoolIcon } from "lucide-react";
import { useEffect } from "react";
import { useTrainingStructure } from "../../hooks/useTrainingStructure";
import trainingStructureData from "../../data/trainingStructure.json";
import { useHome } from "@/features/home/hooks/useHook";

const TrainingStructure = () => {
  const { trainingStructure, getTrainingStructure } = useTrainingStructure();
  const { page } = useHome();
  // Type guard to check if content is an object
  const isContentObject = (
    content: string | Record<string, any>
  ): content is Record<string, any> => {
    return typeof content === "object" && content !== null;
  };

  // Get training structure data from API or use fallback from JSON file
  const getTrainingStructureData = () => {
    // If API call was successful and returned valid data, use it
    if (
      trainingStructure?.content &&
      isContentObject(trainingStructure.content)
    ) {
      return trainingStructure.content;
    }
    if (page.length > 0) {
      return page[2].content as Record<string, any>;
    }
    // Otherwise use fallback data from JSON file
    return trainingStructureData;
  };

  const trainingContent = getTrainingStructureData();

  useEffect(() => {
    getTrainingStructure();
  }, []);

  return (
    <div className="container p-3 mt-16 md:px-2 md:py-4 lg:px-4 lg:py-8 md:mt-18 lg:mt-28">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-bold text-text-primary sm:text-2xl">
          {trainingContent.heading}
        </h2>

        {/* Core Majors */}
        <div className="grid gap-2 sm:gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {trainingContent.core_majors.map((major: any, _index: number) => (
            <div
              key={major.major_code}
              className="p-4 rounded-lg border shadow-md transition-shadow sm:p-6 bg-background-elevated border-border-primary hover:shadow-lg"
            >
              <div className="mb-2 lg:mb-4">
                <h3 className="mb-2 text-lg font-semibold text-primary sm:text-xl">
                  {major.major_name}
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-primary bg-background-subtle">
                  {trainingContent.major_title}: {major.major_code}
                </span>
              </div>

              <div>
                <h4 className="mb-1 text-sm font-medium tracking-wide uppercase lg:mb-3 text-text-secondary">
                  {trainingContent.specialization_title}:
                </h4>
                <ul className="space-y-2">
                  {major.specializations.map(
                    (spec: string, specIndex: number) => (
                      <li key={specIndex} className="flex items-start">
                        <SchoolIcon className="mr-2 w-4 h-4 text-primary" />
                        <span className="text-sm leading-relaxed text-text-secondary">
                          {spec}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Information */}
      <div className="p-2 mb-4 rounded-lg sm:p-4 bg-background-subtle">
        <h3 className="mb-1 text-base font-semibold text-text-primary sm:text-lg">
          {trainingContent.admission_information_title}
        </h3>
        <p className="leading-relaxed text-text-secondary">
          {trainingContent.admission_information}
        </p>
      </div>

      {/* Student Achievements */}
      <div className="p-4 mb-8 rounded-lg sm:p-6 bg-background-subtle">
        <h3 className="mb-4 text-base font-semibold text-text-primary sm:text-lg">
          {trainingContent.student_achievements_title}
        </h3>
        <p className="mb-2 leading-relaxed lg:mb-4 text-text-secondary">
          {trainingContent.student_achievements.introduction}
        </p>

        <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
          {trainingContent.student_achievements.list_of_awards.map(
            (award: string, index: number) => (
              <div
                key={index}
                className="flex items-start p-3 rounded-md shadow-sm sm:p-4 bg-background-elevated"
              >
                <div className="flex flex-shrink-0 justify-center items-center mr-3 w-8 h-8 rounded-full bg-accent-light">
                  <span className="text-sm font-bold text-accent-foreground">
                    🏆
                  </span>
                </div>
                <span className="text-sm leading-relaxed text-text-secondary">
                  {award}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Conclusion */}
      <div className="p-2 rounded-lg sm:p-4 bg-background-subtle">
        <h3 className="mb-3 text-base font-semibold text-text-primary sm:text-lg">
          {trainingContent.conclusion_title}
        </h3>
        <p className="italic leading-relaxed text-text-secondary">
          {trainingContent.conclusion}
        </p>
      </div>
    </div>
  );
};

export default TrainingStructure;
