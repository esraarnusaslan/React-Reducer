import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Header = () => {
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;
