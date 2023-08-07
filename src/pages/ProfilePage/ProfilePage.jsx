import { NavLink } from 'react-router-dom';
import scss from './ProfilePage.module.scss';
import UserProfile from 'components/UserProfile/UserProfile';
import OrderList from 'components/OrdersList/OrderList';
import ButtonLogOut from '../../components/ButtonLogOut/ButtonLogOut';
import { userEmail } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const userEmailVerify = useSelector(userEmail)
    return (
        <div className={scss.container}>
            <UserProfile/>
            <OrderList/>
            <ButtonLogOut/>
            {userEmailVerify === "colorfarb@gmail.com" && (
                <div className={scss.menu_buttons}>
                <NavLink to="/addproduct" className={scss.button_addproduct}>Додати товар</NavLink>
                <NavLink to="/addcategory" className={scss.button_addproduct}>Додати категорію</NavLink>
                <NavLink to="/addsubcategory" className={scss.button_addproduct}>Додати підкатегорію</NavLink>
                <NavLink to="/updatecategory" className={scss.button_addproduct}>Змінити категорію</NavLink>
                <NavLink to="/updatesubcategory" className={scss.button_addproduct}>Змінити підкатегорію</NavLink>
                </div>
            )}
        </div>
    );
  };
  
export default ProfilePage;