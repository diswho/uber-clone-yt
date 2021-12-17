import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlive";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
