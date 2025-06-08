import { createSelector } from "reselect";

import { RootState } from "@/app/store";
import { IEventState } from "./event.types";

const selectEvent = (state: RootState) => state.event as IEventState;

export const selectEventPost = createSelector(
  [selectEvent],
  (state) => state.eventPost.data
);
export const selectEventPostDetail = createSelector(
  [selectEvent],
  (state) => state.eventPostDetail
);
export const selectStatusGetEventPost = createSelector(
  [selectEvent],
  (state) => state.statusGetEventPost
);
export const selectStatusGetEventPostDetail = createSelector(
  [selectEvent],
  (state) => state.statusGetEventPostDetail
);
export const selectTotalPages = createSelector(
  [selectEvent],
  (state) => state.eventPost.totalPages
);
export const selectTotalItems = createSelector(
  [selectEvent],
  (state) => state.eventPost.totalItems
);
