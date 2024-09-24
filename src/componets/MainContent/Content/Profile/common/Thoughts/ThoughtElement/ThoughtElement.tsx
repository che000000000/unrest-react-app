import thoughtElement from './thought-element.module.css'
import noImage from '../../../../../../../img/no-avatar.png'
import { NavLink } from 'react-router-dom'

const ThoughtElement = () => {
    return (
        <div className={thoughtElement.container}>
            <div className={thoughtElement.header}>
                <NavLink to={'/profile'} className={thoughtElement.user}>
                    <img className={thoughtElement.user_avatar} src={noImage} alt='user avatar' />
                    <div className={thoughtElement.user_name}>dd24</div>
                </NavLink>
                <div className={thoughtElement.date}>20.09.2024</div>
            </div>
            <div className={thoughtElement.thought_text}>
                Много ещё пилить, но всё ещё будет.
            </div>
        </div>
    )
}

export default ThoughtElement