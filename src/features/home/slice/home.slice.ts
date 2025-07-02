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

  bannerPost: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },
  newsPost: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },
  eventPostNew: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },
  eventPostAdmission: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },
  studentPost: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },
  cooperationPost: {
    content: [],
    totalPages: 0,
    totalItems: 0,
  },

  statusLecturer: ReduxStateType.INIT,
  statusCategory: ReduxStateType.INIT,
  statusSubCategory: ReduxStateType.INIT,
  statusMajor: ReduxStateType.INIT,
  statusSubMajor: ReduxStateType.INIT,
  // trang tĩnh
  page: [],
  statusPage: ReduxStateType.INIT,
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
    // lấy banner với id subCategory 53
    getBannerPost: () => {},
    getBannerPostSuccess: (state, action) => {
      state.bannerPost = action.payload;
    },
    getBannerPostError: (state, action) => {
      state.error = action.payload;
    },
    // lấy tin tức mới nhất với id subCategory  50
    getNewsPost: () => {},
    getNewsPostSuccess: (state, action) => {
      state.newsPost = action.payload;
    },
    getNewsPostError: (state, action) => {
      state.error = action.payload;
    },
    // lấy sụ kiện mới nhất với id 49
    getEventPostNew: () => {},
    getEventPostNewSuccess: (state, action) => {
      state.eventPostNew = action.payload;
    },
    getEventPostNewError: (state, action) => {
      state.error = action.payload;
    },
    // lấy các bài post liên quan đến đào tạo tuyển sinh id 51
    getEventPostAdmission: () => {},
    getEventPostAdmissionSuccess: (state, action) => {
      state.eventPostAdmission = action.payload;
    },
    getEventPostAdmissionError: (state, action) => {
      state.error = action.payload;
    },
    // lấy các bài post liên quan đến cựu sinh viên id 52
    getStudentPost: () => {},
    getStudentPostSuccess: (state, action) => {
      state.studentPost = action.payload;
    },
    getStudentPostError: (state, action) => {
      state.error = action.payload;
    },
    // lấy các bài post liên quan đến hợp tác đối ngoại id 40
    getCooperationPost: () => {},
    getCooperationPostSuccess: (state, action) => {
      state.cooperationPost = action.payload;
    },
    getCooperationPostError: (state, action) => {
      state.error = action.payload;
    },
    // lấy danh sách trang tĩnh
    getPageList: (state) => {
      state.statusPage = ReduxStateType.LOADING;
    },
    getPageListSuccess: (state, action) => {
      state.page = action.payload;
      state.statusPage = ReduxStateType.SUCCESS;
    },
    getPageListError: (state, action) => {
      state.error = action.payload;
      state.statusPage = ReduxStateType.ERROR;
    },
  },
  persist: {
    whitelist: [
      "category",
      "subCategory",
      "major",
      "subMajor",
      "bannerPost",
      "newsPost",
      "eventPostNew",
      "eventPostAdmission",
      "studentPost",
      "cooperationPost",
      "page",
    ],
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
  getBannerPost,
  getBannerPostSuccess,
  getBannerPostError,
  getNewsPost,
  getNewsPostSuccess,
  getNewsPostError,
  getEventPostNew,
  getEventPostNewSuccess,
  getEventPostNewError,
  getEventPostAdmission,
  getEventPostAdmissionSuccess,
  getEventPostAdmissionError,
  getStudentPost,
  getStudentPostSuccess,
  getStudentPostError,
  getCooperationPost,
  getCooperationPostSuccess,
  getCooperationPostError,
  getPageList,
  getPageListSuccess,
  getPageListError,
} = slice.actions;
export default reducer;
