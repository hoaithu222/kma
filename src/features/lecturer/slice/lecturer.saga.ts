import { call, put, takeEvery } from "redux-saga/effects";
import {
  getDetailLecturer,
  getDetailLecturerFailed,
  getDetailLecturerSuccess,
  getLecturer,
  getLecturerFailed,
  getLecturerSuccess,
} from "./lecturer.slice";
import { getLecturerByIdApi, getLecturersAllApi } from "@/core/api/lecturer";
import { PayloadAction } from "@reduxjs/toolkit";

function* getLecturerSaga(): Generator<any, void, any> {
  try {
    const response = yield call(getLecturersAllApi, {});
    yield put(getLecturerSuccess(response.data.data));
  } catch (error) {
    yield put(getLecturerFailed(error as string));
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
  yield takeEvery(getLecturer, getLecturerSaga);
  yield takeEvery(getDetailLecturer, getDetailLecturerSaga);
}
