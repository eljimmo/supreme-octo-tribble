import React from 'react'
import { Navigate, Outlet} from "react-router-dom";

import { useAuth } from './contexts/AuthContext';
import BasicPage from './components/BasicPage';


export default function PrivateRoute() {
    const {currentUser} = useAuth();
  return currentUser ? <BasicPage />:<Navigate replace to="/signup" />
  
}
