import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LearningProgramData } from "./types";
import SemesterCard from "./SemesterCard";
import { Sparkles, BookOpen, TrendingUp } from "lucide-react";

const LearningProgram: React.FC = () => {
  const { t } = useTranslation("informationSecurity");
  const [expandedSemesters, setExpandedSemesters] = useState<
    Record<string, boolean>
  >({});

  const learningProgram = t("programInfo", {
    returnObjects: true,
  }) as LearningProgramData;

  const toggleSemester = (semesterKey: string) => {
    setExpandedSemesters((prev) => ({
      ...prev,
      [semesterKey]: !prev[semesterKey],
    }));
  };

  // Calculate total credits across all semesters
  const totalCredits = Object.entries(learningProgram).reduce(
    (total, [semesterKey, semester]) => {
      let semesterCredits = 0;

      // Add credits from regular courses
      if (semester.courses) {
        semesterCredits += semester.courses.reduce(
          (sum: number, course: { credits: number }) => sum + course.credits,
          0
        );
      }

      // Add credits from compulsory courses
      if (semester.compulsory?.courses) {
        semesterCredits += semester.compulsory.courses.reduce(
          (sum: number, course: { credits: number }) => sum + course.credits,
          0
        );
      }

      // For semesters 7 and 8, only count one specialization's credits
      if (semesterKey === "semester7" || semesterKey === "semester8") {
        // Count only one specialization's credits (whichever is chosen)
        if (semester.informationSystemSecurity?.courses) {
          semesterCredits += semester.informationSystemSecurity.courses.reduce(
            (sum: number, course: { credits: number }) => sum + course.credits,
            0
          );
        } else if (semester.networkSecurityEngineering?.courses) {
          semesterCredits += semester.networkSecurityEngineering.courses.reduce(
            (sum: number, course: { credits: number }) => sum + course.credits,
            0
          );
        } else if (semester.secureSoftwareTechnology?.courses) {
          semesterCredits += semester.secureSoftwareTechnology.courses.reduce(
            (sum: number, course: { credits: number }) => sum + course.credits,
            0
          );
        }
      }

      return total + semesterCredits;
    },
    0
  );

  const totalCourses = Object.values(learningProgram).reduce(
    (total, semester) => {
      let semesterCourses = 0;

      // Count regular courses
      if (semester.courses) {
        semesterCourses += semester.courses.length;
      }

      // Count compulsory courses
      if (semester.compulsory?.courses) {
        semesterCourses += semester.compulsory.courses.length;
      }

      // For semesters 7 and 8, only count one specialization's courses
      if (semester.informationSystemSecurity?.courses) {
        semesterCourses += semester.informationSystemSecurity.courses.length;
      } else if (semester.networkSecurityEngineering?.courses) {
        semesterCourses += semester.networkSecurityEngineering.courses.length;
      } else if (semester.secureSoftwareTechnology?.courses) {
        semesterCourses += semester.secureSoftwareTechnology.courses.length;
      }

      return total + semesterCourses;
    },
    0
  );

  return (
    <div className="min-h-screen bg-background-surface">
      <div className="px-1 py-2 mx-auto space-y-6 sm:px-4 sm:py-8 sm:space-y-8">
        {/* Header Section */}
        <div className="relative overflow-hidden shadow-xl sm:shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl sm:rounded-3xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 -translate-x-1/2 translate-y-1/2 rounded-full sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white/5"></div>

          <div className="relative p-6 sm:p-8 md:p-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-3 mr-3 sm:p-4 sm:mr-4 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-white sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {t("programInfoDetails.title")}
                </h3>
                <p className="text-xs text-blue-100 md:text-base lg:text-lg">
                  {t("programInfoDetails.description")}
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-4 border sm:p-5 md:p-6 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-white/20">
                <div className="flex items-center mb-2 sm:mb-3">
                  <BookOpen className="w-5 h-5 mr-2 text-white sm:w-6 sm:h-6 sm:mr-3" />
                  <span className="text-sm font-medium sm:text-base text-white/80">
                    {t("programInfoDetails.totalCourses")}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {totalCourses}
                </div>
              </div>

              <div className="p-4 border sm:p-5 md:p-6 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-white/20">
                <div className="flex items-center mb-2 sm:mb-3">
                  <TrendingUp className="w-5 h-5 mr-2 text-white sm:w-6 sm:h-6 sm:mr-3" />
                  <span className="text-sm font-medium sm:text-base text-white/80">
                    {t("programInfoDetails.totalCredits")}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {totalCredits}
                </div>
              </div>

              <div className="p-4 border sm:p-5 md:p-6 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-white/20 sm:col-span-2 md:col-span-1">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Sparkles className="w-5 h-5 mr-2 text-white sm:w-6 sm:h-6 sm:mr-3" />
                  <span className="text-sm font-medium sm:text-base text-white/80">
                    {t("programInfoDetails.semesters")}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {Object.keys(learningProgram).length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Semesters Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8">
          {Object.entries(learningProgram).map(
            ([semesterKey, semesterData], index) => (
              <div
                key={semesterKey}
                className="transform transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <SemesterCard
                  semesterKey={semesterKey}
                  semesterData={semesterData}
                  isExpanded={expandedSemesters[semesterKey] || false}
                  onToggle={() => toggleSemester(semesterKey)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningProgram;
