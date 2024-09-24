import mainHeader from './main-header.module.css'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import AuthUser from './AuthUser/AuthUser'

const MainHeader = (props: any) => {
    return (
        <header className={mainHeader.container}>
            <div className={mainHeader.content}>
                <HeaderLogo />
                <AuthUser userName={props.userName} avatar={props.avatar} />
            </div>
        </header>
    )
}

export default MainHeader