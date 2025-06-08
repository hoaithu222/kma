import { getPublicArticle } from "@/core/api/posts";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getStudentPost,
  getStudentPostFailure,
  getStudentPostSuccess,
} from "./student.slice";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getStudentPostSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getStudentPostSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getStudentPostFailure(error));
  }
}
function* watchGetStudentPostSaga() {
  yield takeLatest(getStudentPost, getStudentPostSaga);
}
export function* studentSaga() {
  yield all([watchGetStudentPostSaga()]);
}
