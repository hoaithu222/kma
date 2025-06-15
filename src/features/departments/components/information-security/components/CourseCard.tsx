import React from "react";
import { Course } from "../../common/types";
import { getCourseCategory } from "./CourseCategoryAttt";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { t } = useTranslation("informationSecurity");
  const category = getCourseCategory(course.name, t);
  const IconComponent = category.icon;

  return (
    <div className="relative h-[140px] w-[120px] xs:h-[150px] xs:w-[150px] sm:h-[160px] sm:w-[160px] md:h-[170px] md:w-[170px] group">
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>

      <div
        className={`relative h-full w-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-lg border-0 transition-all duration-500 transform hover:scale-105 hover:shadow-lg bg-white shadow-md hover:-translate-y-1 ${category.color.replace("hover:bg-", "hover:shadow-")}`}
      >
        {/* Top section with icon and category */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-start space-x-1.5">
            <div className="relative">
              s
              <div
                className={`p-1.5 xs:p-2 sm:p-2.5 rounded-lg shadow-md ${category.badgeColor} bg-opacity-90 backdrop-blur-sm border border-white/20`}
              >
                <IconComponent
                  className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white`}
                />
              </div>
              {/* Small indicator */}
              <div className="absolute w-1.5 h-1.5 border border-white rounded-full shadow-sm -top-0.5 -right-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            </div>
          </div>

          {/* Credits badge */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-1.5 py-0.5 xs:px-2 xs:py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-bold shadow-md border border-white/20">
              {course.credits} {t("programInfoDetails.credits")}
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="mb-1.5">
          <span
            className={`inline-block text-[9px] xs:text-[10px] sm:text-xs font-bold px-1.5 py-0.5 xs:px-2 xs:py-1 rounded-full ${category.badgeColor} bg-opacity-20 text-opacity-90 border border-current border-opacity-20`}
            style={{
              color: category.badgeColor
                .replace("bg-", "")
                .replace("-500", "-700"),
            }}
          >
            {category.type}
          </span>
        </div>

        {/* Course name */}
        <div className="h-[60px] xs:h-[65px] sm:h-[70px] md:h-[75px] overflow-hidden">
          <h4 className="text-[10px] xs:text-xs sm:text-sm font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-gray-900 line-clamp-3">
            {course.name}
          </h4>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 pointer-events-none bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default CourseCard;
