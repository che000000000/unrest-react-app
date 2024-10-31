import authHeader from './auth-header.module.css'
import HeaderLogo from '../MainHeader/HeaderLogo/HeaderLogo'

const AuthHeader = () => {
    return (
        <header className={authHeader.container}>
            <div className={authHeader.content}>
                <HeaderLogo />
            </div>
        </header>
    )
}

export default AuthHeader