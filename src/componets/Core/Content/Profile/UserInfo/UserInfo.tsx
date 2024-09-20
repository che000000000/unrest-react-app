import userInfo from './user-info.module.css'

const UserInfo = () => {
    return (
        <div className={userInfo.container}>
            <div className={userInfo.header}>
                <div className={userInfo.user_name}>DD24</div>
                <div className={userInfo.user_tag}>dd24</div>
            </div>
            <div>
                <div className={userInfo.about_user}>Пилю отот сайт. Надеюсь всё будет хорошо, сайт получится удобным и стабильным.</div>
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