import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import scss from '../Header/Header.module.scss';

const Header = () => {
  return (
    <div className={scss.header}>
            <Logo/>
            <Nav/>    
    </div>
  );
};

export default Header;