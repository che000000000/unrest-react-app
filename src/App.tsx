import { Route, Routes, useLocation } from 'react-router-dom'
import app from './app.module.css'
import MainContent from './componets/MainContent/MainContent'
import Profile from './componets/MainContent/Content/Profile/Profile'
import AuthHeader from './componets/AuthHeader/AuthHeader'
import SignUpContainer from './componets/Auth/SignUp/SignUpContainer'
import SignInContainer from './componets/Auth/SignIn/SignInContainer'
import VerifyAuth from './Hocks/VerifyAuth'
import MainHeaderContainer from './componets/MainHeader/MainHeaderContainer'

const App = () => {
  const location = useLocation()
  const isAuthRoute = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/'
  return (
    <div className={app.container}>
      {isAuthRoute? <AuthHeader /> : <MainHeaderContainer />}
      <div className={app.core}>
        <Routes>
          <Route path={'/'} element={<SignInContainer />} />
          <Route path={'main-content/*'} element={<MainContent />}>
            <Route path={'profile'} element={<Profile />} />
          </Route>
          <Route path='sign-in' element={<SignInContainer />} />
          <Route path='sign-up' element={<SignUpContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default VerifyAuth(App)