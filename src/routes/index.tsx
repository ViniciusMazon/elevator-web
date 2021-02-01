import React from 'react';

import { useAuth } from '../context/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  // const { signed } = useAuth();
  const signed = true;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
