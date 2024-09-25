import { NavLink } from 'react-router-dom'
import userElement from './user-element.module.css'
import noImage from '../../../../../../../img/no-avatar.png'

const UserElement = () => {
    return (
        <NavLink to='/main-content/profile/8dee90ed-c606-40cc-a459-4719fc3693bb' className={userElement.container}>
            <img className={userElement.avatar} src={noImage} alt='user avatar' />
            <div className={userElement.user_name}>dd24</div>
        </NavLink>
    )
}

export default UserElement