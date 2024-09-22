import avatar from './avatar.module.css'
import noImage from '../../../../../img/no-avatar.png'

const Avatar = () => {
    return (
        <img className={avatar.container} src={noImage} alt='user avatar' />
    )
}

export default Avatar