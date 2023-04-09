import { Navigate, Route, Routes } from "react-router-dom"
import { Header, SideBar } from '../components'
import { Home, ProjectDetails, ConfigPage } from "../pages"

export const PageRoutes = () => {
  return (
    <>
        <Header/>
        <div className="app-content">
            <SideBar />
            <Routes>
                <Route path='/home' element = { <Home />} />
                <Route path='/ProjectDetails' element = { <ProjectDetails />} />
                <Route path='/ConfigPage' element = { <ConfigPage />} />
                <Route path='/*' element = { < Navigate to = "/home" />} />
            </Routes>
        </div>
    </>
  )
}
