import { connect } from "react-redux";
import MainHeader from "./MainHeader";

const mapStateToProps = (state: any) => {
    return {
        userName: state.signInReducer.user.userName
    }
}

export default connect(mapStateToProps)(MainHeader)