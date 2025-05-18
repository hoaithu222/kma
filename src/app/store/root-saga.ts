import { homeSaga } from "@/features/home/slice/home.saga.ts";
import { all } from "redux-saga/effects";

export const rootSage = function* () {
  try {
    yield all([homeSaga()]);
  } catch (error) {
    console.error(error);
  }
};
