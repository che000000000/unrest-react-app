import headerLogo from './header-logo.module.css'

const HeaderLogo = (props: any) => {
    return (
        <div className={headerLogo.container}>
            <a className={headerLogo.link} href={props.isAuth ? '/main-content/profile' : '/sign-in'}>Unrest</a>
        </div>
    )
}

export default HeaderLogo