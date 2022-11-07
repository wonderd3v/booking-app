import { faker } from "@faker-js/faker";
import { Hotel, Room, User } from "../redux/types/types";

export function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
}

export function createRandomRoom(hotelId: string): Room {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    hotelId,
    booking: [],
  };
}

export function createRandomHotel(): Hotel {
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