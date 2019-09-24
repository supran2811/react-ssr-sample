import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from './pages/AdminListPage';

export default [
    {
        ...App , 
        routes : [
            {
                path: "/",
                exact: true,
                ...HomePage
        
            },
            {
                path: "/users",
                ...UserListPage
            },
            {
                path: '/admins',
                ...AdminListPage
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

