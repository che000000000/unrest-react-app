import { usersAPI } from "../../API"
import { fallAuth, setAuthErrorText } from "./singInReducer"

let initialProfileState = {
    id: null,
    userTag: null,
    userName: null,
    avatar: null,
    aboutMe: null,
    isWallOpen: false
}

const profileReducer = (state: any = initialProfileState, action: any) => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                id: action.userProfile.id,
                userTag: action.userProfile.userTag,
                userName: action.userProfile.userName,
                avatar: action.userProfile.avatar,
                aboutMe: action.userProfile.aboutMe,
                isWallOpen: action.userProfile.isWallOpen
            }
        default: return state
    }
}

export default profileReducer

// AC

export const setProfileAC = (userProfile: any) => {return { type: 'SET-PROFILE', userProfile}}

// Thunk

export const setProfileTK = (user_id: string) => {
    return async (dispatch: any) => {
        const data = await usersAPI.setProfile(user_id)
        if ('error' in data) {
            if ('error' in data && data.error === 'Unauthorized'){
                dispatch(fallAuth())
                dispatch(setAuthErrorText(data.message))
            } 
        } else dispatch(setProfileAC(data.data))
    }
}