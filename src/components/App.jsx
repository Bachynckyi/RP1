import UserRoutes from '../router';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {getCurrent} from '../redux/auth/auth-operations';
import { userToken } from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(userToken);

  useEffect(() => {
    dispatch(getCurrent(token));
  }, [dispatch, token]);

  return (
    <Suspense fallback={<Loader/>}>
    <>
      <UserRoutes />
    </>
    </Suspense>
  );
};