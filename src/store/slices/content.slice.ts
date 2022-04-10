import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAlbum, getNewReleases } from "api";

export const fetchNewReleases = createAsyncThunk("newReleases", async () => {
  try {
    const response = await getNewReleases();
    console.log("new releases success", response.data);
    // RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    console.log("new releases failure");
    //err out
  }
});

export const fetchAlbumDetail = createAsyncThunk(
  "albumDetail",
  async (id: string) => {
    try {
      const response = await getAlbum(id);
      console.log("new releases success", response.data);
      return response.data;
    } catch (error) {
      console.log("new releases failure");
      //err out
    }
  },
);

export const contentSlice: any = createSlice({
  name: "auth",
  initialState: {
    newReleasesLoading: false,
    newReleases: {},
    album: {},
    albumLoading: false,
  },
  reducers: {
    // logout: (state, action) => {
    //   state.token = null;
    //   deleteItem("@token");
    // },
    // syncAuthData: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchNewReleases.pending, (state, action) => {
      state.newReleasesLoading = true;
    });
    builder.addCase(fetchNewReleases.fulfilled, (state, action) => {
      state.newReleasesLoading = false;
      state.newReleases = action.payload;
    });
    builder.addCase(fetchNewReleases.rejected, (state, action) => {
      state.newReleasesLoading = false;
    });

    builder.addCase(fetchAlbumDetail.pending, (state, action) => {
      state.albumLoading = true;
    });
    builder.addCase(fetchAlbumDetail.fulfilled, (state, action) => {
      state.albumLoading = false;
      state.album = action.payload;
    });
    builder.addCase(fetchAlbumDetail.rejected, (state, action) => {
      state.albumLoading = false;
    });
  },
});

export const { logout, syncAuthData } = contentSlice.actions;

export default contentSlice.reducer;
