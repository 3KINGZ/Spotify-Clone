import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAlbum,
  getCategories,
  getNewReleases,
  getTopListen,
  getRecommended,
} from "api";

export const fetchNewReleases = createAsyncThunk("newReleases", async () => {
  try {
    const response = await getNewReleases();
    // RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    //err out
  }
});

export const fetchAlbumDetail = createAsyncThunk(
  "album",
  async (id: string) => {
    try {
      const response = await getAlbum(id);
      return response.data;
    } catch (error) {
      //err out
    }
  },
);

export const fetchCategories = createAsyncThunk("categories", async () => {
  try {
    const response = await getCategories();
    // RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    //err out
  }
});

export const fetchRecommended = createAsyncThunk("recommeded", async () => {
  try {
    const response = await getRecommended();
    // RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    //err out
  }
});

export const fetchTopListen = createAsyncThunk("topListen", async () => {
  try {
    const response = await getTopListen();
    // RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    //err out
  }
});

export const contentSlice: any = createSlice({
  name: "auth",
  initialState: {
    newReleasesLoading: false,
    newReleases: {},
    album: {},
    albumLoading: false,
    categories: {},
    categoriesLoading: false,
    recommendedLoading: false,
    recommended: {},
    topListenLoading: false,
    topListen: {},
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

    builder.addCase(fetchCategories.pending, (state, action) => {
      state.categoriesLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.categoriesLoading = false;
    });

    builder.addCase(fetchRecommended.pending, (state, action) => {
      state.recommendedLoading = true;
    });
    builder.addCase(fetchRecommended.fulfilled, (state, action) => {
      state.recommendedLoading = false;
      state.recommended = action.payload;
    });
    builder.addCase(fetchRecommended.rejected, (state, action) => {
      state.recommendedLoading = false;
    });

    builder.addCase(fetchTopListen.pending, (state, action) => {
      state.topListenLoading = true;
    });
    builder.addCase(fetchTopListen.fulfilled, (state, action) => {
      state.topListenLoading = false;
      state.topListen = action.payload;
    });
    builder.addCase(fetchTopListen.rejected, (state, action) => {
      state.topListenLoading = false;
    });
  },
});

export const { logout, syncAuthData } = contentSlice.actions;

export default contentSlice.reducer;
