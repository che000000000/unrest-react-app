import noThoughts from './no-thoughts.module.css'
import noThoughtsIcon from '../../../../../../../icons/no-thoughts.svg'

const NoThoughts = () => {
    return (
        <div className={noThoughts.container}>
            <div className={noThoughts.text}>{`У пользователя нет мыслей на стене((`}</div>
        </div>
    )
}

export default NoThoughts