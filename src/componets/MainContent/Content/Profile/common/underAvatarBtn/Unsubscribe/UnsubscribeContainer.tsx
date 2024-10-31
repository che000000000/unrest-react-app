import { connect } from "react-redux";
import Unsubscribe from "./Unsubscribe";
import { unsubscribeTK } from "../../../../../../../redux/reducers/profileReducer";

const mapStateToProps = (state: any) => {
    return {
        subscribeId: state.profileReducer.subscribeId
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        unsubscribe: (subscribe_id: string) => dispatch(unsubscribeTK(subscribe_id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unsubscribe)