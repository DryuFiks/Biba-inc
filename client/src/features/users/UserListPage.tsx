/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import UserItem from './UserItem';

const UsersListPage = (): JSX.Element => {
  const users = useSelector((store: RootState) => store.users.users);
  return (
    <>
      <h1 className="hero-page__title">users list </h1>
      <div className="hero-page__container">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersListPage;