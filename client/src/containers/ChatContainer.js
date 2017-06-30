/**
 * Created by federuiz on 6/30/17.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import AddMessage from "../components/AddMessage";

const ChatContainer = ({ messages, actions }) => (
    <div>
        <AddMessage {...actions}/>
    </div>
)

ChatContainer.propTypes = {

}

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatContainer)