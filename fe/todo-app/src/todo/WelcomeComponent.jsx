import React, {Component} from 'react'


class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Hi {this.props.match.params.nameuser}
            </div>
        )
    }
}

export default WelcomeComponent;