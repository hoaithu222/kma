import { useEffect } from "react";
import LecturerCard from "./components/LecturerCard";
import { useLecturer } from "./hooks/useLecturer";
import { ReduxStateType } from "@/app/store/types";
import { useNavigate } from "react-router-dom";
import Pagination from "@/foundation/components/pagination/Pagination";
import FacultyCardSkeleton from "@/foundation/components/loading/FacultyCardSkeleton";

const LecturerPage = () => {
  const {
    lecturerList,
    statusGetLecturer,
    getLecturerDispatch,
    filter,
    setFilter,
    totalElements,
    totalPages,
  } = useLecturer();
  const navigate = useNavigate();

  useEffect(() => {
    getLecturerDispatch();
  }, [filter]);
  const handlePageChange = (page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  };

  if (statusGetLecturer === ReduxStateType.LOADING) {
    return (
      <div className="p-5 mt-10 md:mt-20 lg:mt-28">
        <FacultyCardSkeleton count={6} />
      </div>
    );
  }

  return (
    <div className="p-1 mt-10 min-h-screen sm:p-3 md:p-4 lg:p-6 md:mt-16 lg:mt-28">
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
          {lecturerList.map((lecturer) => (
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

        <div className="mt-8">
          <Pagination
            currentPage={filter.page}
            totalPages={totalPages}
            totalItems={totalElements}
            pageSize={filter.size}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LecturerPage;
