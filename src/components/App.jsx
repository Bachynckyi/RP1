import UserRoutes from '../router';
import React from 'react';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense>
    <>
      <UserRoutes />
    </>
    </Suspense>
  );
};