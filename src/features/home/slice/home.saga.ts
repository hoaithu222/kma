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
  getPageListError,
  getPageList,
  getPageListSuccess,
} from "./home.slice";
import { getCategoriesApi } from "@/core/api/category";
import { getSubcategoriesApi } from "@/core/api/subcategory";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRequestGetLecturer } from "@/core/api/lecturer/types";
import { getLecturersAllApi } from "@/core/api/lecturer";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { getPublicArticle } from "@/core/api/posts";
import { PageResponse } from "@/core/api/pageApi/types";
import { getPageListApi } from "@/core/api/pageApi";

// Constants for subcategory IDs
const SUBCATEGORY_IDS = {
  BANNER: 53,
  NEWS: 50,
  EVENT_NEW: 49,
  EVENT_ADMISSION: 51,
  STUDENT: 52,
  COOPERATION: 40,
} as const;

// Generic error handler
const handleError = (error: any) => {
  console.error("Saga Error:", error);
  return error;
};

// Generic article fetcher
function* fetchArticles(
  params: IRequestSearchArticlePublic,
  successAction: any,
  errorAction: any
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, params);
    yield put(
      successAction({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(errorAction(handleError(error)));
  }
}

// Article fetching sagas
function* fetchArticlesHome(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(getPostsSuccess(response.data.data.content));
  } catch (error) {
    yield put(getPostsError(handleError(error)));
  }
}

function* fetchBannerPost() {
  yield* fetchArticles(
    {
      page: 0,
      size: 4,
      subCategoryId: SUBCATEGORY_IDS.BANNER,
    },
    getBannerPostSuccess,
    getBannerPostError
  );
}

function* fetchNewsPost() {
  yield* fetchArticles(
    {
      page: 0,
      size: 4,
      subCategoryId: SUBCATEGORY_IDS.NEWS,
      status: "published",
    },
    getNewsPostSuccess,
    getNewsPostError
  );
}

function* fetchEventPostNew() {
  yield* fetchArticles(
    {
      page: 0,
      size: 4,
      subCategoryId: SUBCATEGORY_IDS.EVENT_NEW,
      status: "published",
    },
    getEventPostNewSuccess,
    getEventPostNewError
  );
}

function* fetchEventPostAdmission() {
  yield* fetchArticles(
    {
      page: 0,
      size: 2,
      subCategoryId: SUBCATEGORY_IDS.EVENT_ADMISSION,
      status: "published",
    },
    getEventPostAdmissionSuccess,
    getEventPostAdmissionError
  );
}

function* fetchStudentPost() {
  yield* fetchArticles(
    {
      page: 0,
      size: 10,
      subCategoryId: SUBCATEGORY_IDS.STUDENT,
      status: "published",
    },
    getStudentPostSuccess,
    getStudentPostError
  );
}

function* fetchCooperationPost() {
  yield* fetchArticles(
    {
      page: 0,
      size: 2,
      subCategoryId: SUBCATEGORY_IDS.COOPERATION,
      status: "published",
    },
    getCooperationPostSuccess,
    getCooperationPostError
  );
}

function* fetchPageList() {
  try {
    const response: PageResponse = yield call(getPageListApi);
    yield put(getPageListSuccess(response.data));
  } catch (error) {
    yield put(getPageListError(handleError(error)));
  }
}

// Category related sagas
function* fetchCategory(): Generator<any, void, any> {
  try {
    const response = yield call(getCategoriesApi);
    yield put(getCategorySuccess(response.data.data));
  } catch (error) {
    yield put(getCategoryError(handleError(error)));
  }
}

function* fetchSubCategory(
  action: PayloadAction<{ categoryId: number }>
): Generator<any, void, any> {
  try {
    const response = yield call(getSubcategoriesApi, action.payload.categoryId);
    yield put(getSubCategorySuccess(response.data.data));
  } catch (error) {
    yield put(getSubCategoryError(handleError(error)));
  }
}

// Lecturer saga
function* fetchLecturer(
  action: PayloadAction<IRequestGetLecturer>
): Generator<any, void, any> {
  try {
    const response = yield call(getLecturersAllApi, action.payload);
    yield put(getLecturerSuccess(response.data.data));
  } catch (error) {
    yield put(getLecturerError(handleError(error)));
  }
}

// Watchers
const createWatcher = (action: any, saga: any) => takeLatest(action.type, saga);

export function* homeSaga() {
  yield all([
    // Article watchers
    createWatcher(getPosts, fetchArticlesHome),
    createWatcher(getBannerPost, fetchBannerPost),
    createWatcher(getNewsPost, fetchNewsPost),
    createWatcher(getEventPostNew, fetchEventPostNew),
    createWatcher(getEventPostAdmission, fetchEventPostAdmission),
    createWatcher(getStudentPost, fetchStudentPost),
    createWatcher(getCooperationPost, fetchCooperationPost),

    // Category watchers
    createWatcher(getCategory, fetchCategory),
    createWatcher(getSubCategory, fetchSubCategory),

    // Lecturer watcher
    createWatcher(getLecturer, fetchLecturer),

    // Page watcher
    createWatcher(getPageList, fetchPageList),
  ]);
}
