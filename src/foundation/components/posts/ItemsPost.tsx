import { Eye, Calendar, FileText } from "lucide-react";

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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-w-full mx-auto overflow-hidden transition-all duration-300 shadow-md max-w-7xl bg-background-surface rounded-xl hover:shadow-lg group">
      {/* Header với category badges */}
      <div className="p-3 sm:p-4 sm:pb-0">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
          <span className="px-2 py-1 text-xs font-medium text-white rounded-full sm:px-3 bg-primary">
            {data.categoryName}
          </span>
          <span className="px-2 py-1 text-xs rounded-full text-text-secondary bg-background-muted">
            {data.subCategoryName}
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:flex-row">
        {/* Thumbnail */}
        <div className="w-full md:w-2/5">
          <div className="relative overflow-hidden transition-transform duration-300 rounded-lg group-hover:scale-105">
            <img
              src={`${import.meta.env.VITE_API_URL_FILE}/${data.thumbnailUrl}`}
              alt={data.title}
              className="object-cover w-full h-40 sm:h-44 md:h-48"
              loading="lazy"
            />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between w-full md:w-3/5">
          <div>
            <h2 className="mb-2 text-lg font-bold transition-colors duration-300 sm:mb-3 sm:text-xl text-text-primary line-clamp-2 group-hover:text-primary">
              {data.title}
            </h2>

            <p className="mb-3 text-sm leading-relaxed sm:mb-4 text-text-secondary line-clamp-2">
              {data.summary}
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs sm:gap-3 text-text-muted">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(data.publishedAt)}</span>
              </div>

              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{data.viewCount} lượt xem</span>
              </div>

              {data.files.length > 0 && (
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>{data.files.length} tệp đính kèm</span>
                </div>
              )}
            </div>
          </div>

          {/* Files section */}
          {data.files.length > 0 && (
            <div className="pt-2 border-t sm:pt-3 border-border-primary">
              <h4 className="flex items-center gap-1 mb-2 text-xs font-medium text-text-secondary">
                <FileText className="w-3 h-3" />
                Tệp đính kèm
              </h4>
              <div className="space-y-1.5">
                {data.files.slice(0, 2).map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-2 transition-colors rounded-md cursor-pointer bg-background-muted hover:bg-background-subtle"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate text-text-primary">
                        {file.originalName}
                      </p>
                      <p className="text-xs text-text-muted">
                        {file.fileType} • {formatFileSize(file.fileSize)}
                      </p>
                    </div>
                  </div>
                ))}
                {data.files.length > 2 && (
                  <p className="py-1 text-xs text-center text-text-muted">
                    và {data.files.length - 2} tệp khác...
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="mt-3 sm:mt-4">
            <button className="w-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm font-medium text-white transition-all duration-200 transform shadow-sm md:w-auto bg-gradient-to-r from-primary to-primary-dark rounded-lg hover:from-primary-dark hover:to-primary hover:scale-105 hover:shadow-md">
              Đọc tiếp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPost;
