import { connect } from "react-redux";
import { clearFormAC, setEmailInputTextAC, setPasswordInputTextAC, setRepeatPasswordInputTextAC, setUserTagInputAC } from "../../../redux/reducers/signUpReducer";
import SignUp from "./SIgnUp";

const mapDispatchToProps = (dispatch: any) => {
    return {
        setEmailInputText: (email_input_text: string) => { dispatch(setEmailInputTextAC(email_input_text)) },
        setUserTagInputText: (user_tag_input_text: string) => { dispatch(setUserTagInputAC(user_tag_input_text)) },
        setPasswordInputText: (password_input_text: string) => { dispatch(setPasswordInputTextAC(password_input_text)) },
        setRepeatPasswordInputText: (repeat_password_input_text: string) => { dispatch(setRepeatPasswordInputTextAC(repeat_password_input_text)) },
        clearForm: () => {dispatch(clearFormAC())}
    }
}

const mapStateToProps = (state: any) => {
    return {
        emailInput: state.signUpReducer.emailInput,
        userTagInput: state.signUpReducer.signUpReducer,
        passwordInput: state.signUpReducer.passwordInput,
        repeatPasswordInput: state.signUpReducer.repeatPasswordInput
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)