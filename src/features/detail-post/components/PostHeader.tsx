import React from "react";
import { ArrowLeft, Home } from "lucide-react";
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
  navigateToHome: () => void;
  navigateToCategory: () => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  scrollY,
  categoryName,
  subCategoryName,
  onNavigateBack,
  navigateToHome,
  navigateToCategory,
}) => (
  <div
    className={`sticky top-0 z-40 transition-all duration-300 ${
      scrollY > 50
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
        : "bg-transparent"
    }`}
  >
    <div className="px-1 py-4 mx-auto mt-10 max-w-7xl sm:px-2 sm:py-6 sm:mt-16 md:mt-20 lg:mt-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Section - Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Back Button */}
          <button
            onClick={onNavigateBack}
            className="group flex items-center gap-3 px-4 py-2.5 transition-all duration-200 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 rounded-2xl hover:scale-105 border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-md"
          >
            <div className="p-1.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transition-transform duration-200 group-hover:scale-110">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Quay lại
            </span>
          </button>

          {/* Breadcrumb Navigation */}
          <nav
            className="hidden items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 sm:flex"
            onClick={navigateToHome}
          >
            <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-gray-50 rounded-xl border to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20 border-gray-200/50 dark:border-gray-600/50">
              <Home className="w-4 h-4 text-blue-500" />
              <span className="font-medium transition-colors duration-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Trang chủ
              </span>
            </div>

            <FaChevronRight className="w-3 h-3 text-gray-400" />

            <div
              className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-blue-50 rounded-xl border to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-600/50"
              onClick={navigateToCategory}
            >
              <span className="font-medium transition-colors duration-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                {categoryName}
              </span>
            </div>

            <FaChevronRight className="w-3 h-3 text-gray-400" />

            <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-purple-50 rounded-xl border to-pink-50/30 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-600/50">
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {subCategoryName}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default PostHeader;
