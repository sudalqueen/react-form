import React, {createContext} from 'react';

export const RefContext = createContext();

export const RefProvider = (props) => {
    const refs = [];
    const action = {
        setRefs: (ref) => {
            refs.push(ref);
        }
    }

    const value = {refs, action};

    return (
        <RefContext.Provider value={value}>
            {props.children}
        </RefContext.Provider>
    )
}