import React from "react";
import { Calendar, BookOpen, Tag, User } from "lucide-react";
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
  authorName: string;
}

const PostHero: React.FC<PostHeroProps> = ({
  thumbnail,
  categoryName,
  authorName,
  title,
  publishedAt,
  summary,
  tags,
}) => (
  <div className="mb-8 overflow-hidden shadow-2xl sm:mb-12 bg-background-elevated rounded-3xl">
    <div className="relative overflow-hidden h-60 bg-background-overlay sm:h-64 md:h-80 lg:h-96">
      <div className="absolute z-10 top-3 right-3 sm:top-6 sm:right-6">
        <div className="px-2 py-1 border shadow-lg sm:px-4 sm:py-2 bg-background-overlay backdrop-blur-md rounded-2xl border-border-primary">
          <span className="text-xs font-medium sm:text-sm text-text-primary">
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
      <h3 className="mb-4 text-lg font-bold leading-tight sm:mb-8 md:text-xl lg:text-2xl text-text-primary">
        {title}
      </h3>

      <div className="flex flex-wrap items-center gap-2 mb-4 sm:gap-4 sm:mb-8 justify-between">
        <div className="flex items-center gap-1 px-2 py-1 sm:gap-2 sm:px-4 sm:py-2 bg-background-elevated rounded-2xl">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
          <span className="text-xs font-medium sm:text-sm text-secondary">
            {formatDateTwo(publishedAt)}
          </span>
        </div>

        <div className="flex items-center gap-1 px-2 py-1 sm:gap-2 sm:px-4 sm:py-2 bg-background-elevated rounded-2xl">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs font-medium sm:text-sm text-primary">
            {authorName}
          </span>
        </div>
      </div>

      {summary && (
        <div className="relative p-4 mb-4 overflow-hidden border-l-4 sm:p-6 md:p-8 sm:mb-8 border-primary bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
          <div className="absolute top-0 right-0 w-16 h-16 translate-x-8 -translate-y-8 rounded-full sm:w-24 md:w-32 sm:h-24 md:h-32 sm:translate-x-12 md:translate-x-16 sm:-translate-y-12 md:-translate-y-16 bg-primary/5"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 -translate-x-6 translate-y-6 rounded-full sm:w-16 md:w-24 sm:h-16 md:h-24 sm:-translate-x-8 md:-translate-x-12 sm:translate-y-8 md:translate-y-12 bg-accent/5"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-primary/10 rounded-xl">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold sm:text-lg text-text-primary">
                Tóm tắt nội dung
              </h3>
            </div>
            <p className="text-sm font-medium leading-relaxed sm:text-base md:text-lg text-text-secondary">
              {summary}
            </p>
          </div>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="flex items-start gap-2 mb-4 sm:gap-4 sm:mb-8">
          <div className="p-2 mt-1 sm:p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="mb-2 text-xs font-semibold tracking-wide uppercase sm:mb-3 sm:text-sm text-text-primary">
              Từ khóa
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag: ITag, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium transition-all duration-200 border cursor-pointer sm:px-4 sm:py-2 sm:text-sm text-text-secondary border-border-primary bg-background-base hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:text-primary rounded-2xl hover:scale-105 hover:shadow-md hover:border-primary"
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
