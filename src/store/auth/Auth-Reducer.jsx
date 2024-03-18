import { LOGIN, LOGOUT } from '../types';
import { authInitialsState } from './Auth-Initials-State';

export const authReducer = (state = authInitialsState, action) => {
    if (action.type === LOGIN) {
        return {
            ...state,
            isUserLogin: true,
            user: action.payload,
        };
    } else if (action.type === LOGOUT) {
        return {
            ...state,
            isUserLogin: false,
            user: null,
        };
    }
    return state;
};
