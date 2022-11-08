import { faker } from "@faker-js/faker";
import data from '../data/db.json';
import { Hotel, User } from "../redux/types/types";


export function createRandomUser(): User {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
}
export function createRandomHotel(): Hotel[] {
  return data.hotels;
}