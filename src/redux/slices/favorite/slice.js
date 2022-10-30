import { createSlice } from "@reduxjs/toolkit";
import { fetchFavorites } from "./asyncActions";

const initialState = {
  userFavourites: {
    list: [],
    user: ""
  },
  favoriteList: [],
  status: "loading", // loading | pending | error
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      if (state.userFavourites.user !== actions.payload) {
        state.userFavourites.user = actions.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state, actions) => {
      state.favoriteList = [];
      state.status = "pending";
    });
    builder.addCase(fetchFavorites.rejected, (state, actions) => {
      state.favoriteList = [];
      state.status = "error";
    });
    builder.addCase(fetchFavorites.fulfilled, (state, actions) => {
      if (Array.isArray(actions.payload)) {
        state.favoriteList = actions.payload;
        return;
      }

      state.userFavourites.list = actions.payload.data;
      state.status = "success";
    });
  }
});

export const { setUser } = favorite.actions;

export default favorite.reducer;