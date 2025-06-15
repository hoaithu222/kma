import { useDispatch, useSelector } from "react-redux";
import { getResearchPost } from "../slice/research.slice";
import {
  selectStatusGetResearchPost,
  selectStatusGetResearchPostDetail,
  selectResearchPost,
  selectResearchPostDetail,
  selectTotalItems,
  selectTotalPages,
} from "../slice/research.selector";
import { useState } from "react";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export const useResearch = () => {
  const dispatch = useDispatch();
  const statusGetResearchPost = useSelector(selectStatusGetResearchPost);
  // lấy chi tiết bài viết liên quan đến sinh viên
  const researchPostDetail = useSelector(selectResearchPostDetail);
  const statusGetResearchPostDetail = useSelector(
    selectStatusGetResearchPostDetail
  );
  const researchPost = useSelector(selectResearchPost);
  const totalPages = useSelector(selectTotalPages);
  const totalItems = useSelector(selectTotalItems);
  // lấy danh sách bài viết liên quan đến nghiên cứu
  const [filter, setFilter] = useState<IRequestSearchArticlePublic>({
    page: 0,
    size: 9,
    categoryId: null,
    subCategoryId: null,
    status: "published",
    isPrivate: false,
    tag: null,
    sort: null,
    order: null,
    keyword: null,
  });

  const getResearchPostAction = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    dispatch(getResearchPost({ ...filter, subCategoryId }));
  };

  return {
    researchPost,
    getResearchPostAction,
    statusGetResearchPost,
    statusGetResearchPostDetail,
    researchPostDetail,
    filter,
    setFilter,
    totalPages,
    totalItems,
  };
};
