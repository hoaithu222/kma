import { ReduxStateType } from "@/app/store/types";
import { IResponseSubCategory } from "@/core/api/category/types";
import { IResponseCategory } from "@/core/api/home/types";
import { IResponseGetLecturer } from "@/core/api/lecturer/types";
import { IResponsePublicArticle } from "@/core/api/posts/types";
import { IResponseGetMajor } from "@/core/api/major/types";
import { IResponseGetSubMajor } from "@/core/api/sub-major/types";
import { Page } from "@/core/api/pageApi/types";

interface initialStateType {
  posts: IResponsePublicArticle[];
  status: ReduxStateType;
  lecturer: IResponseGetLecturer[];
  subCategory: IResponseSubCategory[];
  major: IResponseGetMajor[];
  subMajor: IResponseGetSubMajor[];
  error: string | null;
  filter: {
    page: number;
    size: number;
  };
  category: IResponseCategory[];
  // lấy banner với id subCategory 53
  bannerPost: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };
  // lấy tin tức mới nhất với id subCategory  50
  newsPost: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };
  // lấy sụ kiện mới nhất với id 49
  eventPostNew: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };
  // lấy các bài post liên quan đến đào tạo tuyển sinh id 51
  eventPostAdmission: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };
  // lấy các bài post liên quan đến cựu sinh viên id 52
  studentPost: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };
  // lấy các bài post liên quan đến hợp tác đối ngoại id 40
  cooperationPost: {
    content: IResponsePublicArticle[];
    totalPages: number;
    totalItems: number;
  };

  statusLecturer: ReduxStateType;
  statusCategory: ReduxStateType;
  statusSubCategory: ReduxStateType;
  statusMajor: ReduxStateType;
  statusSubMajor: ReduxStateType;
  // data trang tinh
  page: Page[];
  statusPage: ReduxStateType;
}

export type { initialStateType };
