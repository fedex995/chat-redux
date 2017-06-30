import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MessageList extends Component{

    static propTypes = {
        messages: PropTypes.array().isRequired
    };

    render() {

        const {messages} = this.props;
        let messageUi = messages.map(m => {
            return (
                <Message
                    key={m.id}
                    user={m.user}
                    createdAt={m.createdAt}
                    message={m.message}
                />
            )
        });

        return (
            <div>
                <h2>Messages</h2>
                {messageUi}
            </div>
        )

    }
}
