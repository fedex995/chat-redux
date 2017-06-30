import * as types from '../constants/ActionTypes'

export const sendMessage = (text, user, date) => ({
    type: types.SEND_MESSAGE,
    text: text,
    user: user,
    createdAt: date
});
