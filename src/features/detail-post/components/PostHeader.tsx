import React from "react";
import { ArrowLeft, Heart, Bookmark, Share2 } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";

interface PostHeaderProps {
  scrollY: number;
  categoryName: string;
  subCategoryName: string;
  isLiked: boolean;
  isBookmarked: boolean;
  onNavigateBack: () => void;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  scrollY,
  categoryName,
  subCategoryName,
  isLiked,
  isBookmarked,
  onNavigateBack,
  onLikeToggle,
  onBookmarkToggle,
}) => (
  <div
    className={`sticky top-0 z-40 transition-all duration-300 ${
      scrollY > 50
        ? "bg-background-elevated/80 backdrop-blur-xl shadow-lg"
        : "bg-background-base"
    }`}
  >
    <div className="px-2 py-4 mx-auto mt-10 sm:px-4 sm:py-6 sm:mt-16 md:mt-20 lg:mt-28 max-w-7xl lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-200 bg-background-muted group hover:bg-background-subtle rounded-2xl hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 transition-colors text-text-secondary group-hover:text-text-primary" />
            <span className="text-sm font-medium sm:text-base text-text-secondary group-hover:text-text-primary">
              Quay lại
            </span>
          </button>

          <nav className="items-center hidden space-x-2 text-xs sm:text-sm text-text-muted sm:flex">
            <span className="cursor-pointer hover:text-text-primary">
              Trang chủ
            </span>
            <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="cursor-pointer hover:text-text-primary">
              {categoryName}
            </span>
            <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="font-medium text-text-primary">
              {subCategoryName}
            </span>
          </nav>
        </div>

        <div className="items-center hidden gap-2 sm:flex">
          <button
            onClick={onLikeToggle}
            className={`p-2 sm:p-3 rounded-2xl transition-all duration-200 hover:scale-110 ${
              isLiked
                ? "bg-error/10 text-error"
                : "bg-background-muted text-text-secondary hover:bg-error/10 hover:text-error"
            }`}
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? "fill-current" : ""}`}
            />
          </button>
          <button
            onClick={onBookmarkToggle}
            className={`p-2 sm:p-3 rounded-2xl transition-all duration-200 hover:scale-110 ${
              isBookmarked
                ? "bg-secondary/10 text-secondary"
                : "bg-background-muted text-text-secondary hover:bg-secondary/10 hover:text-secondary"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? "fill-current" : ""}`}
            />
          </button>
          <button className="p-2 transition-all duration-200 sm:p-3 text-text-secondary bg-background-muted hover:bg-background-subtle rounded-2xl hover:scale-110">
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PostHeader;
