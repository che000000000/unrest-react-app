import mainHeader from './main-header.module.css'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNav from './HeaderNav/HeaderNav'

const MainHeader = (props: any) => {
    return (
        <header className={mainHeader.container}>
            <div className={mainHeader.content}>
                <HeaderLogo />
                <HeaderNav userName={props.userName} />
            </div>
        </header>
    )
}

export default MainHeader