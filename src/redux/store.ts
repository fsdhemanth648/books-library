import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartSlice";
import alertReducer from "../redux/features/alertSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
