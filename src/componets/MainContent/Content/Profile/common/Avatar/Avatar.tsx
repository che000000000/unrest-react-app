import avatar from './avatar.module.css'
import noImage from '../../../../../../img/no-avatar.png'

const Avatar = (props: any) => {
    const userAvatar = props.avatar ? props.avatar : noImage
    return (
        <img className={avatar.container} src={userAvatar} alt='user avatar' />
    )
}

export default Avatar