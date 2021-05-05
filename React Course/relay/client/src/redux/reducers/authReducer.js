import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userID: null,
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userID: payload.userID };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userID: null };
        default:
            return state;
    }
}