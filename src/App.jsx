import AuthProvider from './auth/context/AuthProvider' // Almacena informaciom de la sesion activa 
import { AppRouter } from './router/AppRouter'

function App( ) {
  return (
    <AuthProvider> 
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
