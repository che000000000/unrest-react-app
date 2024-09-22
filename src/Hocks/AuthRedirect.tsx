import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRedirect = (WrappedComponent: React.ComponentType<any>) => {
    const AuthRedirectComponent = (props: any) => {
        const navigate = useNavigate()
        const location = useLocation()
        const { isAuth } = props

        useEffect(() => {
            if (isAuth && location.pathname === '/sign-in') {
                navigate('/main-content/profile')
            } else if (!isAuth && location.pathname !== '/sign-in') {
                navigate('/sign-in')
            }
        }, [isAuth, location.pathname, navigate])
        return <WrappedComponent {...props} />
    }

    const mapStateToProps = (state: any) => ({
        isAuth: state.signInReducer.isAuth,
        isAuthVerified: state.signInReducer.isAuthVerified,
    })

    return connect(mapStateToProps)(AuthRedirectComponent)
};

export default AuthRedirect