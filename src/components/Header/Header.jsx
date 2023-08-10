import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import scss from '../Header/Header.module.scss';
import { NavLink } from 'react-router-dom';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const userStatus = useSelector(isLogin);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={scss.container}>
            {isOpen ? 
            (
              <>
              <div className={scss.header_mobile}>
                <Logo/>
                <div className={scss.auth_container}>
                  <AuthNav/>
                <NavLink
                  className={scss.menuIcon}
                  onClick={toggle}
                  aria-label="mobile menu"
                >
                  <AiOutlineClose className={scss.menuIcon}/>
                </NavLink>
                </div>
            </div>
              <div className={scss.menu_list}>
                {!userStatus ? (
                  <div className={scss.auth_list}>
                  <NavLink className={scss.nav_mobile_item} to="/login" onClick={toggle}>Вхід</NavLink>
                  <NavLink className={scss.nav_mobile_item} to="/register" onClick={toggle}>Реєстрація</NavLink>
                  </div>
                ) : (<NavLink className={scss.nav_mobile_item} to="/profile">Особистий кабінет</NavLink>)}
                
                <NavLink className={scss.nav_mobile_item} to="/catalog" onClick={toggle}>Каталог</NavLink >
                <NavLink className={scss.nav_mobile_item} to="/delivery" onClick={toggle}>Доставка і Оплата</NavLink>
                <NavLink className={scss.nav_mobile_item} to="/company" onClick={toggle}>Про компанію</NavLink>
                <NavLink className={scss.nav_mobile_item} to="/contacts" onClick={toggle}>Контакти</NavLink>
              </div>
              </>  
            ) 
            : 
            (
            <div className={scss.header_container}>
              <div className={scss.header}>
                <Logo/>
                <Nav/>
                <div className={scss.auth_container}>
                  <AuthNav/>
                  <NavLink
                    onClick={toggle}
                    aria-label="mobile menu"
                    to="/"
                    >
                    <GiHamburgerMenu className={scss.menuIcon} />
                  </NavLink>
                </div>
              </div>
            </div>
            )}
    </div>
  );
};

export default Header;










