import { subscribesAPI, usersAPI } from "../../API"
import { fallAuth, setAuthErrorText } from "./singInReducer"

let initialProfileState = {
    id: null,
    userTag: null,
    userName: null,
    avatar: null,
    aboutMe: null,
    isWallOpen: false,
    isSubscribe: null,
    subscribeId: null
}

const profileReducer = (state: any = initialProfileState, action: any) => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...state,
                id: action.userProfile.id,
                userTag: action.userProfile.userTag,
                userName: action.userProfile.userName,
                avatar: action.userProfile.avatar,
                aboutMe: action.userProfile.aboutMe,
                isWallOpen: action.userProfile.isWallOpen
            }
        case 'SET_SUBSCRIBE':
            return {
                ...state,
                isSubscribe: action.subscribe.status,
                subscribeId: action.subscribe.id ? action.subscribe.id : null
            }
        case 'SUBSCRIBE': 
            return {
                ...state,
                isSubscribe: true,
                subscribeId: action.subscribeId
            }
        case 'UNSUBSCRIBE': 
            return {
                ...state,
                isSubscribe: false,
                subscribeId: null
            }
        default: return state
    }
}

export default profileReducer

// AC

export const setProfileAC = (userProfile: any) => { return { type: 'SET-PROFILE', userProfile } }
export const setSubscribeStatusAC = (subscribe: any) => { return { type: 'SET_SUBSCRIBE', subscribe } }
export const subscribeAC = (subscribeId: string) => { return { type: 'SUBSCRIBE', subscribeId } } 
export const unsubscribeAC = () => { return { type: 'UNSUBSCRIBE' } }

// Thunk

export const setProfileTK = (user_id: string) => {
    return async (dispatch: any) => {
        const [getProfileRes, getSubscribeRes] = await Promise.all([
            usersAPI.setProfile(user_id),
            subscribesAPI.getSubscribeStatus(user_id)
        ])
        if ('error' in getProfileRes || 'error' in getSubscribeRes) {
            if ('error' in getProfileRes && getProfileRes.error === 'Unauthorized') {
                dispatch(fallAuth())
                dispatch(setAuthErrorText(getProfileRes.message))
            }
        } else {
            dispatch(setProfileAC(getProfileRes.data))
            dispatch(setSubscribeStatusAC(getSubscribeRes.data))
        }
    }
}

export const subscribeTK = (user_id: string) => {
    return async (dispatch: any) => {
        const createSubRes = await subscribesAPI.createSubscribe(user_id)
        if ('error' in createSubRes) return null
        else dispatch(subscribeAC(createSubRes.data.id))
    }
}

export const unsubscribeTK = (subscribe_id: string) => {
    return async (dispatch: any) => {
        const deleteSubRes = await subscribesAPI.deleteSubscribe(subscribe_id)
        if ('error' in deleteSubRes) return null
        else dispatch(unsubscribeAC())
    }
}