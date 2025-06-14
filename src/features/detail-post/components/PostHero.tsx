import React from "react";
import { Calendar, Clock, BookOpen, Tag } from "lucide-react";
import { ITag } from "@/core/api/posts/types";
import { formatDateTwo } from "@/shared/utils/formatDate";

interface PostHeroProps {
  thumbnail: string;
  categoryName: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  summary: string;
  tags: ITag[];
}

const PostHero: React.FC<PostHeroProps> = ({
  thumbnail,
  categoryName,
  title,
  publishedAt,
  updatedAt,
  summary,
  tags,
}) => (
  <div className="mb-8 sm:mb-12 overflow-hidden shadow-2xl bg-background-elevated rounded-3xl">
    <div className="relative overflow-hidden bg-background-overlay h-48 sm:h-64 md:h-80 lg:h-96">
      <div className="absolute z-10 top-3 right-3 sm:top-6 sm:right-6">
        <div className="px-2 py-1 sm:px-4 sm:py-2 border shadow-lg bg-background-overlay backdrop-blur-md rounded-2xl border-border-primary">
          <span className="text-xs sm:text-sm font-medium text-text-primary">
            {categoryName}
          </span>
        </div>
      </div>
      <img
        src={thumbnail}
        alt="thumbnail"
        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/5"></div>
    </div>

    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h3 className="mb-4 sm:mb-8 text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-text-primary">
        {title}
      </h3>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-background-elevated rounded-2xl">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
          <span className="text-xs sm:text-sm font-medium text-secondary">
            {formatDateTwo(publishedAt)}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-background-elevated rounded-2xl">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
          <span className="text-xs sm:text-sm font-medium text-accent">
            Cập nhật: {formatDateTwo(updatedAt)}
          </span>
        </div>
      </div>

      <div className="relative p-4 sm:p-6 md:p-8 mb-4 sm:mb-8 overflow-hidden border-l-4 border-primary bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
        <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 translate-x-8 sm:translate-x-12 md:translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16 rounded-full bg-primary/5"></div>
        <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 -translate-x-6 sm:-translate-x-8 md:-translate-x-12 translate-y-6 sm:translate-y-8 md:translate-y-12 rounded-full bg-accent/5"></div>
        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <div className="p-1.5 sm:p-2 bg-primary/10 rounded-xl">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-text-primary">
              Tóm tắt nội dung
            </h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-text-secondary">
            {summary}
          </p>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-8">
          <div className="p-2 sm:p-3 mt-1 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-text-primary">
              Từ khóa
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag: ITag, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer text-text-secondary border-border-primary bg-background-base hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:text-primary rounded-2xl hover:scale-105 hover:shadow-md hover:border-primary"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default PostHero;
