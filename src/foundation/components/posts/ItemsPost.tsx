import { Eye, FileText, Download, ArrowRight, Clock } from "lucide-react";
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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

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

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) return "📄";
    if (fileType.includes("doc")) return "📝";
    if (fileType.includes("image")) return "🖼️";
    if (fileType.includes("video")) return "🎥";
    if (fileType.includes("audio")) return "🎵";
    return "📎";
  };

  return (
    <article className="relative min-w-full mx-auto overflow-hidden transition-all duration-300 ease-out group max-w-7xl">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 rounded-xl sm:rounded-2xl"></div>

      {/* Glass morphism card */}
      <div className="relative transition-all duration-300 border shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-white/20 dark:border-gray-700/50 rounded-xl sm:rounded-2xl shadow-gray-200/50 dark:shadow-gray-900/50 group-hover:shadow-xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/30">
        {/* Animated border gradient */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-100 -z-10"></div>

        {/* Header với category badges */}
        <div className="px-4 pt-4 sm:px-6 sm:pt-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
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

        {/* Main content area */}
        <div className="flex flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-8">
          {/* Enhanced Thumbnail */}
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl group/thumb">
              {/* Image with multiple effects */}
              <div className="relative overflow-hidden rounded-lg aspect-video sm:rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${data.thumbnailUrl}`}
                  alt={data.title}
                  className="object-cover w-full h-full transition-all duration-500 ease-out transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Multi-layer overlay effects */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:opacity-100"></div>

                {/* View count overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{data.viewCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex flex-col justify-between w-full lg:w-3/5 xl:w-2/3">
            <div className="space-y-4">
              {/* Title with gradient text effect */}
              <h2 className="text-xl font-bold leading-tight text-transparent transition-all duration-300 sm:text-2xl lg:text-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text line-clamp-2 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                {data.title}
              </h2>

              {/* Enhanced summary */}
              <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 sm:text-base lg:text-lg dark:text-gray-300 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {data.summary}
              </p>

              {/* Meta information with modern styling */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-gray-100/70 dark:bg-gray-700/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">
                    {formatTimeAgo(data.publishedAt)}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-gray-100/70 dark:bg-gray-700/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50">
                  <Eye className="w-4 h-4 text-green-500" />
                  <span className="font-medium">
                    {data.viewCount.toLocaleString()} lượt xem
                  </span>
                </div>
              </div>

              {/* Enhanced Files section */}
              {data.files.length > 0 && (
                <div className="p-4 border rounded-xl bg-gradient-to-r from-gray-50/50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-900/20 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                  <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <FileText className="w-4 h-4 text-blue-500" />
                    Tệp đính kèm
                  </h4>
                  <div className="space-y-2">
                    {data.files.slice(0, 2).map((file, index) => (
                      <div
                        key={file.id}
                        className="group/file flex items-center justify-between p-3 bg-white/70 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 cursor-pointer hover:bg-white dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center flex-1 min-w-0 gap-3">
                          <span className="text-xl">
                            {getFileIcon(file.fileType)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate transition-colors dark:text-gray-200 group-hover/file:text-blue-600 dark:group-hover/file:text-blue-400">
                              {file.originalName}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {file.fileType.toUpperCase()} •{" "}
                              {formatFileSize(file.fileSize)}
                            </p>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-gray-400 transition-all duration-300 transform translate-x-2 opacity-0 group-hover/file:text-blue-500 group-hover/file:opacity-100 group-hover/file:translate-x-0" />
                      </div>
                    ))}
                    {data.files.length > 2 && (
                      <div className="py-2 text-center">
                        <span className="px-3 py-1.5 text-xs text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 dark:bg-gray-700">
                          và {data.files.length - 2} tệp khác...
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Action button */}
            <div className="flex justify-start pt-6">
              <button
                className="group/btn relative px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden min-w-[140px]"
                onClick={() => navigate(`/detail-post/${data.id}`)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 group-hover/btn:opacity-100"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-2">
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover/btn:translate-x-1" />
                </div>

                {/* Shine effect */}
                <div className="absolute top-0 w-full h-full transition-all duration-700 skew-x-12 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:left-full"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Floating particles effect (optional) */}
        <div className="absolute w-2 h-2 transition-opacity duration-300 bg-blue-400 rounded-full opacity-0 top-4 right-4 group-hover:opacity-100"></div>
        <div className="absolute w-1.5 h-1.5 transition-opacity duration-300 delay-100 bg-purple-400 rounded-full opacity-0 bottom-8 left-8 group-hover:opacity-100"></div>
      </div>
    </article>
  );
};

export default ItemsPost;
