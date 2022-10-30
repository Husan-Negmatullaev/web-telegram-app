import { configureStore } from "@reduxjs/toolkit";
import channels from "./slices/channels/slice";
import categories from "./slices/categories/slice";
import favorite from "./slices/favorite/slice";

const store = configureStore({
  reducer: {
    channels,
    categories,
    favorite
  }
});

export default store