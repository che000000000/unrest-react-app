import { connect } from "react-redux";
import Subscribes from "./Subscribes";

const mapStateToProps = (state: any) => {
    return {
        userId: state.profileReducer.id,
        userSubscribes: state.profileReducer.userSubscribes,
        totalUserSubscribes: state.profileReducer.totalUserSubscribes
    }
}

export default connect(mapStateToProps)(Subscribes)