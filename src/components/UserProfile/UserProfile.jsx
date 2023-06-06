import { useSelector } from 'react-redux';
import { user } from '../../redux/auth/auth-selectors';
import scss from './UserProfile.module.scss';

const UserProfile = () => {
const userInfo = useSelector(user)
const avatar = userInfo.avatarURL;

    return (
            <div>
                <h1>Інформація про користувача</h1>
                <img src={avatar} alt="avatar" className={scss.avatar}/>
                <p>Ім'я:{userInfo.name}</p>
                <p>Дата народження:{userInfo.birthday}</p>
                <p>Електронна адреса:{userInfo.email}</p>
                <p>Телефон:{userInfo.phone}</p>
                <p>Місто:{userInfo.city}</p>
            </div>
    );
  };
  
export default UserProfile;