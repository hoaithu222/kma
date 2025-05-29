import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { NavbarState } from "./index";

export const selectNavbar = (state: RootState) => state.navbar;

export const isMobileMenuOpenSelector = createSelector(
  [selectNavbar],
  (navbar: NavbarState) => navbar.isMobileMenuOpen
);
