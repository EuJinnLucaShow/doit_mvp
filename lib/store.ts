import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/lib/services/postsApi";

export function makeStore() {
  return configureStore({
    reducer: {
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
