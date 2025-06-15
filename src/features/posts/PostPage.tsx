import { useParams } from "react-router-dom";
import { usePost } from "./hooks/usePost";
import { useEffect } from "react";
import Pagination from "@/foundation/components/pagination/Pagination";
import ItemsPost from "@/foundation/components/posts/ItemsPost";
import { ReduxStateType } from "@/app/store/types";
import LoadingSkeleton from "@/foundation/components/loading/LoadingSkeleton";

const PostPage = () => {
  const { id } = useParams();

  const {
    post,
    statusGetPost,
    totalPages,
    totalItems,
    filter,

    handleFilter,
  } = usePost();
  useEffect(() => {
    if (id) {
      const subCategoryId = Number(id);
      handleFilter({ ...filter, subCategoryId }, subCategoryId);
    }
  }, [id]);
  if (statusGetPost === ReduxStateType.LOADING) {
    return (
      <div className="min-h-screen mt-10 md:mt-20 lg:mt-28">
        <LoadingSkeleton count={3} />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 md:mt-20 lg:mt-24">
      <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
          {post.map((item) => {
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

export default PostPage;
