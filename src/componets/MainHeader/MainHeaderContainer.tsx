import { connect } from "react-redux";
import MainHeader from "./MainHeader";

const mapStateToProps = (state: any) => {
    return {
        userName: state.signInReducer.user.userName,
        avatar: state.signInReducer.user.avatar
    }
}

export default connect(mapStateToProps)(MainHeader)