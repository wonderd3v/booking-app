import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
  const naviator = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking App
          </Typography>
          <Button color="inherit" onClick={() => naviator('/reservations')}>
            My reservations
          </Button>
          <Button color="inherit" onClick={() => naviator('/select-user')}>
            Select User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
