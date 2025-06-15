import { getPublicArticle } from "@/core/api/posts";
import {
  getResearchPost,
  getResearchPostDetail,
  getResearchPostDetailFailure,
  getResearchPostDetailSuccess,
  getResearchPostFailure,
  getResearchPostSuccess,
} from "./research.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getPostSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getResearchPostSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getResearchPostFailure(error));
  }
}
function* getPostDetailSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getResearchPostDetailSuccess({
        data: response.data.data,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getResearchPostDetailFailure(error));
  }
}
function* watchResearchSaga() {
  yield takeLatest(getResearchPost, getPostSaga);
  yield takeLatest(getResearchPostDetail, getPostDetailSaga);
}

export function* researchSaga() {
  yield all([watchResearchSaga()]);
}
