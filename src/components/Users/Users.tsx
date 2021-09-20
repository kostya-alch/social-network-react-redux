import React, { FC } from 'react';

import Paginator from '../common/Paginator/Paginator';
import { UserType } from '../../types';
import User from './User';

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: any) => void;
  followingInProgress: Array<number>;
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const Users: FC<PropsType> = ({
  onPageChange,
  currentPage,
  totalUsersCount,
  pageSize,
  followingInProgress,
  unfollow,
  follow,
  users,
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
