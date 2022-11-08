import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Grid, TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { Room } from '../redux/types/types';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { bookRoom } from '../redux/slices';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  room: Room;
  open: boolean;
  handleClose(): void;
};

export const BookingModal: FC<Props> = ({ open, handleClose, room }) => {
  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);

  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.users.profile);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container>
              <Grid>
                <DatePicker
                  disablePast
                  label="Check in date"
                  value={checkIn}
                  onChange={(newValue) => {
                    setCheckIn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid>
                <DatePicker
                  disablePast
                  label="Check out date"
                  value={checkOut}
                  onChange={(newValue) => {
                    setCheckOut(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(
                  bookRoom({
                    roomId: room.id,
                    hotelId: room.hotelId,
                    userId: profile.id,
                    checkIn: checkIn?.format('YYYY-MM-DD') || '',
                    checkOut: checkOut?.format('YYYY-MM-DD') || '',
                  }),
                );
                handleClose();
              }}
            >
              Book
            </Button>
          </LocalizationProvider>
        </Box>
      </Modal>
    </div>
  );
};
