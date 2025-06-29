import React, { useState } from "react";
import { FileText, X, Download } from "lucide-react";
import { IFile } from "@/core/api/posts/types";

interface FloatingFilesPanelProps {
  files: IFile[];
}

const FloatingFilesPanel: React.FC<FloatingFilesPanelProps> = ({ files }) => {
  const [isFilesPanelOpen, setIsFilesPanelOpen] = useState(false);

  if (!files || files.length === 0) return null;

  const getFileIcon = (fileType: string): string => {
    if (fileType.includes("word")) return "📄";
    if (fileType.includes("pdf")) return "📕";
    if (fileType.includes("excel")) return "📊";
    if (fileType.includes("powerpoint")) return "📊";
    return "📎";
  };

  const handleDown = (file: IFile) => {
    const url = `${import.meta.env.VITE_API_URL_FILE}/${file.filePath}`;
    window.open(url, "_blank");
  };
  console.log(files);

  return (
    <>
      <div className="fixed right-2 bottom-12 z-50 sm:bottom-20 sm:right-3">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full blur-xl transition-all duration-300 sm:-inset-2 bg-primary/20 group-hover:bg-primary/30"></div>
          <button
            onClick={() => setIsFilesPanelOpen(true)}
            className="relative p-3 rounded-full border shadow-2xl backdrop-blur-md transition-all duration-300 transform sm:p-4 bg-card-bg/95 border-border-primary hover:shadow-3xl hover:scale-110 hover:rotate-3 hover:border-primary"
          >
            <div className="relative">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <div className="absolute flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold rounded-full text-text-on-primary bg-error -top-1 sm:-top-2 -right-1 sm:-right-2 animate-bounce">
                {files.length}
              </div>
            </div>
          </button>
          <div className="absolute right-0 px-2 sm:px-3 py-1.5 sm:py-2 mb-2 sm:mb-3 text-xs sm:text-sm transition-all duration-200 transform -translate-y-1 opacity-0 text-text-on-primary bottom-full bg-card-bg/95 backdrop-blur-sm rounded-xl group-hover:opacity-100 whitespace-nowrap group-hover:translate-y-0 border border-border-primary">
            Tài liệu đính kèm
            <div className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 -mt-0.5 sm:-mt-1 rotate-45 top-full right-3 sm:right-4 bg-card-bg border-r border-b border-border-primary"></div>
          </div>
        </div>
      </div>

      {isFilesPanelOpen && (
        <div className="flex fixed inset-0 z-50 justify-center items-center p-2 sm:p-4">
          <div
            className="absolute inset-0 backdrop-blur-md bg-background-overlay"
            onClick={() => setIsFilesPanelOpen(false)}
          ></div>

          <div className="relative bg-card-bg/98 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl max-w-[90%] sm:max-w-md w-full max-h-[80vh] overflow-hidden border border-border-primary animate-in slide-in-from-bottom-4 fade-in duration-500">
            <div className="flex sticky top-0 justify-between items-center p-4 border-b backdrop-blur-md sm:p-6 bg-card-bg/90 border-divider-primary">
              <div className="flex gap-2 items-center sm:gap-3">
                <div className="p-2 rounded-xl sm:p-3 bg-primary/10 sm:rounded-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold sm:text-lg text-text-primary">
                    Tài liệu đính kèm
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted">
                    {files.length} tệp tin
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFilesPanelOpen(false)}
                className="p-1.5 sm:p-2 transition-colors hover:bg-background-muted/50 rounded-lg sm:rounded-xl hover:text-text-primary"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-3 max-h-96 sm:p-6 sm:space-y-4">
              {files.map((file: IFile, index: number) => (
                <div
                  key={file.id}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background-muted/30 hover:bg-primary/5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-border-primary/30 hover:border-primary/50 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex justify-center items-center w-12 h-12 text-xl rounded-xl shadow-sm backdrop-blur-sm transition-all duration-300 sm:text-2xl sm:w-14 sm:h-14 bg-background-base/80 sm:rounded-2xl group-hover:shadow-md group-hover:scale-110 group-hover:bg-primary/10">
                      {getFileIcon(file.fileType)}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate transition-colors sm:text-base text-text-primary group-hover:text-primary">
                      {file.fileName}
                    </p>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-text-muted">
                      {file.fileSize}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDown(file);
                    }}
                    className="flex-shrink-0 p-2 rounded-xl shadow-lg transition-all duration-300 sm:p-3 text-text-on-primary bg-primary hover:bg-primary-dark sm:rounded-2xl hover:scale-110 hover:shadow-xl group-hover:rotate-3"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 p-3 border-t backdrop-blur-md sm:p-4 bg-card-bg/90 border-divider-primary">
              <p className="text-xs text-center sm:text-sm text-text-muted">
                Nhấn vào nút tải để tải xuống tệp tin
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingFilesPanel;
