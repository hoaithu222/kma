import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./slices/language";
import themeReducer from "./slices/theme";
import { AppReducerType } from "./types";
import homeReducer from "@/features/home/slice/home.slice.ts";
import navbarReducer from "./slices/navbar";
import studentReducer from "@/features/student/slice/student.slice";

export const rootReducer = combineReducers({
  [AppReducerType.LANGUAGE]: languageReducer,
  [AppReducerType.THEME]: themeReducer,
  [AppReducerType.HOME]: homeReducer,
  [AppReducerType.NAVBAR]: navbarReducer,
  [AppReducerType.STUDENT]: studentReducer,
});
