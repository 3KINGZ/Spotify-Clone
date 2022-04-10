import { createSlice } from "@reduxjs/toolkit";

export const playerSlice: any = createSlice({
  name: "player",
  initialState: {
    playing: false,
    track: {},
  },
  reducers: {
    play: (state, action) => {
      state.playing = !state.playing;
      if (action.payload) {
        state.track = action.payload;
      }
    },
  },
  extraReducers: builder => {},
});

export const { play } = playerSlice.actions;

export default playerSlice.reducer;
