import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  isSignIn: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  isSignIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isSignIn = true;
    },
  },
});

export const { signIn } = userSlice.actions;