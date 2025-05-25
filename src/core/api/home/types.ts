export interface IRequestArticle {
  sort: string;
  order: string;
  page: number;
  size: number;
}

export interface IArticle {
  articleId: number;
  title: string;
  slug: string;
  content: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  tagId: number;
  tagName: string;
  subCategoryId: number;
  subCategoryName: string;
  viewCounts: number;
  subCategorySlug: string;
}

export interface IResponseArticle {
  status: boolean;
  message: string;
  data: IArticle[];
}
export interface IResponseData {
  status: boolean;
  message: string;
  data: IResponseCategory[];
}
export interface IResponseCategory {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}
