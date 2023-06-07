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
            <NavLink to="/addproduct" className={scss.button_addproduct}>Додати товар</NavLink>

        </div>
    );
  };
  
export default ProfilePage;