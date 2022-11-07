import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { HotelCard } from '../components/HotelCard';
import { useAppSelector } from '../hooks/hooks';

export const HomePage: FC = () => {
  const { hotels } = useAppSelector((state) => state.hotels);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home page</h1>

      {hotels.map((hotel) => (
        <HotelCard
          onPress={() => {
            navigate(`/hotels/${hotel.id}`);
          }}
          key={hotel.id}
          hotel={{
            id: hotel.id,
            description: hotel.description,
            image: hotel.image,
            title: hotel.name,
            alt: hotel.alt,
          }}
        />
      ))}

      <Outlet />
    </div>
  );
};
