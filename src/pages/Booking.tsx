import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { increment } from '../store/slices/booking';
export const Booking = () => {
  const booking = useSelector((state: RootState) => state.booking.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Booking</h1>
      <p>{booking}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
