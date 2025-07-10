// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiManagerReducer from "./ui-management/ui-Managemnet";

const store = configureStore({
  reducer: {
    uiManager: uiManagerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
