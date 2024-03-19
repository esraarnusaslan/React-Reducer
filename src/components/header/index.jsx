import React from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import './style.css';
import { logout } from '../../store/auth/Auth-Actions';


const Header = () => {
    const { authState, dispatchAuth } = useStore();
    const { isUserLogin } = authState;

    const handleLogout = (e) => {
        e.preventDefault();
        const resp = window.confirm('Are you sure you want to logout?');
        if (!resp) return;

        dispatchAuth(logout());
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        {isUserLogin ? (
                            <a href="#" onClick={handleLogout}>
                                Logout
                            </a>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
