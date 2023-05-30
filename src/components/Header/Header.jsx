import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import scss from '../Header/Header.module.scss';
import menuBar from 'images/menu-hamburger.svg';
import closeIcon from 'images/cross-small.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  // const isLoggedIn = false;
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div >
            {isOpen ? 
            (
              <>
              <div className={scss.header_mobile}>
                <Logo/>
                <NavLink
                  className={scss.menuIcon}
                  onClick={toggle}
                  aria-label="mobile menu"
                >
                  <img className={scss.menuBar} src={closeIcon} alt="menuBurger" />
                </NavLink>
            </div>
              <div className={scss.menu_list}>
                <NavLink to="/login" onClick={toggle}>Вхід</NavLink>
                <NavLink to="/register" onClick={toggle}>Регістрація</NavLink>
                <NavLink to="/catalog" onClick={toggle}>Каталог</NavLink >
                <NavLink to="/delivery" onClick={toggle}>Доставка</NavLink>
                <NavLink  to="/payment" onClick={toggle}>Оплата</NavLink>
                <NavLink  to="/company" onClick={toggle}>Про компанію</NavLink>
                <NavLink to="/contacts" onClick={toggle}>Контакти</NavLink>
              </div>
              </>  
            ) 
            : 
            (
              <div className={scss.header}>
                <Logo/>
                <Nav/>
                <AuthNav/>
                <NavLink
                  className={scss.menuIcon}
                  onClick={toggle}
                  aria-label="mobile menu"
                  to="/"
                >
                  <img className={scss.menuBar} src={menuBar} alt="menuBurger" />
                </NavLink>
              </div>
            )}
    </div>
  );
};

export default Header;










