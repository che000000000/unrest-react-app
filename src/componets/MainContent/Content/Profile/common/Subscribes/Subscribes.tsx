import { NavLink } from 'react-router-dom'
import subscribes from './subscribes.module.css'
import UserElement from './UserElement/UserElement'

const Subscribes = (props: any) => {
    const subUsersElements = props.userSubscribes.map((user: any, index: number) => (
        <UserElement key={index} myId={props.myId} userId={user.id} userName={user.userName} userAvatar={user.avatar} />
    )) 

    return (
        <div className={subscribes.container}>
            <NavLink to={`/main-content/subscribes/${props.userId}`}>
                <h1 className={subscribes.title}>Подписки<span className={subscribes.subscribes_count}>{props.totalUserSubscribes}</span></h1>
            </NavLink>
            <ul className={subscribes.users_list}>
                {subUsersElements}
            </ul>
        </div>
    )
}

export default Subscribes