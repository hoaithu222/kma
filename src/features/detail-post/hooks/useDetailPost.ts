import { useDispatch, useSelector } from "react-redux";
import {
  getListRelatedPost,
  getPostDetail,
  increaseViewCountRequest,
} from "@/features/detail-post/slice/detail-post.slice";
import {
  selectErrorGetPost,
  selectListRelatedPost,
  selectPost,
  selectStatusGetListRelatedPost,
  selectStatusGetPost,
} from "../slice/detail-post.selector";
import { useState } from "react";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export const useDetailPost = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const statusGetPost = useSelector(selectStatusGetPost);
  const error = useSelector(selectErrorGetPost);

  const getPostDetailDispatch = (id: string) => {
    dispatch(getPostDetail(id));
  };
  // lấy danh  sách sách bài viết liên quan đến anh mục
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
  const getListRelatedPostDispatch = (categoryId: number) => {
    dispatch(getListRelatedPost({ ...filter, categoryId }));
  };
  const increaseViewCountDispatch = (id: string) => {
    dispatch(increaseViewCountRequest(id));
  };
  const listRelatedPost = useSelector(selectListRelatedPost);
  const statusGetListRelatedPost = useSelector(selectStatusGetListRelatedPost);
  return {
    getPostDetailDispatch,
    getListRelatedPostDispatch,
    post,
    statusGetPost,
    error,
    listRelatedPost,
    statusGetListRelatedPost,
    filter,
    setFilter,
    increaseViewCountDispatch,
  };
};
