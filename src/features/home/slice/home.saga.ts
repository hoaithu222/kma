import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getCategoryError,
  getCategorySuccess,
  getCategory,
  getPosts,
  getPostsError,
  getPostsSuccess,
  getSubCategorySuccess,
  getSubCategoryError,
  getSubCategory,
  getLecturerSuccess,
  getLecturerError,
  getLecturer,
} from "./home.slice";
import { getCategoriesApi } from "@/core/api/category";

// import { IRequestBanner } from "@/core/api/home/types";
import { getArticlesHome } from "@/core/api/home";
import { getSubcategoriesApi } from "@/core/api/subcategory";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRequestGetLecturer } from "@/core/api/lecturer/types";
import { getLecturersAllApi } from "@/core/api/lecturer";
// lấy bài viết
function* fetchArticlesHome(): Generator<any, void, any> {
  try {
    const response = yield call(getArticlesHome);

    yield put(getPostsSuccess(response.data.data));
  } catch (error) {
    yield put(getPostsError(error));
  }
}
// lấy danh mục
function* fetchCategory(): Generator<any, void, any> {
  try {
    const response = yield call(getCategoriesApi);

    yield put(getCategorySuccess(response.data.data));
  } catch (error) {
    yield put(getCategoryError(error));
  }
}
// lấy danh mục con
function* fetchSubCategory(
  action: PayloadAction<{ categoryId: number }>
): Generator<any, void, any> {
  try {
    const response = yield call(getSubcategoriesApi, action.payload.categoryId);

    yield put(getSubCategorySuccess(response.data.data));
  } catch (error) {
    yield put(getSubCategoryError(error));
  }
}
// lấy giảng viên
function* fetchLecturer(
  action: PayloadAction<IRequestGetLecturer>
): Generator<any, void, any> {
  try {
    const response = yield call(getLecturersAllApi, action.payload);

    yield put(getLecturerSuccess(response.data.data));
  } catch (error) {
    yield put(getLecturerError(error));
  }
}
// lấy giảng viên
function* watchGetLecturer() {
  yield takeLatest(getLecturer.type, fetchLecturer);
}
// lấy danh mục con
function* watchGetSubCategory() {
  yield takeLatest(getSubCategory.type, fetchSubCategory);
}
// lấy danh mục con
function* watchGetCategory() {
  yield takeLatest(getCategory.type, fetchCategory);
}

function* watchGetPosts() {
  yield takeLatest(getPosts.type, fetchArticlesHome);
}

export function* homeSaga() {
  yield all([
    watchGetPosts(),
    watchGetCategory(),
    watchGetSubCategory(),
    watchGetLecturer(),
  ]);
}
