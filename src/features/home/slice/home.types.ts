import { ReduxStateType } from "@/app/store/types";

interface initialStateType {
  posts: any[];
  status: ReduxStateType;
  error: string | null;
  filter: {
    page: number;
    size: number;
  };
  category: any;
}

export type { initialStateType };
