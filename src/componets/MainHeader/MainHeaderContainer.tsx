import { connect } from "react-redux";
import MainHeader from "./MainHeader";

const mapStateToProps = (state: any) => {
    return {
        avatar: state.signInReducer.user.avatar
    }
}

export default connect(mapStateToProps)(MainHeader)