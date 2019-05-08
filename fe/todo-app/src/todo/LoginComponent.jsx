import React, {Component} from 'react';
import './Todocss.css';
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

        console.log(event.target.value)
        this.setState({
                [event.target.name] : event.target.value
        })
    }

    loginClicked(event) {

        if(this.state.username==='ritika' && this.state.password==='ritika') {
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
                {/*this.state.isSuccess? <div>Successful</div> : <div>failed</div> */}
                {this.state.isSuccess && <div>Successful</div>}
                {this.state.isFailed && <div>Failed</div>}
                <input type="text" className="username" name = "username" value={this.state.username} onChange={this.handleChange}/>
                <input type="password" className="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default LoginComponent;

