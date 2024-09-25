import unsubscribe from './unsubscribe.module.css'

const Unsubscribe = (props: any) => {
    return (
        <button
            className={unsubscribe.container}
            onClick={() => props.unsubscribe(props.subscribeId)}>
            Отписаться
        </button>
    )
}

export default Unsubscribe