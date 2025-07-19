import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slice/base-post.slice";
import {
  statusGetDetailPost,
  selectDetailPost,
  selectTotalItemsPosts,
  selectTotalPagesPosts,
  selectContentPosts,
} from "../slice/base-post.selector";
import { useState } from "react";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export const useBasePost = () => {
  const dispatch = useDispatch();
  const statusGetStudentPost = useSelector(statusGetDetailPost);
  // lấy chi tiết bài viết liên quan đến sinh viên
  const postDetail = useSelector(selectDetailPost);
  const statusGetStudentPostDetail = useSelector(statusGetDetailPost);
  const posts = useSelector(selectContentPosts);
  const totalPages = useSelector(selectTotalPagesPosts);
  const totalItems = useSelector(selectTotalItemsPosts);
  // lấy danh sách bài viết liên quan đến sinh viên
  const [filter, setFilter] = useState<IRequestSearchArticlePublic>({
    page: 0,
    size: 9,
  });
  console.log("posts", posts);

  const getPostsAction = (
    filter: IRequestSearchArticlePublic,
    categoryId: number
  ) => {
    dispatch(getPosts({ ...filter, categoryId }));
  };
  const handleFilter = (
    filter: IRequestSearchArticlePublic,
    categoryId: number
  ) => {
    setFilter(filter);
    dispatch(getPosts({ ...filter, categoryId }));
  };

  return {
    posts,
    getPostsAction,
    statusGetStudentPost,
    statusGetStudentPostDetail,
    postDetail,
    filter,
    setFilter,
    totalPages,
    totalItems,
    handleFilter,
  };
};
