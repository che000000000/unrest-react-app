import { connect } from "react-redux"
import { clearFormAC, setEmailInputTextAC, setPasswordInputTextAC, signInTK } from "../../../redux/reducers/singInReducer"
import SignIn from "./SingIn"
import AuthRedirect from "../../../Hocks/AuthRedirect"

const mapDispatchToProps = (dispatch: any) => {
    return {
        setEmailInputText: (email_input_text: string) => { dispatch(setEmailInputTextAC(email_input_text)) },
        setPasswordInputText: (password_input_text: string) => { dispatch(setPasswordInputTextAC(password_input_text)) },
        clearForm: () => { dispatch(clearFormAC()) },
        signIn: (email: string, password: string) => { dispatch(signInTK(email, password)) }
    }
}

const mapStateToProps = (state: any) => {
    return {
        emailInput: state.signInReducer.emailInput,
        passwordInput: state.signInReducer.passwordInput
    }
}

export default AuthRedirect(connect(mapStateToProps, mapDispatchToProps)(SignIn))