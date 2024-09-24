import { authAPI } from "../../API"

const initialUserState = {
    emailInput: null,
    passwordInput: null,
    user: {
        id: null,
        email: null,
        userName: null,
        userTag: null,
        avatar: null,
        aboutMe: null,
        isWallOpen: null
    },
    isAuth: null,
    authErrorText: null
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
        case 'SIGN_IN': return {
            ...state,
            emailInput: null,
            passwordInput: null,
            user: {
                id: action.userData.id,
                email: action.userData.email,
                userName: action.userData.userName,
                userTag: action.userData.userTag,
                avatar: action.userData.avatar,
                aboutMe: action.userData.aboutMe,
                isWallOpen: action.userData.isWallOpen
            },
            isAuth: true
        }
        case 'FALL_AUTH': return {
            ...state,
            isAuth: false
        }
        case 'SIGN_OUT': return {
            ...state,
            user: {
                id: null,
                email: null,
                userName: null,
                userTag: null,
                avatar: null,
                aboutMe: null,
                isWallOpen: null
            },
            isAuth: false,
        }
        case 'SET_AUTH_ERROR_TEXT': return {
            ...state,
            authErrorText: action.errorText
        }
        default: return state
    }
}

export default signInReducer

// ACs

export const setEmailInputTextAC = (emailInput: string) => { return { type: 'SET_EMAIL_INPUT_TEXT', emailInput } }
export const setPasswordInputTextAC = (passwordInput: string) => { return { type: 'SET_PASSWORD_INPUT_TEXT', passwordInput } }
export const clearFormAC = () => { return { type: 'CLEAR_FORM' } }
export const signInAC = (userData: any) => { return { type: 'SIGN_IN', userData } }
export const fallAuth = () => { return { type: 'FALL_AUTH' } }
export const signutAC = () => { return { type: 'SIGN_OUT' } }
export const setAuthErrorText = (errorText: string) => { return { type: 'SET_AUTH_ERROR_TEXT', errorText} } 

// Thunks

export const signInTK = (email: string, password: string) => {
    return async (dispatch: any) => {
        const data = await authAPI.signIn(email, password)
        if ('error' in data) {
            dispatch(setAuthErrorText(data.message))
        } else dispatch(signInAC(data.data))
    }
}

export const verifyAuthTK = () => {
    return async (dispatch: any) => {
        const data = await authAPI.verifyAuth()
        if ('error' in data) {
            dispatch(fallAuth())
            dispatch(setAuthErrorText(data.message))
        } else dispatch(signInAC(data.data))
    }
}