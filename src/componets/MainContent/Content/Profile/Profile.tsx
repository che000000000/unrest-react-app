import Avatar from './common/Avatar/Avatar'
import NewThought from './common/NewThought/NewThought'
import profile from './profile.module.css'
import Subscribe from './common/Subscribe/Subscrive'
import Subscribes from './common/Subscribes/Subscribes'
import Thoughts from './common/Thoughts/Thoughts'
import UserInfo from './common/UserInfo/UserInfo'

const Profile = (props: any) => {
    return (
        <div className={profile.container}>
            <div className={profile.leftside}>
                <div className={`${profile.block} ${profile.block1}`}>
                    <Avatar avatar={props.avatar}/>
                    <Subscribe />
                </div>
                <div className={profile.block}>
                    <Subscribes />
                </div>
            </div>
            <div className={profile.rightside}>
                <div className={profile.block}>
                    <UserInfo userName={props.userName} userTag={props.userTag} aboutMe={props.aboutMe} />
                </div>
                <div className={`${profile.block} ${profile.block4}`}>
                    <NewThought />
                    <Thoughts />
                </div>
            </div>
        </div>
    )
}

export default Profile