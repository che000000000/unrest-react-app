import { useState } from 'react'
import authUser from './auth-user.module.css'
import AuthMenu from './Menu/AuthMenu'

const AuthUser = (props: any) => {
    const [menuIsOpen, toggleMenuOpenStatus] = useState(false)

    return (
        <button className={authUser.container} onClick={() => toggleMenuOpenStatus(!menuIsOpen)}>
            <img className={authUser.avatar} alt='user avatar' src={props.avatar} />
            <div className={authUser.user_name}>{props.userName}</div>
            <AuthMenu openedStatus={menuIsOpen} />
        </button>
    )
}

export default AuthUser