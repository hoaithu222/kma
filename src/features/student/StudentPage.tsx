import { useParams } from "react-router-dom";
import { useStudent } from "./hooks/useStudent";
import { useEffect } from "react";
import Pagination from "@/foundation/components/pagination/Pagination";
import ItemsPost from "@/foundation/components/posts/ItemsPost";
import { ReduxStateType } from "@/app/store/types";
import LoadingSkeleton from "@/foundation/components/loading/LoadingSkeleton";

const StudentPage = () => {
  const { id } = useParams();

  const {
    studentPost,
    getStudentPostAction,
    statusGetStudentPost,
    totalPages,
    totalItems,
    filter,
    setFilter,
  } = useStudent();
  useEffect(() => {
    if (id) {
      setFilter({ ...filter, subCategoryId: Number(id) });
      getStudentPostAction(filter, Number(id));
    }
  }, [id]);

  if (statusGetStudentPost === ReduxStateType.LOADING) {
    return (
      <div className="min-h-screen mt-10 md:mt-20 lg:mt-28">
        <LoadingSkeleton count={3} />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 md:mt-20 lg:mt-24">
      <div className="container px-1 py-2 mx-auto sm:px-3 sm:py-6 lg:px-4 lg:py-8">
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
          {studentPost.map((item) => {
            return <ItemsPost key={item.id} data={item as any} />;
          })}

          <Pagination
            currentPage={0}
            totalPages={totalPages}
            totalItems={totalItems}
            pageSize={10}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
