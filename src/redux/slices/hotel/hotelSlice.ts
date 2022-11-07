import { faker } from '@faker-js/faker';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRandomHotel } from "../../../lib/fakerUtils";
import { Hotel } from "../../types/types";

interface HotelsState {
  hotels: Hotel[];
}

const initialState: HotelsState = {
  hotels: Array.from({ length: 3 }).map(() => createRandomHotel()),
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    bookRoom: (state: HotelsState, action: PayloadAction<{
      hotelId: string,
      roomId: string,
      checkIn: string,
      checkOut: string,
      userId: string
    }>) => {
      const { hotelId, roomId,  } = action.payload;
      const hotel = state.hotels.findIndex((hotel) => hotel.id === hotelId);

      if (hotel !== -1) {
        const room = state.hotels[hotel].rooms.findIndex((room) => room.id === roomId);
        if (room !== -1) {
          state.hotels[hotel].rooms[room].booking.push({ id: faker.datatype.uuid(),...action.payload});
        }
      }
     }
  },
});

export const { bookRoom } = hotelSlice.actions;