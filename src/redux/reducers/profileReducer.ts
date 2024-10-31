import { subscribesAPI, thoughtsAPI, usersAPI } from "../../API"
import { fallAuth, setAuthErrorText } from "./singInReducer"

let initialProfileState = {
    id: null,
    userTag: null,
    userName: null,
    avatar: null,
    aboutMe: null,
    isWallOpen: false,
    isSubscribe: null,
    subscribeId: null,
    userSubscribes: [],
    totalUserSubscribes: null,
    profileThoughts: [],
    thoughtsPagesLoaded: 0
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
        case 'SET-SUBSCRIBE':
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
        case 'SET-USER-SUBSCRIBES':
            return {
                ...state,
                userSubscribes: action.subscribesPage,
                totalUserSubscribes: action.totalUserSubscribes
            }
        case 'LOAD-FIRST-THOUGHTS-PAGE':
            return {
                ...state,
                profileThoughts: action.thoughtsPage,
                thoughtsPagesLoaded: 1
            }
        case 'SET-THOUGHTS-PAGE':
            return {
                ...state,
                profileThoughts: [...state.profileThoughts, ...action.thoughtsPage],
                thoughtsPagesLoaded: state.thoughtsPagesLoaded + 1
            }
        default: return state
    }
}

export default profileReducer

// AC

export const setProfileAC = (userProfile: any) => { return { type: 'SET-PROFILE', userProfile } }
export const setSubscribeStatusAC = (subscribe: any) => { return { type: 'SET-SUBSCRIBE', subscribe } }
export const subscribeAC = (subscribeId: string) => { return { type: 'SUBSCRIBE', subscribeId } }
export const unsubscribeAC = () => { return { type: 'UNSUBSCRIBE' } }
export const setUserSubscribesAC = (subscribesPage: any, totalUserSubscribes: number) => { return { type: 'SET-USER-SUBSCRIBES', subscribesPage, totalUserSubscribes } }
export const loadFirstThoughtsPageAC = (thoughtsPage: any) => { return { type: 'LOAD-FIRST-THOUGHTS-PAGE', thoughtsPage } }
export const setProfileThoughtsAC = (thoughtsPage: any) => { return { type: 'SET-THOUGHTS-PAGE', thoughtsPage } }

// Thunk

export const setProfileTK = (user_id: string) => {
    return async (dispatch: any) => {
        const [getProfileRes, getSubscribeRes, getUserSubsRes] = await Promise.all([
            usersAPI.setProfile(user_id),
            subscribesAPI.getSubscribeStatus(user_id),
            subscribesAPI.getSubscribes(user_id)
        ])
        if ('error' in getProfileRes || 'error' in getSubscribeRes || 'error' in getUserSubsRes) {
            if ('error' in getProfileRes && getProfileRes.error === 'Unauthorized') {
                dispatch(fallAuth())
                dispatch(setAuthErrorText(getProfileRes.message))
            }
        } else {
            dispatch(setProfileAC(getProfileRes.data))
            dispatch(setSubscribeStatusAC(getSubscribeRes.data))
            dispatch(setUserSubscribesAC(getUserSubsRes.data.subscribesPage, getUserSubsRes.data.totalSubscribesCount))
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

export const loadFirstThoughtsPageTK = (user_id: string, page_size: number) => {
    return async (dispatch: any) => {
        const getThoughtsPageRes = await thoughtsAPI.getThoughtsPage(user_id, 1, page_size)
        if ('error' in getThoughtsPageRes) return null
        else dispatch(loadFirstThoughtsPageAC(getThoughtsPageRes.data.profileThoughtsPage))
    }
}

export const loadNextThoughtsPageTK = (user_id: string, page_number: number, page_size: number) => {
    return async (dispatch: any) => {
        const getThoughtsPageRes = await thoughtsAPI.getThoughtsPage(user_id, page_number, page_size)
        if ('error' in getThoughtsPageRes) return null
        else dispatch(setProfileThoughtsAC(getThoughtsPageRes.data.profileThoughtsPage))
    }
}