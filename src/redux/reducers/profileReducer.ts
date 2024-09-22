import { usersAPI } from "../../API"

let initialProfileState = {
    userId: '',
    userTag: '',
    userName: '',
    userAvatar: '',
    aboutUser: '',
    isWallOper: false
}

const profileReducer = (state: any = initialProfileState, action: any) => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...action.userProfile
            }
        default: return state
    }
}

export default profileReducer

// AC

export const setProfileAC = (userProfile: any) => {return { type: 'SET-PROFILE', userProfile}}

// Thunk

export const setProfileTK = (user_id: string) => {
    return (dispatch: any) => {
        usersAPI.setProfile(user_id).then(data => {
            dispatch(setProfileAC(data))
        })
    }
}