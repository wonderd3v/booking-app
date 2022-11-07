import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

interface Booking {
  id: string;
  roomId: string;
  hotelId: string;
  userId: string;
  checkIn?: string;
  checkOut?: string;
}

interface Country {
  id: string;
  name: string;
}

interface Room {
  id: string;
  hotelId: string;
  name: string;
  booking: Booking[];
}

interface Hotel {
  id: string;
  image: string;
  alt?: string;
  description: string;
  countryId: Country;
  name: string;
  rooms: Room[];
}

interface HotelsState {
  hotels: Hotel[];
}

function createRandomRoom(hotelId: string): Room {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    hotelId,
    booking: [],
  };
}

function createRandomHotel(): Hotel {
  const id = faker.datatype.uuid();
  const name = faker.name.fullName();

  return {
    id,
    countryId: {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
    },
    image: faker.image.business(),
    description: faker.commerce.productDescription(),
    name,
    alt: `hotel - ${name}`,
    rooms: Array.from({ length: 20 }).map(() => createRandomRoom(id)),
  };
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