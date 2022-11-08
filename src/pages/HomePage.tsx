import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HotelCard } from '../components/HotelCard';
import { useAppSelector } from '../hooks/hooks';

export const HomePage: FC = () => {
  const { hotels } = useAppSelector((state) => state.hotels);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', margin: '4%' }}>
      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <Grid key={index} item xs={3}>
            <HotelCard
              onPress={() => {
                navigate(`/hotels/${hotel.id}`);
              }}
              hotel={{
                id: hotel.id,
                description: hotel.description,
                image: hotel.image,
                name: hotel.name,
                alt: hotel.alt,
                country: hotel.country,
                rooms: hotel.rooms,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
