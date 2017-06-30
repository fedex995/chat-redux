import * as types from '../constants/ActionTypes'

export default function user(state = '', action){
  switch(action.type){
    case types.NEW_USER:
      return action.user;
    default:
      return state
  }
}
