import React from "react";
import { Clock, Eye } from "lucide-react";
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

  return (
    <div className="sticky space-y-4 sm:space-y-6 top-20 sm:top-32">
      <div className="space-y-3 sm:space-y-4">
        {posts.map((relatedPost: ResponseArticle, index: number) => (
          <div
            key={relatedPost.id}
            className="p-3 transition-all duration-300 border shadow-sm cursor-pointer sm:p-4 border-border-primary bg-background-elevated group rounded-2xl hover:shadow-lg hover:border-border-secondary"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => {
              navigate(`/detail-post/${relatedPost.id}`);
            }}
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden sm:w-20 sm:h-20 rounded-xl">
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${relatedPost.thumbnailUrl}`}
                  alt={relatedPost.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="mb-1 text-xs font-semibold transition-colors duration-200 sm:mb-2 sm:text-sm text-text-primary line-clamp-2 group-hover:text-primary">
                  {relatedPost.title}
                </h4>

                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 text-[10px] sm:text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Eye className="w-2 h-2 sm:w-3 sm:h-3" />
                    {relatedPost.viewCount.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1 xs:gap-1.5 px-1 xs:px-1.5 sm:px-2 md:px-2.5 py-0.5 xs:py-1 sm:py-1 md:py-1.5 bg-gray-100/70 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                    <Clock className="w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 text-blue-500" />
                    <span className="font-medium">
                      {formatTimeAgo(relatedPost.publishedAt as string)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-lg text-primary bg-primary/10">
                    {relatedPost.categoryName}
                  </span>
                  <span className="text-[10px] sm:text-xs text-text-muted">
                    {formatDateShort(relatedPost.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsSidebar;
