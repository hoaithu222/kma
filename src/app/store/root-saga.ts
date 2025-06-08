import { homeSaga } from "@/features/home/slice/home.saga.ts";
import { all } from "redux-saga/effects";
import { studentSaga } from "@/features/student/slice/student.saga";

export const rootSage = function* () {
  try {
    yield all([homeSaga(), studentSaga()]);
  } catch (error) {
    console.error(error);
  }
};
