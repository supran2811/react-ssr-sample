import React from 'react';

import HomePage from './pages/HomePage';
import UserListPage , { loadData } from './pages/UserListPage';

export default [
    {
        path: "/",
        exact: true,
        ...HomePage

    },
    {
        path: "/users",
        ...UserListPage
    }
];

