import { useEffect, useState } from "react";
import LecturerCard from "./components/LecturerCard";
import { useLecturer } from "./hooks/useLecturer";
import { ReduxStateType } from "@/app/store/types";
import { useNavigate } from "react-router-dom";
import Pagination from "@/foundation/components/pagination/Pagination";
import FacultyCardSkeleton from "@/foundation/components/loading/FacultyCardSkeleton";

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
      <div className="p-5 mt-10 md:mt-20 lg:mt-28">
        <FacultyCardSkeleton count={6} />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-1 mt-10 sm:p-3 md:p-4 lg:p-6 md:mt-16 lg:mt-28">
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
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
