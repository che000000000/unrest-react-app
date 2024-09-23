import Avatar from './Avatar/Avatar'
import NewThought from './NewThought/NewThought'
import profile from './profile.module.css'
import Subscribe from './Subscribe/Subscrive'
import Subscribes from './Subscribes/Subscribes'
import Thoughts from './Thoughts/Thoughts'
import UserInfo from './UserInfo/UserInfo'

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