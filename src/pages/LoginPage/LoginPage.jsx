import { LoginForm } from '../../components/LoginForm/LoginForm';
import { signIn } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(isLogin);

  const handleSignIn = data => {
    const { email, password } = data;
    const dataSend = { email, password };

    const sendData = async (dataSend) => {
      try {
        dispatch(signIn(dataSend));
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
    <>
      {userStatus === true ? (<Navigate to="/"/>) : (<LoginForm onSubmit={handleSignIn}/>)}
    </>
  );
};

export default LoginPage;