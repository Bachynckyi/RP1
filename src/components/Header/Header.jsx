import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import scss from '../Header/Header.module.scss';

const Header = () => {
  return (
    <div className={scss.header}>
            <Logo/>
            <Nav/>
            <AuthNav/>
    </div>
  );
};

export default Header;