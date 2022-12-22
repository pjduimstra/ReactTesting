import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
            <img src='' alt='PJ Duimstra Logo'/>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
