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

export const usersSlice = createSlice({
  name: "users",
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

export const { signIn } = usersSlice.actions;

