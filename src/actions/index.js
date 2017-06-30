import * as types from '../constants/ActionTypes'

const sendMessage = text => ({
  type: types.SEND_MESSAGE,
  text
});
