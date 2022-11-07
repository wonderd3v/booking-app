import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/hooks';
import { HomePage, HotelPage } from './pages';
import { Layout } from './pages/shared/Layout';
import { NotFound } from './pages/shared/NotFound';

function App() {
  const { isSignIn } = useAppSelector((state) => state.users);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="hotels" element={<HomePage />} />
        <Route path="hotels/:hotelId" element={<HotelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
