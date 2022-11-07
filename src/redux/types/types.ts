export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Booking {
  id: string;
  roomId: string;
  hotelId: string;
  userId: string;
  checkIn?: string;
  checkOut?: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  booking: Booking[];
}

export interface Hotel {
  id: string;
  image: string;
  alt?: string;
  description: string;
  countryId: Country;
  name: string;
  rooms: Room[];
}