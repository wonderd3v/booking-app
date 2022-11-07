import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  isSignIn: boolean;
  redirectPath?: string;
}

export const PublicRoutes: FC<PropsWithChildren<Props>> = ({
  isSignIn,
  redirectPath = '/home',
  children,
}) => {
  if (isSignIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
