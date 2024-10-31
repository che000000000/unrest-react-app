import { connect } from "react-redux";
import HeaderLogo from "./HeaderLogo"

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.signInReducer.isAuth
    }
}

export default connect(mapStateToProps)(HeaderLogo)