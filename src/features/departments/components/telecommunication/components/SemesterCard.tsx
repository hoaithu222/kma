import React from "react";
import {
  Target,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Semester } from "./types";
import { CourseCard } from "./CourseCard";
import Empty from "@/foundation/components/empty/Empty";

interface SemesterCardProps {
  semesterData: Semester;
  isExpanded: boolean;
  onToggle: () => void;
}

export const SemesterCard: React.FC<SemesterCardProps> = ({
  semesterData,
  isExpanded,
  onToggle,
}) => {
  const { t } = useTranslation("telecommunication");

  // Tính tổng số môn học và tín chỉ
  const allCourses = [
    ...(semesterData.courses || []),
    ...(semesterData.compulsory?.courses || []),
  ];
  if (!semesterData || typeof semesterData !== "object") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-surface">
        <Empty title="Không tìm thấy dữ liệu" />
      </div>
    );
  }

  const totalCredits = allCourses.reduce(
    (sum, course) => sum + course.credits,
    0
  );
  const totalCourses = allCourses.length;

  return (
    <div className="relative group">
      {/* Background decorative elements */}
      <div className="absolute transition-opacity duration-300 -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl opacity-20 group-hover:opacity-30 blur-sm"></div>

      <div className="relative overflow-hidden border-0 shadow-lg sm:shadow-xl bg-background-surface rounded-xl sm:rounded-2xl backdrop-blur-sm">
        {/* Header */}
        <div
          className="relative transition-all duration-500 cursor-pointer md:p-2 lg:p-3 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800"
          onClick={onToggle}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 translate-x-1/2 -translate-y-1/2 rounded-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/10"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 -translate-x-1/2 translate-y-1/2 rounded-full xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/5"></div>

          <div className="relative flex items-center justify-between p-2 md:p-3">
            <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">
              <div className="relative">
                <div className="p-1 xs:p-1.5 sm:p-2 md:p-2.5 lg:p-3 border rounded-lg shadow-md sm:shadow-lg bg-white/20 backdrop-blur-sm sm:rounded-xl border-white/20">
                  <Target className="w-3 h-3 text-white xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="absolute w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-yellow-400 border-2 border-white rounded-full shadow-sm -top-1 -right-1"></div>
              </div>

              <div>
                <h3 className="mb-0.5 xs:mb-1 sm:mb-1.5 md:mb-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {semesterData.title}
                </h3>
                <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 md:space-x-4 text-[10px] xs:text-xs sm:text-sm md:text-base text-blue-100">
                  <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2">
                    <BookOpen className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span>
                      {totalCourses} {t("common.courses")}
                    </span>
                  </div>
                  <div className="w-0.5 h-0.5 xs:w-1 xs:h-1 bg-blue-200 rounded-full"></div>
                  <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2">
                    <Award className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <span>
                      {totalCredits} {t("common.credits")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
              <div className="text-right">
                <div className="mb-0.5 xs:mb-1 sm:mb-1.5 text-[10px] xs:text-xs sm:text-sm md:text-base text-blue-100">
                  {t("common.totalCredits")}
                </div>
                <div className="text-base font-bold text-white xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {totalCredits}
                </div>
              </div>

              <div className="p-1 xs:p-1.5 sm:p-2 md:p-2.5 lg:p-3 transition-transform duration-300 border rounded-lg bg-white/20 backdrop-blur-sm border-white/20 hover:scale-110">
                {isExpanded ? (
                  <ChevronUp className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                ) : (
                  <ChevronDown className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
            {/* Regular courses */}
            {semesterData.courses && semesterData.courses.length > 0 && (
              <div className="grid grid-cols-2 gap-2 2 md:grid-cols-4 xs:gap-3 sm:gap-4 md:gap-5">
                {semesterData.courses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            )}

            {/* Electives */}
            {semesterData.electives && (
              <div className="p-2 mt-3 border-0 border-l-4 border-blue-500 rounded-lg shadow-md xs:p-3 sm:p-4 md:p-5 xs:mt-4 sm:mt-5 md:mt-6 sm:rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100">
                <h4 className="flex items-center mb-2 text-xs font-bold text-blue-800 xs:mb-3 sm:mb-4 md:mb-5 xs:text-sm sm:text-base md:text-lg">
                  <div className="p-1 xs:p-1.5 sm:p-2 md:p-2.5 mr-2 xs:mr-3 rounded-lg bg-blue-500/20">
                    <BookOpen className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-600" />
                  </div>
                  {semesterData.electives.title} (
                  {semesterData.electives.credits} {t("common.credits")})
                </h4>
                <div className="grid grid-cols-2 gap-2 2 md:grid-cols-4 xs:gap-3 sm:gap-4">
                  {semesterData.electives.options.map((option, index) => (
                    <div
                      key={index}
                      className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 transition-all duration-300 border rounded-lg bg-white/80 backdrop-blur-sm border-blue-200/50 hover:bg-white hover:shadow-md hover:scale-105"
                    >
                      <div className="flex items-center">
                        <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 xs:mr-1.5 sm:mr-2 text-blue-500" />
                        <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-700">
                          {option}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compulsory courses */}
            {semesterData.compulsory &&
              semesterData.compulsory.courses.length > 0 && (
                <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">
                  <div className="p-1 border-0 border-l-4 border-red-500 rounded-lg shadow-md lg:p-3 sm:rounded-xl bg-gradient-to-br from-red-50 to-pink-100">
                    <h4 className="flex items-center mb-2 text-xs font-bold text-red-800 xs:mb-3 sm:mb-4 md:mb-5 xs:text-sm sm:text-base md:text-lg">
                      <div className="p-1 xs:p-1.5 sm:p-2 md:p-2.5 mr-2 xs:mr-3 rounded-lg bg-red-500/20">
                        <Shield className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-red-600" />
                      </div>
                      {semesterData.compulsory.title}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 2 sm:grid-cols-3 md:grid-cols-4 xs:gap-3 sm:gap-4 md:gap-5">
                      {semesterData.compulsory.courses.map((course, index) => (
                        <CourseCard
                          key={`compulsory-${index}`}
                          course={course}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};
