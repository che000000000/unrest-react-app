import Avatar from './common/Avatar/Avatar'
import NewThought from './common/NewThought/NewThought'
import profile from './profile.module.css'
import Refactor from './common/underAvatarBtn/Refactor/Refactor'
import UserInfo from './common/UserInfo/UserInfo'
import SubscribeContainer from './common/underAvatarBtn/Subscribe/SubscribeContainer'
import UnsubscribeContainer from './common/underAvatarBtn/Unsubscribe/UnsubscribeContainer'
import SubscribesContainer from './common/Subscribes/SubscribesContainer'
import ThoughtsContainer from './common/Thoughts/ThoughtsContainer'

const Profile = (props: any) => {
    return (
        <div className={profile.container}>
            <div className={profile.left_side}>
                <div className={`${profile.block} ${profile.block1}`}>
                    <Avatar avatar={props.avatar}/>
                    {props.isSubscribe === null ? <Refactor /> : props.isSubscribe ? <UnsubscribeContainer /> : <SubscribeContainer /> }
                </div>
                <div className={profile.block}>
                    <SubscribesContainer />
                </div>
            </div>
            <div className={profile.right_side}>
                <div className={profile.block}>
                    <UserInfo userName={props.userName} userTag={props.userTag} aboutMe={props.aboutMe} />
                </div>
                <div className={`${profile.block} ${profile.block4}`}>
                    <NewThought />
                    <ThoughtsContainer />
                </div>
            </div>
        </div>
    )
}

export default Profile