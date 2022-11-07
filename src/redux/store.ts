import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { bookingSlice, userSlice } from './slices'

export const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
    user: userSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;