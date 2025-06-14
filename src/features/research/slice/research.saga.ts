import { getPublicArticle } from "@/core/api/posts";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getResearchPost,
  getResearchPostFailure,
  getResearchPostSuccess,
} from "./research.slice";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getResearchPostSaga(
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
function* watchGetResearchPostSaga() {
  yield takeLatest(getResearchPost, getResearchPostSaga);
}
export function* researchSaga() {
  yield all([watchGetResearchPostSaga()]);
}
