import headerLogo from './header-logo.module.css'

const HeaderLogo = () => {
    return (
        <div className={headerLogo.container}>
            <a className={headerLogo.link} href={'/'}>Unrest</a>  
        </div>
    )
}

export default HeaderLogo