import { useDispatch, useSelector } from "react-redux";
import { getStudentPost } from "../slice/student.slice";
import {
  selectStatusGetStudentPost,
  selectStatusGetStudentPostDetail,
  selectStudentPost,
  selectStudentPostDetail,
  selectTotalItems,
  selectTotalPages,
} from "../slice/student.selector";
import { useState } from "react";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export const useStudent = () => {
  const dispatch = useDispatch();
  const statusGetStudentPost = useSelector(selectStatusGetStudentPost);
  // lấy chi tiết bài viết liên quan đến sinh viên
  const studentPostDetail = useSelector(selectStudentPostDetail);
  const statusGetStudentPostDetail = useSelector(
    selectStatusGetStudentPostDetail
  );
  const studentPost = useSelector(selectStudentPost);
  const totalPages = useSelector(selectTotalPages);
  const totalItems = useSelector(selectTotalItems);
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

  const getStudentPostAction = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    dispatch(getStudentPost({ ...filter, subCategoryId }));
  };
  const handleFilter = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    setFilter(filter);
    dispatch(getStudentPost({ ...filter, subCategoryId }));
  };

  return {
    studentPost,
    getStudentPostAction,
    statusGetStudentPost,
    statusGetStudentPostDetail,
    studentPostDetail,
    filter,
    setFilter,
    totalPages,
    totalItems,
    handleFilter,
  };
};
