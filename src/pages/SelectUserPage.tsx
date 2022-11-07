import { FC, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import { Select } from '../components/Select';
import { useAppDispatch } from '../hooks/hooks';
import { signIn } from '../redux/slices';
import { User } from '../redux/types/types';
import { createRandomUser } from '../lib/fakerUtils';
import { useNavigate } from 'react-router-dom';

export const SelectUserPage: FC = () => {
  const USERS: User[] = [];

  Array.from({ length: 3 }).forEach(() => {
    USERS.push(createRandomUser());
  });

  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>(USERS[0]);
  const navigate = useNavigate();
  const users = useMemo(() => USERS.map(({ id, name }) => ({ value: id, label: name })), []);

  const handleSelectUser = (id: string) => {
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

  return (
    <div>
      <Select
        selectedItem={{ value: user.id, label: user.name }}
        items={users}
        onSelect={handleSelectUser}
      />

      <Button variant="contained" onClick={handleSignIn}>
        Sign in
      </Button>
    </div>
  );
};
