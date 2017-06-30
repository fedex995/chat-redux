/**
 * Created by federuiz on 6/30/17.
 */
import { SEND_MESSAGE } from '../constants/ActionTypes'

const initialState = [
    {message: "", date: "", user: ""}
]

export default function chat(state = initialState, action) {
    console.log ('asasasa');
    switch (action.type) {
        case SEND_MESSAGE:
            return [
                {
                    message: action.message,
                    user: action.user,
                    date: action.date
                },
                ...state
            ]

        default:
            return state
    }
}