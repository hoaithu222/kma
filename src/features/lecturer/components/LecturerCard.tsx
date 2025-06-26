import {
  ChevronRight,
  Mail,
  BookOpen,
  GraduationCap,
  User,
  Eye,
} from "lucide-react";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";

const LecturerCard = ({
  lecturer,
  onViewMore,
}: {
  lecturer: any;
  onViewMore: (lecturer: any) => void;
}) => {
  return (
    <div className="relative overflow-hidden transition-all duration-500 bg-background-overlay backdrop-blur-xl border border-border-primary shadow-lg rounded-2xl hover:shadow-2xl hover:bg-background-muted hover:scale-[1.02] hover:-translate-y-1 group">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 from-background-surface/30 to-background-elevated/30 group-hover:opacity-100"></div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br rounded-2xl transition-all duration-700 transform rotate-45 translate-x-12 -translate-y-12 from-background-surface/50 to-background-elevated/50 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:rotate-12"></div>

      <div className="relative z-10 p-6">
        <div className="flex flex-col gap-6 sm:flex-row">
          {/* Avatar Section - Compact */}
          <div className="flex justify-center sm:flex-shrink-0">
            <div className="relative">
              <div className="overflow-hidden relative w-24 h-24 bg-gradient-to-br rounded-2xl transition-all duration-500 transform sm:w-20 sm:h-20 from-background-surface via-background-elevated to-background-muted group-hover:scale-110 group-hover:rotate-1">
                {lecturer.filePath ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL_FILE}/${lecturer.filePath}`}
                    alt={lecturer.name}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex justify-center items-center w-full h-full">
                    <User className="w-12 h-12 transition-all duration-500 sm:w-10 sm:h-10 text-secondary group-hover:scale-110 group-hover:text-secondary-dark" />
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 from-background-base/10 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-4">
                <h3 className="mb-1 text-lg font-bold transition-all duration-300 text-text-primary group-hover:text-secondary line-clamp-1">
                  {lecturer.name}
                </h3>
                <div className="inline-block px-2 py-1 text-xs font-semibold rounded-lg transition-all duration-300 text-secondary bg-background-surface group-hover:bg-background-elevated">
                  {truncateText(lecturer.title, 50)}
                </div>
              </div>

              {/* Key Info - Minimal */}
              <div className="flex-1 mb-4 space-y-2">
                {lecturer.position && (
                  <div className="flex gap-2 justify-center items-center text-sm text-text-secondary sm:justify-start">
                    <GraduationCap className="flex-shrink-0 w-3 h-3 text-secondary" />
                    <span className="line-clamp-1">
                      {truncateText(stripHtml(lecturer.position), 40)}
                    </span>
                  </div>
                )}

                {lecturer.majorName && (
                  <div className="flex gap-2 justify-center items-center text-sm text-text-secondary sm:justify-start">
                    <BookOpen className="flex-shrink-0 w-3 h-3 text-success" />
                    <span className="line-clamp-1">
                      {truncateText(lecturer.majorName, 35)}
                    </span>
                  </div>
                )}

                {lecturer.email && (
                  <div className="flex gap-2 justify-center items-center text-sm text-text-secondary sm:justify-start">
                    <Mail className="flex-shrink-0 w-3 h-3 text-accent" />
                    <span className="line-clamp-1">
                      {truncateText(lecturer.email, 30)}
                    </span>
                  </div>
                )}

                {/* Research Interest Preview */}
                {lecturer.researchInterests && (
                  <div className="p-2 mt-3 bg-gradient-to-r rounded-lg border from-background-surface/70 to-background-elevated/70 border-border-primary">
                    <p className="text-xs leading-relaxed text-text-secondary line-clamp-2">
                      {truncateText(stripHtml(lecturer.researchInterests), 80)}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button - Compact */}
              <button
                onClick={() => onViewMore(lecturer)}
                className="flex gap-2 justify-center items-center px-4 py-2 text-sm font-semibold bg-gradient-to-r rounded-xl transition-all duration-300 transform text-text-on-primary from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary hover:scale-105 hover:shadow-lg active:scale-95 group-hover:shadow-secondary/25"
              >
                <Eye className="w-4 h-4" />
                <span>Chi tiết</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 -translate-x-full skew-x-12 via-background-surface/5 group-hover:translate-x-full"></div>
    </div>
  );
};

export default LecturerCard;
