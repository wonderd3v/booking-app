
import { combineReducers } from "@reduxjs/toolkit";
import { bookingSlice, userSlice } from '../slices';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    booking: bookingSlice.reducer,
});

export default rootReducer;