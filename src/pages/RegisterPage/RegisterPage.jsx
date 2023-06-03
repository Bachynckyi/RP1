import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { signUp } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(isLogin);

  const handleSignup = data => {
    const { email, password } = data;
    const dataSend = { email, password };

    const sendData = async (dataSend) => {
      try {
        dispatch(signUp(dataSend));
      } catch (error) {
        console.log(error);
      }
    };
    sendData(dataSend);
    if(userStatus === true) {
      return <Navigate to="/"/>;
    }
  };

  return (
    <div>
      {userStatus === true ? (<Navigate to="/"/>) : (<RegisterForm onSubmit={handleSignup}/>)}
    </div>
      
  );
};

export default RegisterPage;