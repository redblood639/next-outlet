import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { authenticate, loadUserInfo } from "@/services/authenticationService";
import { removeTokens, setTokens } from "@/services/localStorage";

// Define a type for the slice state
interface AuthState {
  isProcessingRequest: boolean;
  accessToken?: string;
  user?: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isProcessingRequest: false,
  accessToken: "",
  user: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    start: (state: AuthState) => {
      return {
        ...state,
        isProcessingRequest: true,
        accessToken: "",
      };
    },
    success: (state: AuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
        accessToken: action.payload.token,
      };
    },

    logout: () => {
      return initialState;
    },

    setUser: (state: AuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        user: action.payload.user,
      };
    },

    error: (state: AuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
        accessToken: "",
      };
    },
  },
});

export const authenticateUser = (userData: any) => async (dispatch: any) => {
  try {
    const authData = await authenticate(userData);
    if (authData.status) {
      console.log("success");
      setTokens(authData.data);
      dispatch(success(authData.data));
    } else {
      throw new Error("failed");
    }
  } catch (err) {
    dispatch(error(err));
  }
};

export const signOutUser = () => (dispatch: any) => {
  try {
    removeTokens();
    dispatch(logout());
  } catch (err) {
    dispatch(error(err));
  }
};
export const loadUser = () => async (dispatch: any) => {
  const userData = await loadUserInfo();
  dispatch(setUser(userData.data));
};

export const { start, success, error, logout, setUser } =
  authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
