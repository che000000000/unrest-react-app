import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileTK } from "../../../../redux/reducers/profileReducer";
import React from "react";
import { useParams } from "react-router-dom";

// Interfaces

export interface Params {
    user_id: string
}

export interface MapStateProps {
    my_id: string
    user_id: string
    userTag: string
    userName: string
    avatar: string
    aboutMe: string
    isWallOpen: boolean
}

export interface MapDispatchProps {
    setProfile: (user_id: string) => void
}

type Props = MapStateProps & MapDispatchProps & { params: Params };

// Components

const UseParamsComponent = (props: any) => {
    const params = useParams()
    return <ProfileContainer params={params} {...props} />
}

class ProfileContainer extends React.Component<Props> {
    
    componentDidMount(): void {
        let userId = this.props.params.user_id
        if(!userId) userId = this.props.my_id
        if(userId) this.props.setProfile(userId)
    }

    render(): React.ReactNode {
        return <Profile {...this.props} />
    }
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
        setProfile: (user_id: string) => { dispatch(setProfileTK(user_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseParamsComponent)