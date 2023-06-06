import { LoginForm } from '../../components/LoginForm/LoginForm';
import { signIn } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLoading } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(isLogin);
  const loading = useSelector(isLoading);

  const handleSignIn = data => {
    const { email, password } = data;
    const dataSend = { email, password };

    const sendData = async (dataSend) => {
      try {
        dispatch(signIn(dataSend));
      } catch (error) {
      }
    };
    sendData(dataSend);
    if(userStatus === true) {
      return <Navigate to="/"/>;
    }
  };
  return (
    <>
      {loading && (<Loader/>)}
      {userStatus === true ? (<Navigate to="/"/>) : (<LoginForm onSubmit={handleSignIn}/>)}
      <Footer/>
    </>
  );
};

export default LoginPage;