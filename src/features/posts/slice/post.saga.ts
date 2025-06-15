import { getPublicArticle } from "@/core/api/posts";
import {
  getPost,
  getPostDetail,
  getPostDetailFailure,
  getPostDetailSuccess,
  getPostFailure,
  getPostSuccess,
} from "./post.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getPostSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getPostSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getPostFailure(error));
  }
}
function* getPostDetailSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getPostDetailSuccess({
        data: response.data.data,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getPostDetailFailure(error));
  }
}
function* watchPostSaga() {
  yield takeLatest(getPost, getPostSaga);
  yield takeLatest(getPostDetail, getPostDetailSaga);
}

export function* postSaga() {
  yield all([watchPostSaga()]);
}
