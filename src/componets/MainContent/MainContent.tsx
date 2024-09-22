import mainContent from './main-content.module.css'
import { Outlet, Route, Routes } from "react-router-dom"
import SideBar from "./SideBar/SideBar"
import Profile from "./Content/Profile/Profile"

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

export default MainContent