import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/**
 * Khai báo tên các slice ở đây
 *
 *
 *
 *
 */
export enum AppReducerType {
  LANGUAGE = "language",
  TOAST = "toast",
  THEME = "theme",
  HOME = "home",
  NAVBAR = "navbar",
  STUDENT = "student",
  EVENT = "event",
  POST = "post",
  DETAIL_POST = "detailPost",
  RESEARCH = "research",
  LECTURER = "lecturer",
}
export enum ReduxStateType {
  INIT = "init",
  LOADING = "loading",
  VERIFYING = "verifying",
  LOADED = "loaded",
  ERROR = "error",
  CANCELLED = "cancelled",
  SUCCESS = "success",
  LIMIT = "limit",
}
