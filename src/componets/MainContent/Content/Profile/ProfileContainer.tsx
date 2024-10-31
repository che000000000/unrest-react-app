import { connect } from "react-redux";
import Profile from "./Profile";
import { loadFirstThoughtsPageTK, setProfileTK } from "../../../../redux/reducers/profileReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileLoading from "./ProfileLoading/ProfileLoading";
import AuthRedirect from "../../../../Hocks/AuthRedirect";

const UseParamsComponent = (props: any) => {
    const params = useParams()
    return <ProfileContainer params={params} {...props} />
}

const ProfileContainer = (props: any) => {
    const { params, myId, setProfile, loadFirstThoughtsPage} = props
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        let userId = params.user_id || myId
        const fetchProfileData = async () => {
            await Promise.all([
                setProfile(userId),
                loadFirstThoughtsPage(userId, 3)
            ])
            setLoading(false)
        }
        fetchProfileData()
    }, [params])

    if (loading) return <ProfileLoading />
    return <Profile {...props} />
}

const mapStateToProps = (state: any) => {
    return {
        myId: state.signInReducer.user.id,
        userId: state.profileReducer.id,
        userTag: state.profileReducer.userTag,
        userName: state.profileReducer.userName,
        avatar: state.profileReducer.avatar,
        aboutMe: state.profileReducer.aboutMe,
        isWallOpen: state.profileReducer.isWallOpen,
        isSubscribe: state.profileReducer.isSubscribe,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setProfile: (user_id: string) => dispatch(setProfileTK(user_id)),
        loadFirstThoughtsPage: (user_id: string, page_size: number) => { dispatch(loadFirstThoughtsPageTK(user_id, page_size)) },
    }
}

export default AuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UseParamsComponent))