import { configureStore } from "@reduxjs/toolkit";
import channels from "./slices/channels/slice";
import categories from "./slices/categories/slice";

const store = configureStore({
  reducer: {
    channels,
    categories
  }
});

export default store