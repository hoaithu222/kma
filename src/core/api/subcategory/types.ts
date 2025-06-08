export interface IRequestSearchSubcategory {
  name: string;
  slug: string;
  categoryId: string;
}

export interface IResponseSubcategory {
  id: string;
  name: string;
  categoryId: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
