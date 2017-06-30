/**
 * Created by federuiz on 6/30/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'



const ChatContainer = ({ messages }) => (
    <div>chaaaaat</div>
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