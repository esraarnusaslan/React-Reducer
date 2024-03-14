import { createContext, useReducer, useContext } from 'react';
import React from 'react';
import { counterReducer } from './counter/Counter-Reducer';
import { counterInitialState } from './counter/Counter-Initials-State';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
    const [counterState, counterDispatch] = useReducer(
        counterReducer,
        counterInitialState
    ); // counterReducer, counterInitialState paramatre olarak alir ve bundan sonra getter ve setter geliyor

    return (
        <StoreContext.Provider value={{ counterState, counterDispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
