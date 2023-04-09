import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    // get status user logged 
    const { logged } = useContext( AuthContext )
    
    // redireccionar dependiendo del estado de autenticacion
    return ( logged )
        ? children
        :<Navigate to ="/login"> </Navigate>
}

export default PrivateRoute
