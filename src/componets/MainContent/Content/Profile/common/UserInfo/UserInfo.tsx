import userInfo from './user-info.module.css'

const UserInfo = (props: any) => {
    return (
        <div className={userInfo.container}>
            <div className={userInfo.header}>
                <div className={userInfo.user_name}>{props.userName}</div>
                <div className={userInfo.user_tag}>{props.userTag}</div>
            </div>
            <div>
                <div className={userInfo.about_user}>{props.aboutMe}</div>
            </div>
            <div className={userInfo.more_info}>
                Дополнительная информация
            </div>
            {/* <div className={userInfo.dlc_info}>
                
            </div> */}
        </div>
    )
}

export default UserInfo