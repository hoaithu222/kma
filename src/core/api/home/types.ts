export interface IRequestArticle {
  keyword?: string | null;
  page?: number;
  size?: number;
  categoryId?: number | null;
  subCategoryId?: string | null;
  status?: "draft" | "published" | null;
  isPrivate?: boolean | null;
  tag?: string[] | null;
  sort?: "viewCount" | "publishedAt" | "createdAt" | null;
  order?: "asc" | "desc" | null;
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
