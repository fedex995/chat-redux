import React, {Component} from 'react'
import PropTypes from 'prop-types'
import dateformat from 'dateformat'

export default class Message extends Component{

    static propTypes = {
        message: PropTypes.string.isRequired,
        createAt : PropTypes.instanceOf(Date),
        user : PropTypes.string.isRequired
    };

    render(){
        const { user, createdAt, message } = this.props;
        return(
            <div>
                <span>{dateformat(createdAt, 'HH:MM:ss')}</span>
                {user}
                <span>{message}</span>
            </div>
        )

    }

}
