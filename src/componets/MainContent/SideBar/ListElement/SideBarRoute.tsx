import { NavLink } from 'react-router-dom'
import sideBarRoute from './side-bar-route.module.css'

const SideBarRoute = (props: any) => {
    return (
        <li className={sideBarRoute.container}>
            <NavLink to={props.route}>{props.name}</NavLink>
        </li>
    )
}

export default SideBarRoute