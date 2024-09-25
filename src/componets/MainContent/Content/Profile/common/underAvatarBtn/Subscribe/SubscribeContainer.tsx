import { connect } from "react-redux";
import { subscribeTK } from "../../../../../../../redux/reducers/profileReducer";
import Subscribe from "./Subscribe";

const mapStateToProps = (state: any) => {
    return {
        userId: state.profileReducer.id
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        subscribe: (user_id: string) => dispatch(subscribeTK(user_id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)