import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { bookRoom } from '../redux/slices';

export const HotelPage = () => {
  const { hotelId } = useParams();
  const {
    hotels: { hotels },
    users: { profile },
  } = useAppSelector((state) => state);
  const hotel = hotels.find((hotel) => hotel.id === hotelId);

  const dispatch = useAppDispatch();

  return (
    <div>
      {hotel?.rooms.map((room) => {
        return (
          <div key={room.id}>
            <p>{room.name}</p>
            <p>{room.hotelId}</p>
            <button
              onClick={() => {
                dispatch(
                  bookRoom({
                    roomId: room.id,
                    hotelId: hotel.id,
                    userId: profile.id,
                    checkIn: '2021-10-10',
                    checkOut: '2021-10-11',
                  }),
                );
              }}
            >
              {room.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
