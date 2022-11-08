import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Room } from '../redux/types/types';
import { FC, useState } from 'react';
import { BookingModal } from './BookingModal';

type Props = {
  room: Room;
};

export const RoomCard: FC<Props> = ({ room }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: '70%' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {room.name}
          </Typography>
          <Typography variant="h5" component="div">
            {room.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {room.price + ' ' + room.currency} per night
          </Typography>
          <Typography variant="body2">
            {room.description}
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>Open modal</Button>
        </CardActions>
      </Card>
      <BookingModal room={room} open={open} handleClose={handleClose} />
    </div>
  );
};
