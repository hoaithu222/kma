export interface IRequestCategory {
  page: number;
  limit: number;
  search: string;
  sort: string;
  order: string;
}

export interface IResponseData {
  status: boolean;
  message: string;
  data: IResponseCategory[];
}
export interface IResponseSubCategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface IResponseCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  subCategories: IResponseSubCategory[];
}
