import ThoughtElement from './ThoughtElement/ThoughtElement'
import thoughts from './thoughts.module.css'
import NoThoughts from './NoThoughts/NoThoughts'

const Thoughts = (props: any) => {
    const thoughtsElements = props.profileThoughts.map((thought: any, index: number) => (
        <ThoughtElement key={index} myId={props.myId} thoughtData={thought} />
    ))
    let userId = props.params.user_id
    if (!userId) userId = props.myId
    return (
        <div className={thoughts.container}>
            <div className={thoughts.header}>
                <div className={thoughts.title}>Настенные мысли</div>
            </div>
            <ul className={thoughts.thoughts_list}>
                {thoughtsElements.length !== 0 ? thoughtsElements : <NoThoughts />}
            </ul>
            {thoughtsElements.length !== 0 && (
                <footer className={thoughts.footer}>
                    <button
                        className={thoughts.show_more_btn}
                        onClick={() => props.setThoughtsPage(userId, props.thoughtsPagesLoaded + 1, 3)}>
                        Показать ещё...
                    </button>
                </footer>
            )}
        </div>
    )
}

export default Thoughts