import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
    // get status user logged
    const { logged } = useContext( AuthContext );

  return (!logged )
  ? children
  : <Navigate to="/home"/>
}

export default PublicRoutes
