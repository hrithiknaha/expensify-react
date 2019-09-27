import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from '../components/Header'


export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component = {(props) => (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to='/' />
            )
    )}/>
)// Sending every prop apart from isauthenticated and compoenent, then making our own manual component
// depending wheteher the user is authenticated or not

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)