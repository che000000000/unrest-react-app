import { NavLink } from 'react-router-dom'
import listElement from './list-element.module.css'

const ListElement = (props: any) => {
    return (
        <li className={listElement.container}>
            <NavLink to={props.link}>{props.name}</NavLink>
        </li>
    )
}

export default ListElement