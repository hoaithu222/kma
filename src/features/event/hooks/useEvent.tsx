import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectEventPost,
  selectEventPostDetail,
  selectStatusGetEventPost,
  selectStatusGetEventPostDetail,
  selectTotalItems,
  selectTotalPages,
} from "../slice/event.selector";
import { getEventPost } from "../slice/event.slice";

export const useEvent = () => {
  const dispatch = useDispatch();
  // lấy danh sách bài viết liên quan đến sinh viên
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
  const eventPost = useSelector(selectEventPost);
  const totalPages = useSelector(selectTotalPages);
  const totalItems = useSelector(selectTotalItems);
  const getEventPostAction = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    dispatch(getEventPost({ ...filter, subCategoryId }));
  };
  const statusGetEventPost = useSelector(selectStatusGetEventPost);
  // lấy chi tiết bài viết liên quan đến sinh viên
  const eventPostDetail = useSelector(selectEventPostDetail);
  const statusGetEventPostDetail = useSelector(selectStatusGetEventPostDetail);
  const handleFilter = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    setFilter(filter);
    dispatch(getEventPost({ ...filter, subCategoryId }));
  };
  return {
    eventPost,
    getEventPostAction,
    statusGetEventPost,
    statusGetEventPostDetail,
    eventPostDetail,
    handleFilter,
    filter,
    setFilter,
    totalPages,
    totalItems,
  };
};
