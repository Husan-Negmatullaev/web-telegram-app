import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const { data: { data } } = await axios.get("/categories/");
      return data;
    } catch (error) {
      console.log("Cant fetching categories: " + error.message);
    }
  },
);