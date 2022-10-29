import { createSlice } from "@reduxjs/toolkit";
import { removeObject } from "../../../helpers/functions";
import { fetchCategories } from "./asyncActions";

const initialState = {
  categories: [{
    id: 0,
    title: "Все"
  }],
  categoriesId: [0],
  status: "loading" // loading | error | success
};

const sliceCategories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategoryId: (state, actions) => {
      if (state.categoriesId.includes(actions.payload) && state.categoriesId.length > 1) {
        state.categoriesId = [...state.categoriesId].filter(category => category !== actions.payload);
        return;
      }
      if (!state.categoriesId.includes(actions.payload)) {
        state.categoriesId = [...state.categoriesId, actions.payload];
        return;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, actions) => {
      state.categories = [];
      state.categoriesId = [...state.categoriesId];
      state.status = "loading";
    });
    builder.addCase(fetchCategories.rejected, (state, actions) => {
      state.categories = [];
      state.categoriesId = [];
      state.status = "error";
    });
    builder.addCase(fetchCategories.fulfilled, (state, actions) => {
      const [categoriesId] = removeObject(actions.payload, "channels");

      state.categories = categoriesId;
      state.categoriesId = [...state.categoriesId];
      state.status = "success";
    });
  },
});

export const { addCategoryId } = sliceCategories.actions;

export default sliceCategories.reducer;