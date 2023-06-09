import { useSelector, useDispatch } from 'react-redux';
import { userToken } from 'redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';


const ButtonLogOut = () => {
const dispatch = useDispatch();
const token = useSelector(userToken)

 const logOutUser = () => {

    const sendData = async (token) => {
        try {
          dispatch(logOut(token));
        } 
        catch (error) {
          console.log(error);
        }
      };
    sendData(token);
}

  return (
    <div>
      <button onClick={logOutUser}>Вихід</button>
    </div>
  );
};

export default ButtonLogOut;