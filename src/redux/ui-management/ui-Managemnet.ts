'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";
type InitialStateType = { showMenu: boolean; theme: ThemeType };

const initialState: InitialStateType = {
  showMenu: false,
  theme: "light",  // مقدار پیش‌فرض، بدون دسترسی به localStorage
};

const uiManagerSlice = createSlice({
  name: "ui-manager",
  initialState,
  reducers: {
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

const uiManagerReducer = uiManagerSlice.reducer;

export default uiManagerReducer;

export const { setShowMenu, setTheme, toggleTheme } = uiManagerSlice.actions;
