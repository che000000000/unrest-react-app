import signInForm from './sign-in-form.module.css'

const SignInForm = (props: any) => {
    return (
        <div className={signInForm.container}>
            <div className={signInForm.email}>
                <div className={signInForm.input_title}>Эл. почта</div>
                <input
                    className={`${signInForm.input} ${signInForm.email_input}`}
                    placeholder='Введите эл. почту...'
                    value={props.emailInput || ''}
                    onChange={event => props.setEmailInputText(event.target.value)}>
                </input>
            </div>
            <div className={signInForm.password}>
                <div className={signInForm.input_title}>Пароль</div>
                <input
                    className={`${signInForm.input} ${signInForm.password_input}`}
                    placeholder='Введите пароль...'
                    value={props.passwordInput || ''}
                    onChange={event => props.setPasswordInputText(event.target.value)}>
                </input>
                <div className={signInForm.forgot_password}>Забыли пароль?</div>
            </div>
            <button 
            className={signInForm.sign_in_btn}
            onClick={() => props.signIn(props.emailInput, props.passwordInput)}>Войти</button>
        </div>
    )
}

export default SignInForm