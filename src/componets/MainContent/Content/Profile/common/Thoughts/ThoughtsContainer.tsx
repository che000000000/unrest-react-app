import { connect } from "react-redux";
import Thoughts from "./Thoughts";
import { loadFirstThoughtsPageTK, loadNextThoughtsPageTK } from "../../../../../../redux/reducers/profileReducer";
import { useParams } from "react-router-dom";

const UseParamsComponent = (props: any) => {
    const params = useParams()
    return <ThoughtsContainer params={params} {...props} />
}

const ThoughtsContainer = (props: any) => {
    return <Thoughts {...props} />
}

const mapStateToProps = (state: any) => {
    return {
        myId: state.signInReducer.user.id,
        id: state.profileReducer.id,
        profileThoughts: state.profileReducer.profileThoughts,
        thoughtsPagesLoaded: state.profileReducer.thoughtsPagesLoaded
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadFirstThoughtsPage: (user_id: string, page_size: number) => { dispatch(loadFirstThoughtsPageTK(user_id, page_size)) },
        setThoughtsPage: (user_id: string, page_number: number, page_size: number) => { dispatch(loadNextThoughtsPageTK(user_id, page_number, page_size)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseParamsComponent)