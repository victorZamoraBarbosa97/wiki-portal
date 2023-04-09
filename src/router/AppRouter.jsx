import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../pages'
import { PageRoutes } from '../PagesRoutes/PageRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoutes'


export const AppRouter = () => {
  return (
    <>
    {/* <h2>Cargando...</h2> loader pendiente  */}
    <Routes >

      <Route path='/login' element = {
        <PublicRoutes>
          <LoginPage/>
        </PublicRoutes>
      }/>



      {/* Rutas privadas */}
      <Route path='/*' element = {
        <PrivateRoute>
          <PageRoutes/>
        </PrivateRoute> 
      }/>

    </Routes>
    </>
  )
}
