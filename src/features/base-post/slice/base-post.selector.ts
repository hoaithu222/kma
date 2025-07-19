import { RootState } from "@/app/store";
import { initialStateType } from "./base-post.types";
import { createSelector } from "@reduxjs/toolkit";

const selectPosts = (state: RootState) => state.basePost as initialStateType;

export const getPostsSelector = createSelector(
  [selectPosts],
  (state) => state.posts
);
export const statusGetPosts = createSelector(
  [selectPosts],
  (state) => state.posts.statusGetListPost
);
// lấy content của posts
export const selectContentPosts = createSelector(
  [selectPosts],
  (state) => state.posts.content || []
);
// lấy totalPages của posts
export const selectTotalPagesPosts = createSelector(
  [selectPosts],
  (state) => state.posts.totalPages
);
// lấy totalItems của posts
export const selectTotalItemsPosts = createSelector(
  [selectPosts],
  (state) => state.posts.totalItems
);

// lấy thông tin chi tiết bài viết
export const selectDetailPost = createSelector(
  [selectPosts],
  (state) => state.detailPost
);
export const statusGetDetailPost = createSelector(
  [selectPosts],
  (state) => state.detailPost.statusGetDetailPost
);
export const selectTotalPages = createSelector(
  [selectPosts],
  (state) => state.posts.totalPages
);
export const selectTotalItems = createSelector(
  [selectPosts],
  (state) => state.posts.totalItems
);
