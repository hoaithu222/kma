import React from "react";
import { User, PenTool, Calendar, Award, BookOpen, Star } from "lucide-react";

interface AuthorInfo {
  name: string;
  role?: string;
  department?: string;
  joinDate?: string;
  achievements?: string[];
  publications?: number;
  experience?: string;
  specialties?: string[];
  avatar?: string;
}

interface AuthorTimelineProps {
  author: AuthorInfo;
  title?: string;
  icon?: React.ReactNode;
}

const AuthorTimeline: React.FC<AuthorTimelineProps> = ({
  author,
  title = "Thông tin tác giả",
  icon,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRandomColor = (name: string) => {
    const colors = [
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-purple-500 to-purple-600",
      "bg-gradient-to-br from-green-500 to-green-600",
      "bg-gradient-to-br from-orange-500 to-orange-600",
      "bg-gradient-to-br from-pink-500 to-pink-600",
      "bg-gradient-to-br from-indigo-500 to-indigo-600",
      "bg-gradient-to-br from-teal-500 to-teal-600",
      "bg-gradient-to-br from-red-500 to-red-600",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="p-4 border shadow-lg md:p-6 lg:p-8 bg-gradient-to-br from-background-elevated to-background-base rounded-xl md:rounded-2xl border-border-primary/50">
      <div className="flex items-center gap-2 mb-4 md:gap-3 md:mb-6 lg:mb-8">
        {icon || (
          <User className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
        )}
        <h2 className="text-lg font-bold md:text-xl lg:text-2xl text-text-primary">
          {title}
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-12 lg:left-16 top-0 bottom-0 w-0.5 md:w-0.75 lg:w-1 bg-gradient-to-b from-primary to-secondary opacity-30"></div>

        {/* Author Profile Section */}
        <div className="relative flex items-start gap-4 pb-6 md:gap-6 lg:gap-8 md:pb-8 lg:pb-12">
          {/* Timeline dot */}
          <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-xs font-bold text-white rounded-full shadow-lg md:text-sm lg:text-base border-2 border-background-elevated bg-gradient-to-r from-primary to-secondary">
            <User className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </div>

          {/* Author Info Card */}
          <div className="flex-1 bg-background-elevated rounded-xl p-4 md:p-6 lg:p-8 shadow-md border border-border-subtle hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Avatar */}
              <div
                className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full text-white font-bold text-lg md:text-xl lg:text-2xl shadow-lg ${getRandomColor(author.name)}`}
              >
                {author.avatar ? (
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  getInitials(author.name)
                )}
              </div>

              {/* Author Details */}
              <div className="flex-1">
                <div className="mb-2 md:mb-4">
                  <h3 className="text-lg font-bold md:text-xl lg:text-2xl text-text-primary mb-1">
                    {author.name}
                  </h3>
                  {author.role && (
                    <p className="text-sm md:text-base text-primary font-semibold">
                      {author.role}
                    </p>
                  )}
                  {author.department && (
                    <p className="text-xs md:text-sm text-text-secondary">
                      {author.department}
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
                  {author.joinDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                      <div>
                        <p className="text-xs font-semibold text-text-secondary">
                          Tham gia
                        </p>
                        <p className="text-sm md:text-base text-text-primary">
                          {author.joinDate}
                        </p>
                      </div>
                    </div>
                  )}
                  {author.publications && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <div>
                        <p className="text-xs font-semibold text-text-secondary">
                          Công trình
                        </p>
                        <p className="text-sm md:text-base text-text-primary">
                          {author.publications}
                        </p>
                      </div>
                    </div>
                  )}
                  {author.experience && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-warning" />
                      <div>
                        <p className="text-xs font-semibold text-text-secondary">
                          Kinh nghiệm
                        </p>
                        <p className="text-sm md:text-base text-text-primary">
                          {author.experience}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Specialties */}
                {author.specialties && author.specialties.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <PenTool className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      <h4 className="text-sm font-semibold md:text-base text-text-primary">
                        Chuyên môn
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {author.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium transition-all duration-200 border cursor-pointer md:px-3 md:py-2 md:text-sm text-text-secondary border-border-primary bg-background-base hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:text-primary rounded-2xl hover:scale-105 hover:shadow-md hover:border-primary"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {author.achievements && author.achievements.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-warning" />
                      <h4 className="text-sm font-semibold md:text-base text-text-primary">
                        Thành tích
                      </h4>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      {author.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 md:p-3 bg-gradient-to-r from-warning/5 to-accent/5 rounded-xl"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-warning mt-2"></div>
                          <p className="text-xs md:text-sm text-text-secondary">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTimeline;
