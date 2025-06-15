import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./slices/language";
import themeReducer from "./slices/theme";
import { AppReducerType } from "./types";
import homeReducer from "@/features/home/slice/home.slice.ts";
import navbarReducer from "./slices/navbar";
import studentReducer from "@/features/student/slice/student.slice";

import eventReducer from "@/features/event/slice/event.slice";
import detailPostReducer from "@/features/detail-post/slice/detail-post.slice";
import researchReducer from "@/features/research/slice/research.slice";
import lecturerReducer from "@/features/lecturer/slice/lecturer.slice";
import postReducer from "@/features/posts/slice/post.slice";
import admissionReducer from "@/features/admission/slice/admission.slice";

export const rootReducer = combineReducers({
  [AppReducerType.LANGUAGE]: languageReducer,
  [AppReducerType.THEME]: themeReducer,
  [AppReducerType.HOME]: homeReducer,
  [AppReducerType.NAVBAR]: navbarReducer,
  [AppReducerType.STUDENT]: studentReducer,
  [AppReducerType.EVENT]: eventReducer,
  [AppReducerType.DETAIL_POST]: detailPostReducer,
  [AppReducerType.RESEARCH]: researchReducer,
  [AppReducerType.LECTURER]: lecturerReducer,
  [AppReducerType.POST]: postReducer,
  [AppReducerType.ADMISSION]: admissionReducer,
});
