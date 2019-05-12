import React,{Component} from 'react'
import AuthenticateUser from './AuthenticateUser';
import {Route, Redirect} from 'react-router-dom'
class AuthenticatedRoute extends Component{

    render() {
        return(
            <div>
            {AuthenticateUser.isUserLoggedIn() ? <Route {...this.props}/>:<Redirect to="/login"/>}
    </div>
        )}
}

export default AuthenticatedRoute