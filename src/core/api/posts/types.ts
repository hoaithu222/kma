import { IResponse } from "@/core/base/Response";

export interface ITag {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
}
export interface IFile {
  id: number;
  fileName: string;
  originalName: string;
  filePath: string;
  fileType: string;
  fileSize: number;
  mimeType: string;
  dimensions: string;
  createdAt: string;
}
export interface ResponseArticle {
  id: number;
  categoryId: number;
  categoryName: string;
  subCategoryName: string;
  folderUrl: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  content: string;
  files: IFile[];
  thumbnail: string[];
  tag: ITag[];
  thumbnailUrl: string;
  dimensions: string;
  viewCount: number;
  status: "draft" | "published" | "archived";
  publishedAt: string;
  updatedAt: string;
  isPrivate: boolean;
}
export interface IRequestIncreaseViewCount {
  id: number;
}
export interface IResponseIncreaseViewCount extends IResponse<null> {}

export interface IRequestSearchArticlePublic {
  keyword?: string | null;
  page?: number;
  size?: number;
  categoryId?: number | null;
  subCategoryId?: number | null | string;
  status?: "draft" | "published" | null;
  isPrivate?: boolean | null;
  tag?: string[] | null;
  sort?: "viewCount" | "publishedAt" | "createdAt" | null;
  order?: "asc" | "desc" | null;
}
export interface IResponsePublicArticle extends IResponse<ResponseArticle> {
  totalPages: number;
  totalElements: number;
}

export interface IRequestGetHomeArticle {}
export interface IResponseGetHomeArticle extends IResponse<ResponseArticle> {}
