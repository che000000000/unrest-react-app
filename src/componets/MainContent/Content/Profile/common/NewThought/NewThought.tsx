import newThought from './new-thought.module.css'

const NewThought = () => {
    return (
        <div className={newThought.container}>
            <div className={newThought.header}>
                <div className={newThought.title}>Запись мысли</div>
            </div>
            <textarea className={newThought.text_area} placeholder={'Текстовизация мыслей...'}></textarea>
            <div className={newThought.btn_area}>
                <button className={newThought.send_btn}>Поделиться</button>
            </div>
        </div>
    )
}

export default NewThought