import { useEffect, useState } from "react";
import LecturerCard from "./components/LecturerCard";
import { useLecturer } from "./hooks/useLecturer";
import { ReduxStateType } from "@/app/store/types";
import LoadingSpinner from "@/foundation/components/loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import Pagination from "@/foundation/components/pagination/Pagination";

const LecturerPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, _setPageSize] = useState(6);
  const { lecturerList, statusGetLecturer, getLecturerDispatch } =
    useLecturer();
  const navigate = useNavigate();

  useEffect(() => {
    getLecturerDispatch({});
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(lecturerList.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentLecturers = lecturerList.slice(startIndex, endIndex);

  if (statusGetLecturer === ReduxStateType.LOADING) {
    return (
      <div className="flex items-center justify-center h-screen bg-background-base">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 mt-10 bg-background-base md:mt-16 lg:mt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h3 className="mb-2 text-xl font-bold sm:text-2xl text-text-primary md:text-3xl lg:text-4xl">
            Danh sách Giảng viên
          </h3>
          <p className="text-xs text-sm text-text-secondary sm:text-base md:text-lg lg:text-xl">
            Trường Học Viện Kĩ Thuật Mật Mã
          </p>
        </div>

        {/* Lecturer Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentLecturers.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              lecturer={lecturer}
              onViewMore={() => {
                navigate(`/lecturer/${lecturer.id}`);
              }}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={lecturerList.length}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LecturerPage;
