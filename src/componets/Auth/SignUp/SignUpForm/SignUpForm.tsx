import signUpForm from './sign-up-form.module.css'

const SignUpForm = (props: any) => {
    return (
        <div className={signUpForm.container}>
            <div className={signUpForm.email}>
                <div className={signUpForm.input_title}>Эл. почта</div>
                <input
                    className={`${signUpForm.input} ${signUpForm.email_input}`}
                    placeholder='Введите эл. почту...' 
                    value={props.emailInput || ''}
                    onChange={event => props.setEmailInputText(event.target.value)}>
                </input>
            </div>
            <div className={signUpForm.user_tag}>
                <div className={signUpForm.input_title}>Ваш уникальный тэг</div>
                <input
                    className={`${signUpForm.input} ${signUpForm.user_tag_input}`}
                    placeholder='Придумайте свой тэг...'
                    value={props.userTagInput || ''}
                    onChange={event => props.setUserTagInputText(event.target.value)}>
                </input>
            </div>
            <div className={signUpForm.password}>
                <div className={signUpForm.input_title}>Лучше иметь надёжный пароль</div>
                <input
                    className={`${signUpForm.input} ${signUpForm.password_input}`}
                    placeholder='Введите пароль...'
                    value={props.passwordInput || ''}
                    onChange={event => props.setPasswordInputText(event.target.value)}>
                </input>
            </div>
            <div className={signUpForm.repeat_password}>
                <div className={signUpForm.input_title}>Подтверждение пароля</div>
                <input
                    className={`${signUpForm.input} ${signUpForm.repeat_password_input}`}
                    placeholder='Повторите пароль...'
                    value={props.repeatPasswordInput || ''}
                    onChange={event => props.setRepeatPasswordInputText(event.target.value)}>
                </input>
            </div>
            <button className={signUpForm.sign_in_btn}>Отправить</button>
        </div>
    )
}
export default SignUpForm