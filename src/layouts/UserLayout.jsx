import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <>
            <Header />
            <main style={{ marginTop: '30px' }}>
                <Outlet />
            </main>
        </>
    );
};

export default UserLayout;
