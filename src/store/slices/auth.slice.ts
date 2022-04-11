import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login } from "api";
import { deleteItem, RootNavigation } from "utils";
import { routes } from "navigation/routes";

export const signIn = createAsyncThunk("login", async () => {
  try {
    const response = await login();
    RootNavigation.navigate(routes.appTab);
    return response.data;
  } catch (error) {
    // Toast.show({
    //   type: "error",
    //   text1: "Login error",
    //   text2: error?.message,
    // });
  }
});

export const authSlice: any = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: null,
  },
  reducers: {
    logout: (state, action) => {
      state.token = null;
      deleteItem("@token");
    },
    // syncAuthData: (state, action) => {
    //   state.user = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled || signIn.rejected, (state, action) => {
      state.loading = false;
      state.token = action.payload;
    });
  },
});

export const { logout, syncAuthData } = authSlice.actions;

export default authSlice.reducer;
