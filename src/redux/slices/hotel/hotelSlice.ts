import { createSlice } from "@reduxjs/toolkit";
import { createRandomHotel } from "../../../lib/fakerUtils";
import { Hotel } from "../../types/types";

interface HotelsState {
  hotels: Hotel[];
}

const initialState: HotelsState = {
  hotels: Array.from({ length: 3 }).map(() => createRandomHotel()),
};

export const hotelSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = hotelSlice.actions;