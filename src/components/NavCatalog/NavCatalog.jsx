import { NavLink } from 'react-router-dom';
import Search from 'components/Search/Search';

const NavCatalog = () => {
  return (
    <div >
      <Search/> 
      <div >
        <NavLink>
          Емаль алкідна
        </NavLink >
        <NavLink>
          Грунт-емаль алкідна
        </NavLink>
        <NavLink>
          Грунт
        </NavLink>
      </div>
    </div>
  );
};

export default NavCatalog;