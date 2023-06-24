import { NavLink } from 'react-router-dom';
import scss from './ProfilePage.module.scss';
import UserProfile from 'components/UserProfile/UserProfile';
import OrderList from 'components/OrdersList/OrderList';
import ButtonLogOut from '../../components/ButtonLogOut/ButtonLogOut';

const ProfilePage = () => {
    return (
        <div className={scss.container}>
            <UserProfile/>
            <OrderList/>
            <ButtonLogOut/>
            <div className={scss.menu_buttons}>
            <NavLink to="/addproduct" className={scss.button_addproduct}>Додати товар</NavLink>
            <NavLink to="/addcategory" className={scss.button_addproduct}>Додати категорію</NavLink>
            <NavLink to="/addsubcategory" className={scss.button_addproduct}>Додати підкатегорію</NavLink>
            </div>
        </div>
    );
  };
  
export default ProfilePage;