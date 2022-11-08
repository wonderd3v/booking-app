
import { combineReducers } from "@reduxjs/toolkit";
import {  hotelSlice, usersSlice } from '../slices';

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    hotels: hotelSlice.reducer
});


export default rootReducer;