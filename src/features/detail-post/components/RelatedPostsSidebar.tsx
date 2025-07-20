import React from "react";
import { Clock, Eye, ArrowRight } from "lucide-react";
import { ResponseArticle } from "@/core/api/posts/types";
import { useNavigate } from "react-router-dom";

interface RelatedPostsSidebarProps {
  listRelatedPost: ResponseArticle[];
}

const formatDateShort = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    month: "short",
    day: "numeric",
  });
};

const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "Hôm qua";
  if (diffDays < 7) return `${diffDays} ngày trước`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
  return formatDateShort(dateString);
};

const RelatedPostsSidebar: React.FC<RelatedPostsSidebarProps> = ({
  listRelatedPost = [],
}) => {
  const navigate = useNavigate();

  // Ensure listRelatedPost is an array
  const posts = Array.isArray(listRelatedPost) ? listRelatedPost : [];

  if (posts.length === 0) {
    return (
      <div className="sticky top-20 sm:top-32">
        <div className="p-2 text-center bg-gradient-to-br from-gray-50 rounded-2xl border to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20 border-gray-200/50 dark:border-gray-700/50">
          <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Bài viết liên quan
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Chưa có bài viết liên quan
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-20 space-y-4 sm:top-32">
      {/* Header */}
      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
        <div className="flex gap-3 items-center">
          <div className="p-2 rounded-xl bg-white/20">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Bài viết liên quan</h3>
            <p className="text-sm text-blue-100">
              {posts.length} bài viết cùng chủ đề
            </p>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-3">
        {posts.map((relatedPost: ResponseArticle, index: number) => (
          <div
            key={relatedPost.id}
            className="group relative overflow-hidden transition-all duration-300 border shadow-sm cursor-pointer border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => {
              navigate(`/detail-post/${relatedPost.id}`);
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 from-blue-500/5 to-purple-500/5 group-hover:opacity-100"></div>

            <div className="relative p-3">
              <div className="flex gap-3">
                {/* Thumbnail */}
                <div className="overflow-hidden relative flex-shrink-0 w-16 h-16 rounded-xl shadow-md">
                  <img
                    src={`${import.meta.env.VITE_API_URL_FILE}/${relatedPost.thumbnailUrl}`}
                    alt={relatedPost.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="mb-1.5 text-sm text-left font-semibold leading-tight transition-colors duration-200 text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {relatedPost.title}
                  </h4>

                  {/* Meta info - Compact layout */}
                  <div className="flex gap-2 items-center mb-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-100/70 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                      <Eye className="w-2.5 h-2.5 text-green-500" />
                      <span className="font-medium">
                        {relatedPost.viewCount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-100/70 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                      <Clock className="w-2.5 h-2.5 text-blue-500" />
                      <span className="font-medium">
                        {formatTimeAgo(relatedPost.publishedAt as string)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="flex absolute -right-0.5 top-1/2 justify-center items-center w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 transition-all duration-300 transform translate-x-full -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsSidebar;
