import React from 'react';
import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

export const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    
    return (
        <nav className='navbar'>
            <h1>Women's World Cup Search Rankings</h1>
            <div className='dark-mode_toggle'>
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};