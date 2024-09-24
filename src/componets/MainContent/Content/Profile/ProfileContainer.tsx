import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileTK } from "../../../../redux/reducers/profileReducer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileLoading from "./ProfileLoading/ProfileLoading";
import AuthRedirect from "../../../../Hocks/AuthRedirect";

const UseParamsComponent = (props: any) => {
    const params = useParams()
    return <ProfileContainer params={params} {...props} />
}

const ProfileContainer = (props: any) => {
    const [loading, setLoading] = useState(true);
    const { params, my_id, setProfile } = props

    useEffect(() => {
        let userId = params.user_id;
        if (!userId) userId = my_id;
        if (userId) {
            setProfile(userId).then(() => {
                setLoading(false)
            })
        }
    }, [params.user_id, my_id, setProfile])

    if (loading) return <ProfileLoading />
    return <Profile {...props} />   
}

const mapStateToProps = (state: any) => {
    return {
        my_id: state.signInReducer.user.id,
        user_id: state.profileReducer.id,
        userTag: state.profileReducer.userTag,
        userName: state.profileReducer.userName,
        avatar: state.profileReducer.avatar,
        aboutMe: state.profileReducer.aboutMe,
        isWallOpen: state.profileReducer.isWallOpen
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setProfile: (user_id: string) => dispatch(setProfileTK(user_id))
    }
}

export default AuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UseParamsComponent))