import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../services/axios";

export const fetchChannels = createAsyncThunk(
  "channels/fetchChannels",
  async (params) => {
    try {
      if (typeof params === "number" || typeof params === "string") {
        const { data: { data } } = await axios.get("/categories/", {
          params: {
            user_id: params
          }
        });
        return data;
      } else {
        const { data: { data } } = await axios.get("/categories/", {
          params: {
            user_id: params.id,
            filter: params.filters,
          },
          paramsSerializer: {
            indexes: null,
          }
        });

        return data;
      }
    } catch (error) {
      console.log("Cant fetching categories: " + error.message);
    }
  },
);
