import { createSelector } from "reselect";

import { RootState } from "@/app/store";
import { IPostState } from "./post.type";

const selectPost = (state: RootState) => state.post as IPostState;

export const selectPostData = createSelector(
  [selectPost],
  (state) => state.post.data
);
export const selectPostDetail = createSelector(
  [selectPost],
  (state) => state.postDetail
);
export const selectStatusGetPost = createSelector(
  [selectPost],
  (state) => state.statusGetPost
);
export const selectStatusGetPostDetail = createSelector(
  [selectPost],
  (state) => state.statusGetPostDetail
);
export const selectPostTotalPages = createSelector(
  [selectPost],
  (state) => state.post.totalPages
);
export const selectPostTotalItems = createSelector(
  [selectPost],
  (state) => state.post.totalItems
);
