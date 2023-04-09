import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import React, { useContext, useState } from 'react';

import { GetIniciales } from '../functions/functionsHome';
import { AuthContext } from '../auth/context/AuthContext';


export const Header = () => {
  const { user, logout } = useContext( AuthContext );
  const navigate = useNavigate();

  // Manejador de cambio de estado vista Light/Dark
  const [classes, setClasses] = useState('mode-switch');

  const handleSwitchTheme = () => {
    setClasses(classes === 'mode-switch' ? 'mode-switch active' : 'mode-switch');
    document.documentElement.classList.toggle('dark');
  }

  // Cerrar sesion
  const handleLogOut = () => {
    logout();
    navigate('/login', { replace: true } );
  }

  return (
    <div className="app-header">
    <div className="app-header-left">

      <Link to = "/home" style = {{ textDecoration: 'none' }} >
        <p className = "app-name"> WIKI PORTAL </p>
      </Link>

      <div className="search-wrapper">
        <input className="search-input" type="text" placeholder="Buscar"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="2" className="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>

    <div className="app-header-right">

      <button className={ classes } title="Switch Theme" onClick={ handleSwitchTheme }>
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>


      <Divider orientation="vertical" variant="middle" flexItem  sx = {{ m:1 }} />
      <Avatar sx={{ bgcolor: deepPurple[500], m:1, width: 32, height: 32, fontSize: 'inherit'  }}> {GetIniciales(user?.name)} </Avatar>
      <p className='projects-section-header' id='userName'> { user?.name } </p>
      <button className="notification-btn" onClick = { handleLogOut } >
        <i className="fa-solid fa-arrow-right-from-bracket fa-xl" style={{color: "#ff0000"}}> </i>
      </button> 
      
    </div>
  </div>
  )
}

