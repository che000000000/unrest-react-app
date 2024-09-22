const initialUserState = {
    emailInput: null,
    userTagInput: null,
    passwordInput: null,
    repeatPasswordInput: null
}

const signUpReducer = (state: any = initialUserState, action: any) => {
    switch (action.type) {
        case 'SET_EMAIL_INPUT_TEXT': return {
            ...state,
            emailInput: action.emailInputText
        }
        case 'SET_USER_TAG_INPUT_TEXT': return {
            ...state,
            userTagInput: action.userTagInputText
        }
        case 'SET_PASSWORD_INPUT_TEXT': return {
            ...state,
            passwordInput: action.passwordInputText
        }
        case 'SET_REPEAT_PASSWORD_INPUT_TEXT': return {
            ...state,
            repeatPasswordInput: action.repeatPasswordInputText
        }
        case 'CLEAR_FORM': return {
            ...state,
            emailInput: null,
            userTagInput: null,
            passwordInput: null,
            repeatPasswordInput: null
        }
        default: return state
    }
}

export default signUpReducer

// ACs

export const setEmailInputTextAC = (emailInputText: string) => { return { type: 'SET_EMAIL_INPUT_TEXT', emailInputText } }
export const setUserTagInputAC = (userTagInputText: string) => { return { type: 'SET_USER_TAG_INPUT_TEXT', userTagInputText } }
export const setPasswordInputTextAC = (passwordInputText: string) => { return { type: 'SET_PASSWORD_INPUT_TEXT', passwordInputText } }
export const setRepeatPasswordInputTextAC = (repeatPasswordInputText: string) => { return { type: 'SET_REPEAT_PASSWORD_INPUT_TEXT', repeatPasswordInputText } }
export const clearFormAC = () => { return { type: 'CLEAR_FORM' } }