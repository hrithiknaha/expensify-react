import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => {
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
            <button onClick={ startLogout }>Logout</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header)