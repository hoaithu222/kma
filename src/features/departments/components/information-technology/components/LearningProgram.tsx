import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LearningProgramData } from "./types";
import { SemesterCard } from "./SemesterCard";
import { Sparkles, BookOpen, TrendingUp } from "lucide-react";
import Empty from "@/foundation/components/empty/Empty";

export const LearningProgram: React.FC = () => {
  const { t } = useTranslation("informationTechnology");
  const [expandedSemesters, setExpandedSemesters] = useState<
    Record<string, boolean>
  >({});

  const learningProgram = t("learningProgram", {
    returnObjects: true,
  }) as LearningProgramData;

  // Add validation check
  if (!learningProgram || typeof learningProgram !== "object") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-surface">
        <Empty title="Không tìm thấy dữ liệu" />
      </div>
    );
  }

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
          (sum, course) => sum + course.credits,
          0
        );
      }

      // Add credits from compulsory courses
      if (semester.compulsory?.courses) {
        semesterCredits += semester.compulsory.courses.reduce(
          (sum, course) => sum + course.credits,
          0
        );
      }

      // For semesters 8 and 9, only count one track's credits
      if (semesterKey === "semester8" || semesterKey === "semester9") {
        // Count only embedded track credits (or mobile track, whichever is chosen)
        if (semester.embeddedTrack?.courses) {
          semesterCredits += semester.embeddedTrack.courses.reduce(
            (sum, course) => sum + course.credits,
            0
          );
        }
      } else {
        // For other semesters, count all tracks
        if (semester.embeddedTrack?.courses) {
          semesterCredits += semester.embeddedTrack.courses.reduce(
            (sum, course) => sum + course.credits,
            0
          );
        }
        if (semester.mobileTrack?.courses) {
          semesterCredits += semester.mobileTrack.courses.reduce(
            (sum, course) => sum + course.credits,
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

      // For semesters 8 and 9, only count one track's courses
      if (semester.embeddedTrack?.courses) {
        semesterCourses += semester.embeddedTrack.courses.length;
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
                  {t("learningProgramDetails.title")}
                </h3>
                <p className="text-xs text-blue-100 md:text-base lg:text-lg">
                  Chương trình đào tạo chi tiết theo từng học kỳ
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-4 border sm:p-5 md:p-6 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-white/20">
                <div className="flex items-center mb-2 sm:mb-3">
                  <BookOpen className="w-5 h-5 mr-2 text-white sm:w-6 sm:h-6 sm:mr-3" />
                  <span className="text-sm font-medium sm:text-base text-white/80">
                    Tổng môn học
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
                    Tổng tín chỉ
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
                    Học kỳ
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
