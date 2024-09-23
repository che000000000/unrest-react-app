import authUser from './auth-user.module.css'

const AuthUser = (props: any) => {
    return (
        <button className={authUser.container}>
            <img className={authUser.avatar} alt='user avatar' src={props.avatar}/>
            <div className={authUser.user_name}>{props.userName}</div>
        </button>
    )
}

export default AuthUser