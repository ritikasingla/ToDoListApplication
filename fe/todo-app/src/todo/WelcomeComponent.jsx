import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloServiceApi from './HelloServiceApi.js'
class WelcomeComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message : ''
        }
    }
    
    retrieveWelcome = () => {
        HelloServiceApi.getWelcomeMsg(this.props.match.params.nameuser)
                .then(response => this.setState({message: response.data}))
                .catch(error => this.setState({message:error.response.data.message}))
    }

    render() {
        return (
            <div>
            <h1> Welcome </h1>
            <div className="container">
                Hi {this.props.match.params.nameuser}, manage your <Link to="/todos">todos here</Link>!
                <button onClick ={this.retrieveWelcome}>hello</button>
                {this.state.message}
            </div>
            </div>
        )
    }
}

export default WelcomeComponent;