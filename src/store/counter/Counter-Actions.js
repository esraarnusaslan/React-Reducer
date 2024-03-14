import { COUNTER_DOWN, COUNTER_UP } from '../../store/types';

//Reducer a gonderilecek action nesnelerini create eden fonksiyonlar
export const counterUp = (val) => {
    return {
        type: COUNTER_UP,
        payload: val,
    };
};

export const counterDown = (val) => {
    return {
        type: COUNTER_DOWN,
        payload: val,
    };
};
