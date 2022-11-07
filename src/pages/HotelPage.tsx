import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export const HotelPage = () => {
  const { hotelId } = useParams();
  const { hotels } = useAppSelector((state) => state.hotels);
  const hotel = hotels.find((hotel) => hotel.id === hotelId);

  return <div></div>;
};
