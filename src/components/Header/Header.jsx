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
import Search from 'components/Search/Search';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const userStatus = useSelector(isLogin);

  const toggle = () => {
    setOpen(!isOpen);
    !isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');
  };

  return (
    <div className={scss.container}>
            {!isOpen ? (
              <div className={scss.header}>
                <div className={scss.subcontainer}>
                  <Logo/>
                  <Nav/>
                  <div className={scss.search_container_for_tablet}>
                      <Search/>
                  </div>
                  <div className={scss.auth_container}>
                    <AuthNav/>
                    <GiHamburgerMenu className={scss.menuIcon} onClick={toggle} aria-label="mobile menu"/>
                  </div>
                </div>
                <div className={scss.search_container_mobile}>
                <Search/>
                </div>
              </div>
            ) : (
              <div className={scss.header}>
                <div className={scss.subcontainer}>
                  <Logo/>
                  <div className={scss.search_container_for_tablet}>
                      <Search/>
                  </div>
                  <div className={scss.auth_container}>
                    <AuthNav/>
                    <AiOutlineClose className={scss.menuIcon} onClick={toggle} aria-label="mobile menu"/>
                  </div>
                </div>
                <div className={scss.search_container_mobile}>
                <Search/>
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
            </div>
            )
          }
    </div>
  );
};

export default Header;










