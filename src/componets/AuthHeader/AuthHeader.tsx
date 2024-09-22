import authHeader from './auth-header.module.css'
import HeaderLogo from './HeaderLogo/HeaderLogo'

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