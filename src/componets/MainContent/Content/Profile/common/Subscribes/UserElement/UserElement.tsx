import { NavLink } from 'react-router-dom'
import userElement from './user-element.module.css'
import noImage from '../../../../../../../img/no-avatar.png'

const UserElement = (props: any) => {
    return (
        <NavLink to={`/main-content/profile/${props.userId}`} className={userElement.container}>
            <img className={userElement.avatar} src={props.userAvatar ? props.userAvatar : noImage} alt='user avatar' />
            <div className={userElement.user_name}>{props.userName}</div>
        </NavLink>
    )
}

export default UserElement