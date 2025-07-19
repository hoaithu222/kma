import { useParams } from "react-router-dom";
import { useBasePost } from "./hooks/useBasePost";
import { useEffect } from "react";
import Pagination from "@/foundation/components/pagination/Pagination";
import ItemsPost from "@/foundation/components/posts/ItemsPost";
import { ReduxStateType } from "@/app/store/types";
import LoadingSkeleton from "@/foundation/components/loading/LoadingSkeleton";

const BasePostPage = () => {
  const { id } = useParams();
  const {
    posts,
    statusGetStudentPost,
    filter,
    totalPages,
    totalItems,
    handleFilter,
    getPostsAction,
  } = useBasePost();
  console.log(posts);
  useEffect(() => {
    if (id) {
      const categoryId = Number(id);
      handleFilter({ ...filter, categoryId }, categoryId);
    }
  }, [id]);
  useEffect(() => {
    if (id) {
      const categoryId = Number(id);
      getPostsAction({ ...filter, categoryId }, categoryId);
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
          {posts?.map((item: any) => {
            return <ItemsPost key={item.id} data={item as any} />;
          })}

          <Pagination
            currentPage={Number(filter.page)}
            totalPages={Number(totalPages)}
            totalItems={Number(totalItems)}
            pageSize={Number(filter.size ?? 9)}
            onPageChange={(page) => {
              handleFilter({ ...filter, page: page }, Number(id));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BasePostPage;
