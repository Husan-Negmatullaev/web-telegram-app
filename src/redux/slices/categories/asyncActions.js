import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (params) => {
    try {
      const { data: { data } } = await axios.get("/categories/", {
        params: {
          user_id: params
        }
      });
      return data;
    } catch (error) {
      console.log("Cant fetching categories: " + error.message);
    }
  },
);