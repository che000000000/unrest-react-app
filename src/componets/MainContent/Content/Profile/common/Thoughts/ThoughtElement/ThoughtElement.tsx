import thoughtElement from './thought-element.module.css'
import noImage from '../../../../../../../img/no-avatar.png'
import { NavLink } from 'react-router-dom'

const ThoughtElement = (props: any) => {
    return (
        <div className={thoughtElement.container}>
            <div className={thoughtElement.header}>
                <NavLink to={`/main-content/profile${props.thoughtData.creator.id === props.myId ? '' : '/' + props.thoughtData.creator.id}`} className={thoughtElement.user}>
                    <img className={thoughtElement.user_avatar} src={props.thoughtData.creator.avatar ? props.thoughtData.creator.avatar : noImage} alt='user avatar' />
                    <div className={thoughtElement.user_name}>{props.thoughtData.creator.userName}</div>
                </NavLink>
                <div className={thoughtElement.header_right_side}>
                    {props.thoughtData.updatedAt === null ? null : <div className={thoughtElement.refactored}>(Изменено)</div>}
                    <div className={thoughtElement.date}>{props.thoughtData.createdAt}</div>
                </div>
            </div>
            <div className={thoughtElement.thought_text}>{props.thoughtData.thoughtText}</div>
        </div>
    )
}

export default ThoughtElement