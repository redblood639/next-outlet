import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { registerAccount } from "@/services/registerService";
import { registerType } from "@/types/auth";

interface RegisterState {
  isProcessingRequest: boolean;
}

const initialState: RegisterState = {
  isProcessingRequest: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    start: () => {
      return {
        isProcessingRequest: true,
      };
    },
    success: () => {
      return {
        isProcessingRequest: false,
      };
    },
    error: () => {
      return {
        isProcessingRequest: false,
      };
    },
  },
});

export const RegisterUser =
  (userData: registerType) => async (dispatch: any) => {
    try {
      dispatch(start());
      await registerAccount(userData);
      dispatch(success());
    } catch (err) {
      dispatch(error());
    } finally {
    }
  };

export const { start, success, error } = registerSlice.actions;
export const selectRegister = (state: RootState) => state.register;
export const registerReducer = registerSlice.reducer;
