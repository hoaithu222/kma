import { AppReducerType, ReduxStateType } from "@/app/store/types";
import { initialStateType } from "./home.types";
import { PAGE_SIZE, PAGE_SIZE_SMALL } from "@/shared/consts/consts";
import { createResettableSlice } from "@/app/store/create-resettabable-slice";

const initialState: initialStateType = {
  posts: [],
  status: ReduxStateType.INIT,
  error: null,
  filter: {
    page: PAGE_SIZE_SMALL,
    size: PAGE_SIZE,
  },
  category: [],
  lecturer: [],
  subCategory: [],
  major: [],
  subMajor: [],
  statusLecturer: ReduxStateType.INIT,
  statusCategory: ReduxStateType.INIT,
  statusSubCategory: ReduxStateType.INIT,
  statusMajor: ReduxStateType.INIT,
  statusSubMajor: ReduxStateType.INIT,
};

const { slice, reducer } = createResettableSlice({
  name: AppReducerType.HOME,
  initialState,
  reducers: {
    // lấy bài viết
    getPosts: (state) => {
      state.status = ReduxStateType.LOADING;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.status = ReduxStateType.SUCCESS;
    },
    getPostsError: (state, action) => {
      state.error = action.payload;
    },
    // lấy danh mục
    getCategory: (state) => {
      state.status = ReduxStateType.LOADING;
    },
    getCategorySuccess: (state, action) => {
      state.category = action.payload;
      state.status = ReduxStateType.SUCCESS;
    },
    getCategoryError: (state, action) => {
      state.error = action.payload;
    },
    // lấy danh mục con

    getSubCategory: (state, _action) => {
      state.statusSubCategory = ReduxStateType.LOADING;
    },
    getSubCategorySuccess: (state, action) => {
      state.subCategory = action.payload;
      state.statusSubCategory = ReduxStateType.SUCCESS;
    },
    getSubCategoryError: (state, action) => {
      state.error = action.payload;
    },
    // lấy giảng viên
    getLecturer: (state, _action) => {
      state.statusLecturer = ReduxStateType.LOADING;
    },
    getLecturerSuccess: (state, action) => {
      state.lecturer = action.payload;
      state.statusLecturer = ReduxStateType.SUCCESS;
    },
    getLecturerError: (state, action) => {
      state.error = action.payload;
    },
    // lấy chuyên ngành
    getMajor: (state) => {
      state.statusMajor = ReduxStateType.LOADING;
    },
    getMajorSuccess: (state, action) => {
      state.major = action.payload;
      state.statusMajor = ReduxStateType.SUCCESS;
    },
    getMajorError: (state, action) => {
      state.error = action.payload;
    },
    // lấy chuyên ngành con
    getSubMajor: (state) => {
      state.statusSubMajor = ReduxStateType.LOADING;
    },
    getSubMajorSuccess: (state, action) => {
      state.subMajor = action.payload;
      state.statusSubMajor = ReduxStateType.SUCCESS;
    },
    getSubMajorError: (state, action) => {
      state.error = action.payload;
    },
    // lấy chuyên ngành con
    getSubMajorHome: (state) => {
      state.statusSubMajor = ReduxStateType.LOADING;
    },
    getSubMajorHomeSuccess: (state, action) => {
      state.subMajor = action.payload;
      state.statusSubMajor = ReduxStateType.SUCCESS;
    },
    getSubMajorHomeError: (state, action) => {
      state.error = action.payload;
      state.statusSubMajor = ReduxStateType.ERROR;
    },
  },
  persist: {
    whitelist: ["category", "subCategory", "major", "subMajor"],
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsError,
  getCategory,
  getCategorySuccess,
  getCategoryError,
  getSubCategory,
  getSubCategorySuccess,
  getSubCategoryError,
  getLecturer,
  getLecturerSuccess,
  getLecturerError,
  getMajor,
  getMajorSuccess,
  getMajorError,
  getSubMajor,
  getSubMajorSuccess,
  getSubMajorError,
  getSubMajorHome,
  getSubMajorHomeSuccess,
} = slice.actions;
export default reducer;
