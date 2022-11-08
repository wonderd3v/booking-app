export interface User {
  id: number;
  name: string;
  email: string;
 }

 export interface Country {
 }

 export interface Booking {
    id: number;
    roomId: number;
    hotelId: number;
    userId: number;
    checkIn?: string;
    checkOut?: string;
  }
 export interface Room {
    id: number;
    hotelId: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    bookings: Booking[];
 }

 export interface Hotel {
    id: number;
    image: string;
    alt: string;
    description: string;
    country: Country;
    name: string;
    rooms: Room[];
 }

 export interface Data {
    users: User[];
    hotels: Hotel[];
 }