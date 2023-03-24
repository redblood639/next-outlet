import { configureStore } from "@reduxjs/toolkit";
// import the reducers
import { authenticationReducer } from "@/store/slices/authSlice";
import { registerReducer } from "@/store/slices/registerSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
