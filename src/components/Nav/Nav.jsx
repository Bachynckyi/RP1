import { NavLink } from 'react-router-dom';
import scss from '../Nav/Nav.module.scss';

const Nav = () => {
  return (
    <div >
      <div className={scss.nav}>
        <NavLink className={({isActive}) => isActive ? scss.nav_item_selected : scss.nav_item } to="/catalog">
          Каталог
        </NavLink >
        <NavLink className={({isActive}) => isActive ? scss.nav_item_selected : scss.nav_item } to="/delivery">
          Доставка і оплата
        </NavLink>
        <NavLink className={({isActive}) => isActive ? scss.nav_item_selected : scss.nav_item } to="/company">
          Про компанію
        </NavLink>
        <NavLink className={({isActive}) => isActive ? scss.nav_item_selected : scss.nav_item } to="/contacts">
          Контакти
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;