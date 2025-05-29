import { PayloadAction } from "@reduxjs/toolkit";
import { createResettableSlice } from "../../create-resettabable-slice";
import { AppReducerType } from "../../types";

export interface NavbarState {
  isMobileMenuOpen: boolean;
}

const initialState: NavbarState = {
  isMobileMenuOpen: false,
};

const { slice, reducer } = createResettableSlice({
  name: AppReducerType.NAVBAR,
  initialState,
  reducers: {
    setIsMobileMenuOpen: (
      state: NavbarState,
      action: PayloadAction<boolean>
    ) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});
export const { setIsMobileMenuOpen } = slice.actions;
export default reducer;
