import { RootState } from "@/app/store";
import { initialStateType } from "./detail-post-types";
import { createSelector } from "@reduxjs/toolkit";

export const selectDetailPost = (state: RootState) =>
  state.detailPost as initialStateType;

export const selectPost = createSelector(
  [selectDetailPost],
  (state) => state.post
);

export const selectStatusGetPost = createSelector(
  [selectDetailPost],
  (state) => state.statusGetPost
);

export const selectErrorGetPost = createSelector(
  [selectDetailPost],
  (state) => state.error
);

export const selectListRelatedPost = createSelector(
  [selectDetailPost],
  (state) => state.listRelatedPost.data
);

export const selectStatusGetListRelatedPost = createSelector(
  [selectDetailPost],
  (state) => state.statusGetListRelatedPost
);
