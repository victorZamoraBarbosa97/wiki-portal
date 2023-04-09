import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';




export const LoginPage = () => {

  const { login } = useContext( AuthContext ); // estraer la funcion login de mi authContext
  const navigate = useNavigate(); // redireccion de paginas
  const [showPassword, setShowPassword] = useState(false); // state mostrar/ocultar contraseña


  // Manejador de login maneja las credenciales 
  const handleLogin = () => {
    // TODO: fetch a DB 
    login('Victor Zamora'); 
    navigate('/home', { replace:true } )  // navegar a pagina home 
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid 
      container spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight:'100vh', backgroundColor:'--main-color'}}
      className='projects-section projects-section animate__animated animate__fadeIn animate__fast'
      >
        <Grid item
        className='box-shadow'
        xs={3} sm={5}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          margin:5,
          width:{ sm: 450 }
        }}>
          <Typography variant='h5' sx={{ mb:1 }}> Login </Typography>
          <form>
            <Grid container>

              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField 
                  label="Correo electrónico." 
                  type='email' 
                  placeholder='example@mail.com'
                  fullWidth
                />                       
              </Grid>

              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField 
                  label="Contraseña" 
                  type={showPassword ? 'text' : 'password'}
                  placeholder='*********'
                  fullWidth
                  InputProps = {{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          { showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />                       
              </Grid>

              <Grid container spacing={2} sx={{ mb:2, mt:2}}>
                <Grid item xs={12}>
                  <Button variant='contained' fullWidth onClick={ handleLogin }>
                    INICIAR SESIÓN.
                  </Button>
                </Grid>

              </Grid>
            </Grid>
          </form>
        </Grid>
    </Grid>
  )
}


