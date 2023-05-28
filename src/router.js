import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const UserRoutes = () => {

  return (
    <>
      <SharedLayout />
      <Suspense>
        <Routes>
          {/* <Route path="/"></Route>
          <Route path="" ></Route>
          <Route path="" ></Route>
          <Route path="" ></Route> */}

          {/* <Route element={<PublicRoute />}>
            <Route path="" />
            <Route path="" />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="" />
            <Route path="" />
          </Route> */}

          <Route path="*"/>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;