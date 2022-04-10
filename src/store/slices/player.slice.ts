import { createSlice } from "@reduxjs/toolkit";

export const playerSlice: any = createSlice({
  name: "player",
  initialState: {
    playing: false,
    track: {},
  },
  reducers: {
    play: (state, action) => {
      state.playing = true;
      if (action.payload) {
        state.track = action.payload;
      }
    },
    pause: (state, action) => {
      state.playing = false;
    },
  },
  extraReducers: builder => {},
});

export const { play } = playerSlice.actions;

export default playerSlice.reducer;
