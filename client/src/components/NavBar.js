import React from 'react';
import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

const Nav = styled.nav`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 3%;
  width: 100%;
  margin-bottom: 2rem;
  background-color: #1f2022;
  border: none;
  h1 {
    color: white;
  }
`;

export const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <Nav className='navbar'>
            <h1>Women's World Cup Search Rankings</h1>
            <div className='dark-mode_toggle'>
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </Nav>
    );
};