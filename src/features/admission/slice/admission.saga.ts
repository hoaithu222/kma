import { getPublicArticle } from "@/core/api/posts";
import {
  getAdmission,
  getAdmissionDetail,
  getAdmissionDetailFailure,
  getAdmissionDetailSuccess,
  getAdmissionFailure,
  getAdmissionSuccess,
} from "./admission.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

export function* getAdmissionSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getAdmissionSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getAdmissionFailure(error));
  }
}
function* getAdmissionDetailSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getAdmissionDetailSuccess({
        data: response.data.data,
      })
    );
  } catch (error) {
    yield put(getAdmissionDetailFailure(error));
  }
}
function* watchAdmissionSaga() {
  yield takeLatest(getAdmission, getAdmissionSaga);
  yield takeLatest(getAdmissionDetail, getAdmissionDetailSaga);
}

export function* admissionSaga() {
  yield all([watchAdmissionSaga()]);
}
