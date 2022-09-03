import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserAPI } from "./API/UserAPI";

const rootReducer = combineReducers({
  [UserAPI.reducerPath]: UserAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UserAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch