import React, {Component} from 'react'
import ChatContainer from './ChatContainer'
import { connect } from 'react-redux'
import WelcomePage from "../components/WelcomePage";

class App extends Component {

    constructor(props){
        super(props);
        this.currentUser = this.currentUser.bind(this)

    }

    currentUser(){
        return !!this.props.user
    }

    render() {
        return (
            <div>
                {this.currentUser() ? <ChatContainer /> : <WelcomePage />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { user: state.user }
}

export default connect(mapStateToProps)(App)

