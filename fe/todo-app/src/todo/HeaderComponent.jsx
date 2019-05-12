import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import AuthenticateUser from './AuthenticateUser.js'
class HeaderComponent extends Component{

    render() {

    const userStatus = AuthenticateUser.isUserLoggedIn();
    console.log(userStatus);

    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
            <a href="http://www.titaniumwings.com" className="navbar-brand">
            TitaniumWings
            </a></div>
            <ul className="navbar-nav">
            <li>
            {userStatus && <Link className="nav-link" to="/welcome/ritika">Home</Link>}
            </li>
            <li>
            {userStatus && <Link className="nav-link" to="/todos">Todos</Link>}
            </li>
            </ul>
            <ul  className="navbar-nav navbar-collapse justify-content-end">
            <li>
            {!userStatus && <Link className="nav-link" to="/login">Login</Link>}
            </li>
            <li>
            {userStatus && <Link className="nav-link" to="/logout" onClick={AuthenticateUser.deleteCredentials}>Logout</Link>}
            </li>
            </ul>
            </nav>
        </header>
        )
    }
}

export default withRouter(HeaderComponent);