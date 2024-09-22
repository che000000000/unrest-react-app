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
    isAuth: false,
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
        default: return state
    }
}

export default signInReducer

// ACs

export const setEmailInputTextAC = (emailInput: string) => { return { type: 'SET_EMAIL_INPUT_TEXT', emailInput } }
export const setPasswordInputTextAC = (passwordInput: string) => { return { type: 'SET_PASSWORD_INPUT_TEXT', passwordInput } }
export const clearFormAC = () => { return { type: 'CLEAR_FORM' } }
export const signInAC = (userData: any) => { return { type: 'SIGN_IN', userData } }
export const signutAC = () => { return { type: 'SIGN_OUT' } }

// Thunks

export const signInTK = (email: string, password: string) => {
    return (dispatch: any) => {
        authAPI.signIn(email, password).then(data => {
            if(data?.error) throw new Error(data.message)
            else dispatch(signInAC(data.data))
        })
    }
}

export const verifyAuthTK = () => {
    return (dispatch: any) => {
        authAPI.verifyAuth().then(data => {
            if(data?.error) throw new Error(data.message)
            dispatch(signInAC(data.data))
        })
    }
}