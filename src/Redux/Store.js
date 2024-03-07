import { configureStore } from "@reduxjs/toolkit";
import TeethySlice from "./TeethySlice";

export const store = configureStore({
  reducer: {
    Teeth: TeethySlice,
  },
});
