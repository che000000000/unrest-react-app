import { Link } from 'react-router-dom'
import menuElement from './menu-element.module.css'

const MenuElement = (props: any) => {
    return (
        <Link to={props.route} className={menuElement.container}>
            <div className={menuElement.name}>{props.name}</div>
        </Link>
    )
}

export default MenuElement