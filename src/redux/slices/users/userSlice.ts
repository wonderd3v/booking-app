import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  profile: {
    id: string;
    name: string;
    email: string;
  };
  isSignIn: boolean;
}

const initialState: UserState = {
  profile: {
    id: "",
    name: "",
    email: "",
  },
  isSignIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string }>
    ) => {
      state.profile = action.payload;
      state.isSignIn = true;
    },
  },
});

export const { signIn } = userSlice.actions;