import ThoughtElement from './ThoughtElement/ThoughtElement'
import thoughts from './thoughts.module.css'

const Thoughts = () => {
    return (
        <div className={thoughts.container}>
            <div className={thoughts.header}>
                <div className={thoughts.title}>Настенные мысли</div>
            </div>
            <ul className={thoughts.thoughts_list}>
                <ThoughtElement />
                <ThoughtElement />
            </ul>
        </div>
    )
}

export default Thoughts