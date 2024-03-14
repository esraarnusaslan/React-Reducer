import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import HomePage from '../page/HomePage';
import CounterPage from '../page/CounterPage';

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
        ],
    },
]);

const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};

export default AppRouterProvider;
