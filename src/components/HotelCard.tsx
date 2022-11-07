import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';

interface Hotel {
  id: string;
  image: string;
  alt?: string;
  title: string;
  description: string;
}

interface Props {
  hotel: Hotel;
  onPress(id: string): void;
}

export const HotelCard: FC<Props> = ({ hotel, onPress }) => {
  const handleOnPressCard = () => {
    onPress(hotel.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="160" image={hotel.image} alt={hotel.alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOnPressCard}>
          See
        </Button>
      </CardActions>
    </Card>
  );
};
