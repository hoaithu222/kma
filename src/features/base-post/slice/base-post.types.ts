import { ReduxStateType } from "@/app/store/types";
import { ITag } from "@/core/api/posts/types";

import { IFile } from "@/core/api/posts/types";

export interface initialStateType {
  posts: {
    content: Post[];
    totalPages: number;
    totalItems: number;
    statusGetListPost: ReduxStateType;
  };
  detailPost: {
    detailPost: Post | null;
    statusGetDetailPost: ReduxStateType;
  };
}
export interface Post {
  id: number;
  categoryId: number;
  subCategoryName: string;
  folderUrl: string;
  subCategoryId: number;
  categoryName: string;
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
