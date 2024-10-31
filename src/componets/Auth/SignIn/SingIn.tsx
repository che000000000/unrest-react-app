import { Link } from 'react-router-dom'
import signIn from './sign-in.module.css'
import SignInForm from './SignInForm/SignInForm'

const SignIn = (props: any) => {
    return (
        <div className={signIn.container}>
            <div className={signIn.window}>
                <div className={signIn.about}>
                    Для пользования этой соц. сетью нужно иметь аккаунт. Если у тебя нет аккаунта, его можно создать <Link
                        to={'/sign-up'}
                        className={signIn.about_link}
                        onClick={() => props.clearForm()}>здесь
                    </Link>.
                </div>
                <div className={signIn.split_line}></div>
                <div className={signIn.title}>Авторизация</div>
                <SignInForm {...props} />
            </div>
        </div>
    )
}

export default SignIn