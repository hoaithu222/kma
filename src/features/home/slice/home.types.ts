import { ReduxStateType } from "@/app/store/types";
import { IResponseSubCategory } from "@/core/api/category/types";
import { IResponseCategory } from "@/core/api/home/types";
import { IResponseGetLecturer } from "@/core/api/lecturer/types";
import { IResponsePublicArticle } from "@/core/api/posts/types";
import { IResponseGetMajor } from "@/core/api/major/types";
import { IResponseGetSubMajor } from "@/core/api/sub-major/types";

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
  statusLecturer: ReduxStateType;
  statusCategory: ReduxStateType;
  statusSubCategory: ReduxStateType;
  statusMajor: ReduxStateType;
  statusSubMajor: ReduxStateType;
}

export type { initialStateType };
