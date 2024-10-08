import { NavLink } from 'react-router-dom'
import subscribes from './subscribes.module.css'
import UserElement from './UserElement/UserElement'

const Subscribes = () => {
    return (
        <div className={subscribes.container}>
            <NavLink to='main-content/subscribes'>
                <h1 className={subscribes.title}>Подписки<span className={subscribes.subscribes_count}>11</span></h1>
            </NavLink>
            <ul className={subscribes.users_list}>
                <UserElement />
                <UserElement />
                <UserElement />
                <UserElement />
                <UserElement />
            </ul>
        </div>
    )
}

export default Subscribes