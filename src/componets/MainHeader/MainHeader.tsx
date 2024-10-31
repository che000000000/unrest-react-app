import mainHeader from './main-header.module.css'
import AuthUser from './AuthUser/AuthUser'
import HeaderLogoContainer from './HeaderLogo/HeaderLogoContainer'

const MainHeader = (props: any) => {
    return (
        <header className={mainHeader.container}>
            <div className={mainHeader.content}>
                <HeaderLogoContainer />
                <AuthUser userName={props.userName} avatar={props.avatar} />
            </div>
        </header>
    )
}

export default MainHeader