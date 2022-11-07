import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  isSignIn: boolean;
  redirectPath?: string;
}

export const PrivateRoutes: FC<PropsWithChildren<Props>> = ({
  isSignIn,
  redirectPath = '/',
  children,
}) => {
  if (!isSignIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
