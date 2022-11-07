import { FC, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import Button from '@mui/material/Button';
import { Select } from '../components/Select';
import { useAppDispatch } from '../hooks/hooks';
import { signIn } from '../redux/slices';
interface User {
  id: string;
  name: string;
  email: string;
}

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
}

Array.from({ length: 3 }).forEach(() => {
  USERS.push(createRandomUser());
});

export const SelectUserPage: FC = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>(USERS[0]);

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
