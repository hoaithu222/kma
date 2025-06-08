import { getPublicArticle } from "@/core/api/posts";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getEventPost,
  getEventPostFailure,
  getEventPostSuccess,
} from "./event.slice";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getEventPostSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getEventPostSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getEventPostFailure(error));
  }
}
function* watchGetEventPostSaga() {
  yield takeLatest(getEventPost, getEventPostSaga);
}
export function* eventSaga() {
  yield all([watchGetEventPostSaga()]);
}
