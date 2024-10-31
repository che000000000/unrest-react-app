import { useState } from 'react'
import authUser from './auth-user.module.css'
import AuthMenu from './Menu/AuthMenu'
import noImage from '../../../img/no-avatar.png'

const AuthUser = (props: any) => {
    const [menuIsOpen, toggleMenuOpenStatus] = useState(false)

    return (
        <button className={authUser.container} onClick={() => toggleMenuOpenStatus(!menuIsOpen)}>
            <img className={authUser.avatar} alt='user avatar' src={props.avatar ? props.avatar : noImage} />
            <AuthMenu openedStatus={menuIsOpen} />
        </button>
    )
}

export default AuthUser