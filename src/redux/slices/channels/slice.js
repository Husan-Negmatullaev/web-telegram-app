import { createSlice } from "@reduxjs/toolkit";
import { fetchChannels } from "./asyncActions";

const initialState = {
  channels: [],
  status: "loading" // loading | error | success
};

const sliceChannel = createSlice({
  name: "channels",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.pending, (state, actions) => {
      state.channels = [];
      state.status = "loading";
    });
    builder.addCase(fetchChannels.rejected, (state, actions) => {
      state.channels = [];
      state.status = "error";
    });
    builder.addCase(fetchChannels.fulfilled, (state, actions) => {
      state.channels = actions.payload;
      state.status = "success";
    });
  },
});

export default sliceChannel.reducer;