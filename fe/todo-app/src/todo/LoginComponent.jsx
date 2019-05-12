import React, {Component} from 'react';
import './Todocss.css';
import AuthenticateUser from './AuthenticateUser.js'
class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username : 'ritika',
            password : '',
            isSuccess : false,
            isFailed : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {

        this.setState({
                [event.target.name] : event.target.value
        })
    }

    loginClicked(event) {

        if(this.state.username==='ritika' && this.state.password==='ritika') {
            AuthenticateUser.saveCredentials(this.state.username);
            console.log("logged");
            this.setState( {
                isSuccess : true,
                isFailed : false
            })

            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState( {
                isSuccess : false,
                isFailed : true
            })
        }
    }

    render() {
        return (
            <div>
            <h1>Login</h1>
            <div className="container">
                {/*this.state.isSuccess? <div>Successful</div> : <div>failed</div> 
                {this.state.isSuccess && <div>Successful</div>}*/}
                {this.state.isFailed && <div className="alert alert-warning">Invalid credentials</div>}
                <input type="text" className="username" name = "username" value={this.state.username} onChange={this.handleChange}/>
                <input type="password" className="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success"onClick={this.loginClicked}>Login</button>
            </div>
            </div>
        )
    }
}

export default LoginComponent;

