import { Link } from 'react-router-dom'
import signUp from './sign-up.module.css'
import SignUpForm from './SignUpForm/SignUpForm'

const SignUp = (props: any) => {
    return (
        <div className={signUp.container}>
            <div className={signUp.window}>
                <div className={signUp.about}>
                    Если у тебя уже есть аккаунт, войти в него можно <Link
                        to={'/sign-in'}
                        className={signUp.about_link}
                        onClick={() => props.clearForm()} > здесь
                    </Link>.
                </div>
                <div className={signUp.split_line}></div>
                <div className={signUp.title}>Регистрация</div>
                <SignUpForm {...props} />
            </div>
        </div>
    )
}

export default SignUp