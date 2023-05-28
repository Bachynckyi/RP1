import { NavLink } from 'react-router-dom';
import scss from '../Nav/Nav.module.scss';

const Nav = () => {
  return (
    <div >
      <div className={scss.nav}>
        <NavLink className={scss.nav_item}>
          Каталог
        </NavLink >
        <NavLink className={scss.nav_item}>
          Доставка
        </NavLink>
        <NavLink className={scss.nav_item}>
          Оплата
        </NavLink>
        <NavLink className={scss.nav_item}>
          Про компанію
        </NavLink>
        <NavLink className={scss.nav_item}>
          Контакти
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;