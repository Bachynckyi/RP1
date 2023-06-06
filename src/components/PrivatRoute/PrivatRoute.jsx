import { Outlet, Navigate } from 'react-router-dom';
import { isLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
const userStatus = useSelector(isLogin);


  return (
  <>
    {!userStatus ? (<Navigate to="/login"/>) : (<Outlet />)}
  </>
  );
};

export default PrivateRoute;