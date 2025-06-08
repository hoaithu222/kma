import { ReduxStateType } from "@/app/store/types";
import { IEventState } from "./event.types";
import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { ResponseArticle } from "@/core/api/posts/types";

const initialState: IEventState = {
  eventPost: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetEventPost: ReduxStateType.INIT,
  statusGetEventPostDetail: ReduxStateType.INIT,
  eventPostDetail: {} as ResponseArticle,
};

const { slice, reducer } = createResettableSlice({
  name: "event",
  initialState,
  reducers: {
    // lấy danh sách bài viết liên quan đến sinh viên
    getEventPost: (state, _action) => {
      state.statusGetEventPost = ReduxStateType.LOADING;
    },
    getEventPostSuccess: (state, action) => {
      state.statusGetEventPost = ReduxStateType.SUCCESS;
      state.eventPost = action.payload;
    },
    getEventPostFailure: (state, _action) => {
      state.statusGetEventPost = ReduxStateType.ERROR;
    },
    // lấy chi tiết bài viết liên quan đến sinh viên
    getEventPostDetail: (state, _action) => {
      state.statusGetEventPostDetail = ReduxStateType.LOADING;
    },
    getEventPostDetailSuccess: (state, action) => {
      state.statusGetEventPostDetail = ReduxStateType.SUCCESS;
      state.eventPostDetail = action.payload;
    },
    getEventPostDetailFailure: (state, _action) => {
      state.statusGetEventPostDetail = ReduxStateType.ERROR;
    },
  },
});
export const {
  getEventPost,
  getEventPostSuccess,
  getEventPostFailure,
  getEventPostDetail,
  getEventPostDetailSuccess,
  getEventPostDetailFailure,
} = slice.actions;
export default reducer;
