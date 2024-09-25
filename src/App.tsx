import { Route, Routes, useLocation } from 'react-router-dom'
import app from './app.module.css'
import MainContent from './componets/MainContent/MainContent'
import AuthHeader from './componets/AuthHeader/AuthHeader'
import SignUpContainer from './componets/Auth/SignUp/SignUpContainer'
import SignInContainer from './componets/Auth/SignIn/SignInContainer'
import MainHeaderContainer from './componets/MainHeader/MainHeaderContainer'
import ProfileContainer from './componets/MainContent/Content/Profile/ProfileContainer'
import { useEffect, useState } from 'react'
import { verifyAuthTK } from './redux/reducers/singInReducer'

const App = (props: any) => {
  const location = useLocation()
  const isAuthRoute = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/'
  const [loading, setLoading] = useState(true)
  const state = props.store.getState()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await props.store.dispatch(verifyAuthTK())
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [props.store])

  if (loading) return null

  return (
    <div className={app.container}>
      {isAuthRoute ? <AuthHeader /> : <MainHeaderContainer />}
      <div className={app.core}>
        <Routes>
          <Route path={'/'} element={!state.signInReducer.isAuth ? <SignInContainer /> : <ProfileContainer />} />
          <Route path={'main-content/*'} element={<MainContent />}>
            <Route path={'profile/:user_id?'} element={<ProfileContainer />} />
          </Route>
          <Route path='sign-in' element={<SignInContainer />} />
          <Route path='sign-up' element={<SignUpContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App