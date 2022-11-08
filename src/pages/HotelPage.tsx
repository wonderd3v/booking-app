import { Box, Grid, Typography } from '@mui/material';
import { margin } from '@mui/system';
import { useParams } from 'react-router-dom';
import { RoomCard } from '../components/RoomCard';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { bookRoom } from '../redux/slices';

export const HotelPage = () => {
  const { hotelId } = useParams();
  const {
    hotels: { hotels },
    users: { profile },
  } = useAppSelector((state) => state);
  const hotel = hotels.find((hotel) => hotel.id.toString() === hotelId?.toString());

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ padding: '2.5%' }}>
      <Typography variant="h1">{hotel?.name}</Typography>
      <Grid sx={{ padding: '' }} container>
        {hotel?.rooms.map((room) => {
          return (
            <Grid spacing={2} xs={6}>
              <RoomCard room={room} />;
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
