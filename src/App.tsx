import { Box } from '@mui/material';
import { useAppSelector } from './hooks/hooks';
import { Layout } from './pages/shared/Layout';
import { NavBar } from './pages/shared/NavBar';
import { Router } from './router/Router';

function App() {
  const { isSignIn } = useAppSelector((state) => state.users);

  return (
    <div className="App">
      <NavBar />
      <Box sx={{ margin: '2%' }}>
        <Router isSignIn={isSignIn} />
      </Box>
    </div>
  );
}

export default App;
