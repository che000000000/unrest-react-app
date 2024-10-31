import refactor from './refactor.module.css'
import { useNavigate } from 'react-router-dom';

const Refactor = (props: any) => {
    const navigate = useNavigate()

    return (
        <button className={refactor.container} onClick={() => (navigate('/main-content/refactor'))}>
            Редактировать
        </button>
    )
}

export default Refactor