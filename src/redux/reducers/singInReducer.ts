import { authAPI } from "../../API"

const initialUserState = {
    emailInput: null,
    passwordInput: null,
}

const signInReducer = (state: any = initialUserState, action: any) => {
    switch (action.type) {
        case 'SET_EMAIL_INPUT_TEXT': return {
            ...state,
            emailInput: action.emailInput
        }
        case 'SET_PASSWORD_INPUT_TEXT': return {
            ...state,
            passwordInput: action.passwordInput
        }
        case 'CLEAR_FORM': return {
            ...state,
            emailInput: null,
            passwordInput: null,
        }
        default: return state
    }
}

export default signInReducer

// ACs

export const setEmailInputTextAC = (emailInput: string) => { return { type: 'SET_EMAIL_INPUT_TEXT', emailInput }}
export const setPasswordInputTextAC = (passwordInput: string) => { return { type: 'SET_PASSWORD_INPUT_TEXT', passwordInput }}
export const clearFormAC = () => { return { type: 'CLEAR_FORM' } }

// Thunks

export const signInTK = (email: string, password: string) => {
    return (dispatch: any) => {
        authAPI.signIn(email, password).then(data => {
            console.log(data)
        })
    }
} 