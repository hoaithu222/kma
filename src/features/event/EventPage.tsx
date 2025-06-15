import { useParams } from "react-router-dom";
import { useEvent } from "./hooks/useEvent";
import { useEffect } from "react";
import Pagination from "@/foundation/components/pagination/Pagination";
import ItemsPost from "@/foundation/components/posts/ItemsPost";
import { ReduxStateType } from "@/app/store/types";
import LoadingSkeleton from "@/foundation/components/loading/LoadingSkeleton";

const EventPage = () => {
  const { id } = useParams();

  const {
    eventPost,
    getEventPostAction,
    statusGetEventPost,
    totalPages,
    totalItems,
    filter,
    setFilter,
  } = useEvent();
  useEffect(() => {
    if (id) {
      setFilter({ ...filter, subCategoryId: Number(id) });
      getEventPostAction(filter, Number(id));
    }
  }, [id]);
  if (statusGetEventPost === ReduxStateType.LOADING) {
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
          {eventPost.map((item) => {
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

export default EventPage;
