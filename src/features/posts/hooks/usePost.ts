import { useDispatch, useSelector } from "react-redux";

import { getPost } from "../slice/post.slice";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { useState } from "react";
import {
  selectPostData,
  selectPostDetail,
  selectPostTotalItems,
  selectPostTotalPages,
  selectStatusGetPost,
  selectStatusGetPostDetail,
} from "../slice/post.selector";

export const usePost = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPostData);
  const statusGetPost = useSelector(selectStatusGetPost);
  const statusGetPostDetail = useSelector(selectStatusGetPostDetail);
  const postDetail = useSelector(selectPostDetail);
  const totalPages = useSelector(selectPostTotalPages);
  const totalItems = useSelector(selectPostTotalItems);
  const [filter, setFilter] = useState<IRequestSearchArticlePublic>({
    page: 0,
    size: 9,
    categoryId: null,
    subCategoryId: null,
    status: "published",
    tag: null,
    sort: null,
    order: null,
    keyword: null,
  });
  // lấy bài viết
  const getPostAction = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    dispatch(getPost({ ...filter, subCategoryId }));
  };
  const handleFilter = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    setFilter(filter);
    dispatch(getPost({ ...filter, subCategoryId }));
  };
  return {
    post,
    statusGetPost,
    statusGetPostDetail,
    postDetail,
    totalPages,
    totalItems,
    filter,
    setFilter,
    getPostAction,
    handleFilter,
  };
};
