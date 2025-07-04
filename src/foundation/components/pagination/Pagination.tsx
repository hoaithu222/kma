const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;

    let start = Math.max(0, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages - 1, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(0, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-2 mt-4 sm:flex-row">
      {/* Info */}
      <div className="text-xs text-text-secondary">
        Hiển thị {currentPage * pageSize + 1} -{" "}
        {Math.min((currentPage + 1) * pageSize, totalItems)} của {totalItems}{" "}
        kết quả
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-2 py-1 text-xs transition-colors duration-200 border rounded border-border-primary hover:bg-background-surface disabled:opacity-50 disabled:cursor-not-allowed text-text-secondary hover:text-text-primary"
        >
          Trước
        </button>

        {/* First Page */}
        {getPageNumbers()[0] > 0 && (
          <>
            <button
              onClick={() => onPageChange(0)}
              className="px-2 py-1 text-xs transition-colors duration-200 border rounded border-border-primary hover:bg-background-surface text-text-secondary hover:text-text-primary"
            >
              1
            </button>
            {getPageNumbers()[0] > 1 && (
              <span className="px-1 text-text-secondary">...</span>
            )}
          </>
        )}

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 text-xs border rounded transition-colors duration-200 ${
              page === currentPage
                ? "bg-secondary text-text-on-primary border-secondary hover:bg-secondary-dark"
                : "border-border-primary text-text-secondary hover:bg-background-surface hover:text-text-primary"
            }`}
          >
            {page + 1}
          </button>
        ))}

        {/* Last Page */}
        {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
          <>
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 2 && (
              <span className="px-1 text-text-secondary">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages - 1)}
              className="px-2 py-1 text-xs transition-colors duration-200 border rounded border-border-primary hover:bg-background-surface text-text-secondary hover:text-text-primary"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="px-2 py-1 text-xs transition-colors duration-200 border rounded border-border-primary hover:bg-background-surface disabled:opacity-50 disabled:cursor-not-allowed text-text-secondary hover:text-text-primary"
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default Pagination;
