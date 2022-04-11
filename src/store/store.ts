import { configureStore } from "@reduxjs/toolkit";
import { enableBatching } from "redux-batched-actions";

import authReducer from "./slices/auth.slice";
import contentReducer from "./slices/content.slice";
import playerReducer from "./slices/player.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
    player: playerReducer,
  },
});
