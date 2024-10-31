import subscribe from './subscribe.module.css'

const Subscribe = (props: any) => {
    return (
        <button
            className={subscribe.container}
            onClick={() => props.subscribe(props.userId)}> 
            Подписаться
        </button>
    )
}

export default Subscribe