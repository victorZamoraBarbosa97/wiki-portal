import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

import { types } from '../types/types'


const initialState = {
    logged: false,
}


// acceder a la ultima sesion guardada en localstorage
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return { logged: !!user, user }
}

const AuthProvider = ({ children }) => {

    const [ authState, dispatch] = useReducer( authReducer, initialState, init );

    // funcion login,  Guarda la sesion del usuario en el localstorage y acciona dispatch de login
    const login = ( name = '' ) => {
      const user = { id: '123Ejemplo', name: name } 
      const action = { type: types.login, payload: user }
      localStorage.setItem('user', JSON.stringify( user ) )
      dispatch( action );
    }

    // funcion logout, elimina sesion de localstorage y acciona dispatch logput
    const logout = () => {
      localStorage.removeItem('user');
      const action = { type: types.logout };
      dispatch( action )
    }

  return (
    <AuthContext.Provider value={{
      // atributos
      ...authState,

      // metodos
      login: login,
      logout: logout
    }}>

      { children }

    </AuthContext.Provider>
  )
}

export default AuthProvider
