import mainContent from './main-content.module.css'
import { Outlet } from "react-router-dom"
import SideBar from "./SideBar/SideBar"
import AuthRedirect from '../../Hocks/AuthRedirect'

const MainContent = () => {
  return (
    <div className={mainContent.container}>
      <SideBar />
      <main className={mainContent.content}>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthRedirect(MainContent) 