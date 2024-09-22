import { connect } from "react-redux";
import { verifyAuthTK } from "../redux/reducers/singInReducer";
import { useEffect } from "react";

const VerifyAuth = (WrappedComponent: React.ComponentType<any>) => {
    const VerifyAuthComponent = (props: any) => {
        const { verifyAuth } = props
        useEffect(() => {
            verifyAuth()
        }, [verifyAuth])
        return <WrappedComponent {...props} />
    }

    const mapDispatchToProps = (dispatch: any) => {
        return {
            verifyAuth: () => { dispatch(verifyAuthTK()) }
        }
    }

    return connect(null, mapDispatchToProps)(VerifyAuthComponent)
}

export default VerifyAuth