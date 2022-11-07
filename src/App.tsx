import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/hooks';
import { HomePage, SelectUserPage } from './pages';
import { PrivateRoutes, PublicRoutes } from './router';

export const NotFound = () => {
  return (
    <div>
      <h1>NOT FOUND PAGE</h1>
    </div>
  );
};

function App() {
  const { isSignIn } = useAppSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isSignIn={isSignIn}>
              <SelectUserPage />
            </PublicRoutes>
          }
        />
        <Route
          path="home"
          element={
            <PrivateRoutes isSignIn={isSignIn}>
              <HomePage />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
