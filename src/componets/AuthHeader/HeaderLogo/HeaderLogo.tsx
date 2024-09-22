import { NavLink } from 'react-router-dom'
import headerLogo from './header-logo.module.css'

const HeaderLogo = () => {
    return (
        <div className={headerLogo.container}>
            <NavLink className={headerLogo.link} to={'/'}>Unrest</NavLink>  
        </div>
    )
}

export default HeaderLogo