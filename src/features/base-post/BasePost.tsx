import { useParams } from "react-router-dom";
import { useBasePost } from "./hooks/useBasePost";
import { useEffect } from "react";
import Pagination from "@/foundation/components/pagination/Pagination";
import ItemsPost from "@/foundation/components/posts/ItemsPost";
import { ReduxStateType } from "@/app/store/types";
import LoadingSkeleton from "@/foundation/components/loading/LoadingSkeleton";
import Empty from "@/foundation/components/empty/Empty";

const BasePostPage = () => {
  const { id } = useParams();
  const {
    posts,
    statusGetPost,
    filter,
    totalPages,
    totalItems,
    handleFilter,
    getPostsAction,
  } = useBasePost();

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

  if (statusGetPost === ReduxStateType.LOADING) {
    return (
      <div className="mt-10 min-h-screen md:mt-20 lg:mt-28">
        <LoadingSkeleton count={3} />
      </div>
    );
  }
  if (posts.length === 0) {
    return (
      <div className="min-h-screen mt-30 md:mt-20 lg:mt-28">
        <Empty variant="data" title="Không có dữ liệu" />
      </div>
    );
  }

  return (
    <div className="mt-10 min-h-screen md:mt-20 lg:mt-24">
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
