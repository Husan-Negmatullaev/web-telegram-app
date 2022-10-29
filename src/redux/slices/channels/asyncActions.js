import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios";

export const fetchChannels = createAsyncThunk(
  "channels/fetchChannels",
  async (params) => {
    try {
      const { data: { data } } = await axios.get(`/categories/${params ? "?" + params : ""}`);
      return data;
    } catch (error) {
      console.log("Cant fetching categories: " + error.message);
    }
  },
);