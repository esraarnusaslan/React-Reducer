import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import HomePage from '../page/HomePage';
import CounterPage from '../page/CounterPage';
import LoginPage from '../page/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'counter',
                element: <CounterPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
]);

const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppRouterProvider;
