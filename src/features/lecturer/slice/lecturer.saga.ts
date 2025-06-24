import { call, put, takeEvery } from "redux-saga/effects";
import {
  getDetailLecturer,
  getDetailLecturerFailed,
  getDetailLecturerSuccess,
  getLecturerRequest,
  getLecturerSuccess,
  getLecturerFailure,
} from "./lecturer.slice";
import { getLecturerByIdApi, getLecturersAllApi } from "@/core/api/lecturer";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRequestSearchLecturer } from "@/core/api/lecturer/types";

function* getLecturerSaga(
  action: PayloadAction<IRequestSearchLecturer>
): Generator<any, void, any> {
  try {
    const response = yield call(getLecturersAllApi, action.payload);
    yield put(
      getLecturerSuccess({
        content: response.data.data.content,
        totalElements: response.data.data.totalElements,
        totalPages: response.data.data.totalPages,
        pageNumber: response.data.data.pageNumber,
        pageSize: response.data.data.pageSize,
      })
    );
  } catch (error) {
    yield put(getLecturerFailure(error as string));
  }
}

function* getDetailLecturerSaga(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const response = yield call(getLecturerByIdApi, action.payload);
    yield put(getDetailLecturerSuccess(response.data.data));
  } catch (error) {
    yield put(getDetailLecturerFailed(error as string));
  }
}

export function* lecturerSaga() {
  yield takeEvery(getLecturerRequest, getLecturerSaga);
  yield takeEvery(getDetailLecturer, getDetailLecturerSaga);
}
