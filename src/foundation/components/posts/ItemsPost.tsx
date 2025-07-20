import { Eye, FileText, ArrowRight, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ResponseArticle {
  id: number;
  categoryId: number;
  subCategoryName: string;
  subCategoryId: number;
  categoryName: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  files: Array<{
    id: number;
    fileName: string;
    originalName: string;
    filePath: string;
    fileType: string;
    fileSize: number;
    mimeType: string | null;
    dimensions: string | null;
    createdAt: string;
  }>;
  thumbnailId: number;
  tag: string[];
  thumbnailUrl: string;
  dimensions: string;
  viewCount: number;
  status: string;
  publishedAt: string;
  updatedAt: string;
  isPrivate: boolean;
  authorId: number;
  authorName: string;
}

interface ItemsPostProps {
  data: ResponseArticle;
}

const ItemsPost = ({ data }: ItemsPostProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Hôm qua";
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    return formatDate(dateString);
  };

  const navigate = useNavigate();

  // const formatFileSize = (bytes: number) => {
  //   if (bytes === 0) return "0 Bytes";
  //   const k = 1024;
  //   const sizes = ["Bytes", "KB", "MB", "GB"];
  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  // };

  const getCategoryColor = (categoryName: string) => {
    const colors = {
      "Công nghệ": "from-blue-500 to-blue-600",
      "Giáo dục": "from-green-500 to-green-600",
      "Kinh doanh": "from-purple-500 to-purple-600",
      "Tin tức": "from-red-500 to-red-600",
      "Thể thao": "from-orange-500 to-orange-600",
      "Giải trí": "from-pink-500 to-pink-600",
    };
    return (
      colors[categoryName as keyof typeof colors] || "from-gray-500 to-gray-600"
    );
  };

  // const getFileIcon = (fileType: string) => {
  //   if (fileType.includes("pdf")) return "📄";
  //   if (fileType.includes("doc")) return "📝";
  //   if (fileType.includes("image")) return "🖼️";
  //   if (fileType.includes("video")) return "🎥";
  //   if (fileType.includes("audio")) return "🎵";
  //   return "📎";
  // };

  const getAuthorDisplayName = () => {
    return data.isPrivate ? "Ẩn danh" : data.authorName;
  };

  const hasFiles = data.files.length > 0;

  return (
    <article className="overflow-hidden relative mx-auto min-w-full max-w-7xl transition-all duration-300 ease-out group">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 rounded-xl to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 sm:rounded-2xl"></div>

      {/* Glass morphism card */}
      <div className="relative rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/80 dark:bg-gray-900/80 border-white/20 dark:border-gray-700/50 sm:rounded-2xl shadow-gray-200/50 dark:shadow-gray-900/50 group-hover:shadow-xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/30">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 transition-opacity duration-300 sm:rounded-2xl from-blue-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-100 -z-10"></div>

        <div className="flex flex-col gap-2 p-2 sm:gap-3 md:gap-4 sm:p-2 lg:p-3 lg:flex-row lg:gap-5">
          {/* Enhanced Thumbnail - Dynamic height based on files */}
          <div className="relative w-full lg:w-2/5">
            <div className="absolute top-0 left-0 z-10 px-2 pt-2 sm:px-3 sm:pt-3">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span
                  className={`px-3 py-1.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${getCategoryColor(data.categoryName)} shadow-lg transform transition-transform duration-300 hover:scale-110`}
                >
                  {data.categoryName}
                </span>
                <span className="px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm">
                  {data.subCategoryName}
                </span>
              </div>
            </div>
            <div className="overflow-hidden relative rounded-lg sm:rounded-xl group/thumb">
              {/* Image with dynamic aspect ratio */}
              <div
                className={`overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl dark:from-gray-800 dark:to-gray-700 ${
                  hasFiles ? "aspect-[5/3]" : "aspect-[5/3]"
                }`}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${data.thumbnailUrl}`}
                  alt={data.title}
                  className="object-cover w-full h-full transition-all duration-500 ease-out transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Multi-layer overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/30 group-hover:opacity-100"></div>

                {/* View count overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{data.viewCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {/* Author info - Compact styling */}
              <div className="flex gap-3 items-center p-2 bg-gradient-to-r rounded-lg border backdrop-blur-sm from-gray-50/80 via-white/60 to-gray-50/80 dark:from-gray-800/60 dark:via-gray-700/40 dark:to-gray-800/60 border-gray-200/40 dark:border-gray-600/30">
                <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg transition-transform duration-300 transform group-hover:scale-110">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 items-center">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {getAuthorDisplayName()}
                    </p>
                    {data.isPrivate && (
                      <span className="px-2 py-0.5 text-xs font-medium text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30 rounded-full border border-orange-200 dark:border-orange-800">
                        Ẩn danh
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Title with gradient text effect */}
              <h2 className="text-lg font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 transition-all duration-300 text-start sm:text-xl lg:text-2xl dark:from-white dark:via-gray-100 dark:to-white line-clamp-2 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                {data.title}
              </h2>

              {/* Enhanced summary */}
              <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 text-start sm:text-base lg:text-lg dark:text-gray-300 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {data.summary}
              </p>

              {/* Meta information with compact styling */}
              <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex gap-2 items-center px-2 py-1.5 rounded-lg border backdrop-blur-sm bg-gray-100/70 dark:bg-gray-700/50 border-gray-200/50 dark:border-gray-600/50">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-xs font-medium">
                    {formatTimeAgo(data.publishedAt)}
                  </span>
                </div>

                <div className="flex gap-2 items-center px-2 py-1.5 rounded-lg border backdrop-blur-sm bg-gray-100/70 dark:bg-gray-700/50 border-gray-200/50 dark:border-gray-600/50">
                  <Eye className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs font-medium">
                    {data.viewCount.toLocaleString()} lượt xem
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Files section */}
            {hasFiles && (
              <div className="flex gap-2 items-center p-2 mt-2 bg-gradient-to-r rounded-lg border backdrop-blur-sm from-gray-50/50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-900/20 border-gray-200/50 dark:border-gray-700/50">
                <FileText className="flex-shrink-0 w-4 h-4 text-blue-500" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate dark:text-gray-200">
                    {data.files.length} tệp đính kèm
                  </p>
                </div>
              </div>
            )}

            {/* Enhanced Action button */}
            <div className="flex justify-start pt-4">
              <button
                className="group/btn relative px-5 py-2.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden min-w-[120px]"
                onClick={() => navigate(`/detail-post/${data.id}`)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>

                {/* Button content */}
                <div className="flex relative gap-2 justify-center items-center">
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover/btn:translate-x-1" />
                </div>

                {/* Shine effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent to-transparent transition-all duration-700 skew-x-12 via-white/20 group-hover/btn:left-full"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Floating particles effect (optional) */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute w-1.5 h-1.5 transition-opacity duration-300 delay-100 bg-purple-400 rounded-full opacity-0 bottom-8 left-8 group-hover:opacity-100"></div>
      </div>
    </article>
  );
};

export default ItemsPost;
