export interface UserBookings {
    id: string,
    hotel_id: number,
    room_id: number,
    checkIn: string,
    checkOut: string,
}

export interface UserState {
    id: string
    name: string
    isSignIn: boolean
    reservations: UserBookings[]
}