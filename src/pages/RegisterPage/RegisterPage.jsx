import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { signUp } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLoading} from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import scss from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(isLogin);
  const loading = useSelector(isLoading);

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
      <div className={scss.container}>
        {loading && (<Loader/>)}
        {userStatus === true ? (<Navigate to="/"/>) : (<RegisterForm onSubmit={handleSignup}/>)}
      </div>
      <Footer/>
    </div>
      
  );
};

export default RegisterPage;