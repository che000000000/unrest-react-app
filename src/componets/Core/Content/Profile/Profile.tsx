import Avatar from './Avatar/Avatar'
import profile from './profile.module.css'
import Subscribe from './Subscribe/Subscrive'

const Profile = () => {
    return (
        <div className={profile.container}>
            <div className={profile.leftside}>
                <div className={`${profile.block} ${profile.block1}`}>
                    <Avatar />
                    <Subscribe />
                </div>
                <div className={profile.block}>2</div>
            </div>
            <div className={profile.rightside}>
                <div className={profile.block}>3</div>
                <div className={profile.block}>4</div>
            </div>
        </div>
    )
}

export default Profile