import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from '../../../data/db.json';
import { User } from "../../types/types";
interface UserState {
  profile: {
    id: number;
    name: string;
    email: string;
  };
  users: User[];
  isSignIn: boolean;
}

const initialState: UserState = {
  profile: {
    id: 0,
    name: "",
    email: "",
  },
  users: data.users,
  isSignIn: false,
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ id: number; name: string; email: string }>
    ) => {
      state.profile = action.payload;
      state.isSignIn = true;
    },
    logOut: (state, action: PayloadAction<{ id: number; name: string; email: string }>) => {
      state.profile = {
        id: 0,
        name: "",
        email: "",
      };
      state.isSignIn = false;
    }
  },
});

export const { signIn,logOut } = usersSlice.actions;

