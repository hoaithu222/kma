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
  getBannerPostSuccess,
  getBannerPostError,
  getNewsPostSuccess,
  getNewsPostError,
  getEventPostNewSuccess,
  getEventPostNewError,
  getEventPostAdmissionSuccess,
  getEventPostAdmissionError,
  getStudentPostSuccess,
  getStudentPostError,
  getCooperationPostSuccess,
  getCooperationPostError,
  getBannerPost,
  getEventPostNew,
  getNewsPost,
  getEventPostAdmission,
  getCooperationPost,
  getStudentPost,
} from "./home.slice";
import { getCategoriesApi } from "@/core/api/category";

// import { IRequestBanner } from "@/core/api/home/types";

import { getSubcategoriesApi } from "@/core/api/subcategory";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRequestGetLecturer } from "@/core/api/lecturer/types";
import { getLecturersAllApi } from "@/core/api/lecturer";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { getPublicArticle } from "@/core/api/posts";
// lấy bài viết
function* fetchArticlesHome(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);

    yield put(getPostsSuccess(response.data.data.content));
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
// lấy banner với id subCategory 53
function* fetchBannerPost(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 53,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getBannerPostSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getBannerPostError(error));
  }
}

// lấy tin tức mới nhất với id subCategory  50
function* fetchNewsPost(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 50,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getNewsPostSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getNewsPostError(error));
  }
}
// lấy sụ kiện mới nhất với id 49
function* fetchEventPostNew(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 49,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getEventPostNewSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getEventPostNewError(error));
  }
}
// lấy các bài post liên quan đến đào tạo tuyển sinh id 51
function* fetchEventPostAdmission(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 51,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getEventPostAdmissionSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getEventPostAdmissionError(error));
  }
}
// lấy các bài post liên quan đến cựu sinh viên id 52
function* fetchStudentPost(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 52,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getStudentPostSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getStudentPostError(error));
  }
}
// lấy các bài post liên quan đến hợp tác đối ngoại id 40
function* fetchCooperationPost(): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, {
      page: 0,
      size: 10,
      subCategoryId: 40,
      status: "published",
      isPrivate: false,
    });
    yield put(
      getCooperationPostSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getCooperationPostError(error));
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
// lấy banner với id subCategory 53
function* watchGetBannerPost() {
  yield takeLatest(getBannerPost.type, fetchBannerPost);
}
// lấy tin tức mới nhất với id subCategory  50
function* watchGetNewsPost() {
  yield takeLatest(getNewsPost.type, fetchNewsPost);
}
// lấy sụ kiện mới nhất với id 49
function* watchGetEventPostNew() {
  yield takeLatest(getEventPostNew.type, fetchEventPostNew);
}
// lấy các bài post liên quan đến đào tạo tuyển sinh id 51
function* watchGetEventPostAdmission() {
  yield takeLatest(getEventPostAdmission.type, fetchEventPostAdmission);
}
// lấy các bài post liên quan đến cựu sinh viên id 52
function* watchGetStudentPost() {
  yield takeLatest(getStudentPost.type, fetchStudentPost);
}
// lấy các bài post liên quan đến hợp tác đối ngoại id 40
function* watchGetCooperationPost() {
  yield takeLatest(getCooperationPost.type, fetchCooperationPost);
}

export function* homeSaga() {
  yield all([
    watchGetPosts(),
    watchGetCategory(),
    watchGetSubCategory(),
    watchGetLecturer(),
    watchGetBannerPost(),
    watchGetNewsPost(),
    watchGetEventPostNew(),
    watchGetEventPostAdmission(),
    watchGetStudentPost(),
    watchGetCooperationPost(),
  ]);
}
