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

  return (
    <>
      <div className="fixed z-50 bottom-12 sm:bottom-20 right-2 sm:right-3">
        <div className="relative group">
          <div className="absolute transition-all duration-300 rounded-full -inset-1 sm:-inset-2 bg-secondary/20 blur-xl group-hover:bg-secondary/30"></div>
          <button
            onClick={() => setIsFilesPanelOpen(true)}
            className="relative p-3 sm:p-4 transition-all duration-300 transform border rounded-full shadow-2xl bg-background-base/90 backdrop-blur-md border-border-primary hover:shadow-3xl hover:scale-110 hover:rotate-3"
          >
            <div className="relative">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              <div className="absolute flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold rounded-full text-text-on-primary bg-error -top-1 sm:-top-2 -right-1 sm:-right-2 animate-bounce">
                {files.length}
              </div>
            </div>
          </button>
          <div className="absolute right-0 px-2 sm:px-3 py-1.5 sm:py-2 mb-2 sm:mb-3 text-xs sm:text-sm transition-all duration-200 transform -translate-y-1 opacity-0 text-text-on-primary bottom-full bg-background-elevated/90 backdrop-blur-sm rounded-xl group-hover:opacity-100 whitespace-nowrap group-hover:translate-y-0">
            Tài liệu đính kèm
            <div className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 -mt-0.5 sm:-mt-1 rotate-45 top-full right-3 sm:right-4 bg-background-elevated/90"></div>
          </div>
        </div>
      </div>

      {isFilesPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div
            className="absolute inset-0 bg-background-elevated/60 backdrop-blur-md"
            onClick={() => setIsFilesPanelOpen(false)}
          ></div>

          <div className="relative bg-background-base/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl max-w-[90%] sm:max-w-md w-full max-h-[80vh] overflow-hidden border border-border-primary animate-in slide-in-from-bottom-4 fade-in duration-500">
            <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 border-b bg-background-base/80 backdrop-blur-md border-border-primary/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-secondary/10 rounded-xl sm:rounded-2xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary">
                    Tài liệu đính kèm
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted">
                    {files.length} tệp tin
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFilesPanelOpen(false)}
                className="p-1.5 sm:p-2 transition-colors hover:bg-background-muted/50 rounded-lg sm:rounded-xl"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto max-h-96">
              {files.map((file: IFile, index: number) => (
                <div
                  key={file.id}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background-muted/50 hover:bg-secondary/5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-border-primary/50 hover:border-secondary/50 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 shadow-sm w-12 h-12 sm:w-14 sm:h-14 bg-background-base/80 backdrop-blur-sm rounded-xl sm:rounded-2xl group-hover:shadow-md group-hover:scale-110">
                      {getFileIcon(file.fileType)}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-semibold truncate transition-colors text-text-primary group-hover:text-secondary">
                      {file.originalName}
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
                    className="flex-shrink-0 p-2 sm:p-3 transition-all duration-300 shadow-lg text-text-on-primary bg-secondary hover:bg-secondary-dark rounded-xl sm:rounded-2xl hover:scale-110 hover:shadow-xl group-hover:rotate-3"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 p-3 sm:p-4 border-t bg-background-base/80 backdrop-blur-md border-border-primary/50">
              <p className="text-xs sm:text-sm text-center text-text-muted">
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
