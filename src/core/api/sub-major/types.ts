import { IResponse } from "@/core/base/Response";

export interface IRequestGetSubMajor {}
export interface IRequestGetSubMajorWithMajor {
  majorId: number;
}

export interface IRequestGetSubMajorById {
  id: number;
}

export interface dataSubMajor {
  id: number;
  name?: string;
  majorId?: number;
  majorName?: string;
}

export interface IResponseGetSubMajor extends IResponse<dataSubMajor[]> {}
export interface IResponseGetSubMajorWithMajor
  extends IResponse<dataSubMajor[]> {}
