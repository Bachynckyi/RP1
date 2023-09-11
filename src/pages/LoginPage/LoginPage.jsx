import { LoginForm } from '../../components/LoginForm/LoginForm';
import { signIn } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLoading } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import scss from "./LoginPage.module.scss";
import { useState } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(isLogin);
  const loading = useSelector(isLoading);
  const [error, setError] = useState(false);

  const handleSignIn = data => {
    const { email, password } = data;
    const dataSend = { email, password };
    const sendData = async (dataSend) => {
      try {
        dispatch(signIn(dataSend))
        .then(response => {
          if(response.payload === 401) {
            setError(true)
          }
        })
      } 
      catch (error) {
      }
    };
    sendData(dataSend);
    if(userStatus === true) {
      return <Navigate to="/"/>;
    }
  };
  
  return (
    <div>
      <div className={scss.container}>
          {loading && (<Loader/>)}
          {userStatus === true ? (<Navigate to="/"/>) : (<LoginForm onSubmit={handleSignIn} error={error}/>)}
      </div>
      <Footer/>
    </div>
  );
};

export default LoginPage;