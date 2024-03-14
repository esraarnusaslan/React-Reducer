import { counterInitialState } from './Counter-Initials-State';
import { COUNTER_DOWN, COUNTER_UP } from '../../store/types';


export const counterReducer = (state = counterInitialState, action) => {
    if (action.type === COUNTER_UP) {
        return {
            ...state,
            count: state.count + action.payload,
        };
    } else if (action.type === COUNTER_DOWN) {
        return {
            ...state,
            count: state.count - action.payload,
        };
    }
    //bu satir hic bir if e girmediginde mevcut state geri dondurulur.eger yazilmazsa state undifend olur.
    return state;
};
