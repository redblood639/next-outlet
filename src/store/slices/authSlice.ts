import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { authenticate } from "@/services/authenticationService";
import { setTokens } from "@/services/localStorage";

// Define a type for the slice state
interface AuthState {
  isProcessingRequest: boolean;
  accessToken?: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isProcessingRequest: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    start: (state: AuthState) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state: AuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state: AuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const authenticateUser = (userData: any) => async (dispatch: any) => {
  try {
    const authData = await authenticate(userData);
    setTokens(authData.data);
    dispatch(success(authData.data));
    console.log("success");
  } catch (err) {
    dispatch(error(err));
  }
};

export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
