import { HotelPage, SelectUserPage } from '../pages';
import { HomePage } from '../pages/HomePage';
import { NotFound } from '../pages/shared/NotFound';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const publicRoutes = [
  {
    path: '*',
    component: <NotFound />,
  },
  {
    path: 'select-user',
    component: <SelectUserPage />,
  },
];

export const privateRoutes = [
  {
    path: '/home',
    component: <HomePage />,
  },
  {
    path: '/hotel/:hotelId',
    component: <HotelPage />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
  {
    path: 'select-user',
    component: <SelectUserPage />,
  },
];

type RouterProps = {
  isSignIn: boolean;
};

export const Router: FC<RouterProps> = ({ isSignIn }: RouterProps) => {
  return isSignIn ? (
    <Routes>
      <Route path="select-user" element={<SelectUserPage />} />
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      )
    </Routes>
  ) : (
    <Routes>
      <Route path="select-user" element={<SelectUserPage />} />
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      )
    </Routes>
  );
};
