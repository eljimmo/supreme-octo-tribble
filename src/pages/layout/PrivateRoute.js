import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from './Contexts/AuthContext';
import BasicPage from './BasicPage';


export default function PrivateRoute() {
    const {currentUser} = useAuth();
  return currentUser ? <BasicPage />:<Navigate replace to="/signup" />
  
}
