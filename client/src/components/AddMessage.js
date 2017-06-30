/**
 * Created by federuiz on 6/30/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class AddMessage extends Component{

    static propTypes = {
        sendMessage: PropTypes.func.isRequired
    };

    state = {
        messageText: '',
        username: ''
    };
    handleSend = () => {
            this.props.sendMessage(this.state.messageText.trim(), this.state.username, new Date().toDateString());
            this.setState({ messageText: '' })
    };
    handleMessageChange = e => {
        this.setState({ messageText: e.target.value })
    };
    handleUsernameChange = e => {
        this.setState({ username: e.target.value })
    };
    handleSetUsername = e => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.setState({ username: text })
        }
    };

    render(){
        return(
            <div>
                <div>
                    <input onChange={this.handleMessageChange} value={this.state.messageText}/>
                    <button  onClick={this.handleSend}>Enviar</button>
                </div>
                <div>
                    <input value={this.state.username} onChange={this.handleUsernameChange}/>
                    <button onClick={this.handleSetUsername}>Cambiar nombre de usuario</button>
                </div>
            </div>
        )

    }

}