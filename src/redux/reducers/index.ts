
import { combineReducers } from "@reduxjs/toolkit";
import { bookingSlice, hotelSlice, usersSlice } from '../slices';

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    bookings: bookingSlice.reducer,
    hotels: hotelSlice.reducer
    
});

export default rootReducer;