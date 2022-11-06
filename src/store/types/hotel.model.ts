export interface Hotel {
  id: number;
  name: string;
  country_id: number;
  rooms: Room[];
}

export interface Room {
  id: number;
  name: string;
  price: number;
  bookings?: Booking[];
}

export interface Booking {
  id: number;
  user_id: number;
  room_id: number;
  check_in: string;
  check_out: string;
}