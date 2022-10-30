import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios";
import { setUser } from "./slice";

export const fetchFavorites = createAsyncThunk(
  "favorite/fetchFavorites",
  async (params, thunkApi) => {
    const { dispatch } = thunkApi;
    dispatch(setUser(params ? params : ""))

    const { data } = await axios.get(`/favorites/${params ? "?user_id=" + params : ""}`);

    return data;
  },
);