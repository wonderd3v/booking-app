import { FC, useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import { Select } from '../components/Select';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { signIn, logOut } from '../redux/slices';
import { User } from '../redux/types/types';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export const SelectUserPage: FC = () => {
  const USERS = useAppSelector((state) => state.users.users);
  const [user, setUser] = useState<User>(USERS[0]);
  const users = useMemo(() => USERS.map(({ id, name }) => ({ value: id, label: name })), []);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectUser = (id: number) => {
    const userSelected = USERS.find((x) => x.id === id);

    if (userSelected) {
      setUser(userSelected);
    } else {
      setUser(USERS[0]);
    }
  };

  const handleSignIn = () => {
    dispatch(signIn(user));
    navigate('/home');
  };

  useEffect(() => {
    dispatch(logOut(user));
  }, []);

  return (
    <Grid container spacing={5} margin="5%">
      <Grid xs={5}>
        <Select
          selectedItem={{ value: user.id, label: user.name }}
          items={users}
          onSelect={handleSelectUser}
        />
      </Grid>
      <Grid xs={5}>
        <Button variant="contained" onClick={handleSignIn}>
          Sign in
        </Button>
      </Grid>
    </Grid>
  );
};
