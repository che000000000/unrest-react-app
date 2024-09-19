import { Route, Routes } from 'react-router-dom'
import app from './app.module.css'
import MainHeader from './componets/MainHeader/MainHeader'
import Profile from './componets/Core/Content/Profile/Profile'
import SideBar from './componets/Core/SideBar/SideBar'
const App = () => {
  return (
    <div className={app.container}>
      <MainHeader />
      <div className={app.core}>
        <SideBar />
        <main className={app.content}>
          <Routes>
            <Route path={'/'} element={<Profile />} />
            <Route path={'profile'} element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App