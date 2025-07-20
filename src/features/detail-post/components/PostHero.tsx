import React from "react";
import { Calendar, BookOpen, Tag, User, Clock } from "lucide-react";
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
  <div className="overflow-hidden mb-8 rounded-3xl border shadow-2xl backdrop-blur-sm sm:mb-12 bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-700/50">
    {/* Hero Image Section */}
    <div className="overflow-hidden relative h-64 sm:h-72 md:h-80 lg:h-96">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>

      {/* Category badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="px-4 py-2 rounded-2xl border shadow-lg backdrop-blur-md bg-white/90 dark:bg-gray-800/90 border-gray-200/50 dark:border-gray-600/50">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {categoryName}
          </span>
        </div>
      </div>

      {/* Main image */}
      <img
        src={thumbnail}
        alt="thumbnail"
        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/30"></div>
    </div>

    {/* Content Section */}
    <div className="p-6 sm:p-8 md:p-10 lg:p-12">
      {/* Title */}
      <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:mb-8 md:text-3xl lg:text-4xl dark:text-white">
        {title}
      </h2>

      {/* Meta Information */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6 sm:mb-8">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200/50 dark:border-blue-700/50">
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {formatDateTwo(publishedAt)}
            </span>
          </div>

          <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border dark:from-green-900/30 dark:to-emerald-900/30 border-green-200/50 dark:border-green-700/50">
            <User className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {authorName}
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border dark:from-orange-900/30 dark:to-red-900/30 border-orange-200/50 dark:border-orange-700/50">
          <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
            {formatDateTwo(publishedAt)}
          </span>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="overflow-hidden relative p-6 mb-8 bg-gradient-to-br rounded-3xl border-l-4 border-blue-500 from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 sm:p-8 md:p-10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br rounded-full translate-x-10 -translate-y-10 from-blue-400/20 to-purple-400/20"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br rounded-full -translate-x-8 translate-y-8 from-purple-400/20 to-pink-400/20"></div>

          <div className="relative">
            <div className="flex gap-3 items-center mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                Tóm tắt nội dung
              </h3>
            </div>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
              {summary}
            </p>
          </div>
        </div>
      )}

      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-gradient-to-br rounded-xl border from-purple-500/10 to-pink-500/10 border-purple-200/50 dark:border-purple-700/50">
            <Tag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">
              Từ khóa
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: ITag, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-2xl border transition-all duration-200 cursor-pointer text-gray-700 dark:text-gray-300 border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600"
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
