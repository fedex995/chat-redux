import React, { Component } from 'react'
import * as userActions from '../actions/index'
import { connect } from 'react-redux'

class WelcomePage extends Component { 
  constructor(props){
    super(props) ;
    this.state = { 
      input: ''
    };
      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

    handleOnChange(ev){
        this.setState({input: ev.target.value})
        console.log(ev.target.value)
    }

    handleOnSubmit(ev){
        this.props.newUser(this.state.input)
        this.setState({ input: ''})
    }


  render(){ 
    return (
      <div> 
       <header> Welcome! What would you like to be called? </header>
          <form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
              <input value={this.state.input}/>
              <button> Submit </button>
          </form>
        </div> 
    )  
  }
}

function mapStateToProps(state, ownProps){
  return { user: state.user }
}

function mapDispatchToProps(dispatch){
 return { 
   newUser: (user) => {
    dispatch(userActions.newUser(user))
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
