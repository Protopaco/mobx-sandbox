import React, { useContext } from 'react';
import { useLocalObservable } from "mobx-react";


const StoreContext = React.createContext();

// This holds the state and methods to change the state
export const StoreProvider = ({ children }) => {
    const store = useLocalObservable(() => ({
        email: localStorage.getItem('EMAIL') || '',
        token: localStorage.getItem('TOKEN') || '',
        changeEmail: newEmail => {
            store.email = newEmail;
            localStorage.setItem('EMAIL', newEmail);
        },
        changeToken: newToken => {
            store.token = newToken;
            localStorage.setItem('TOKEN', newToken);
        }

    }));
    return (
        <StoreContext.Provider
            value={store}> {children}
        </StoreContext.Provider>
    )
};

export const useStateStore = () => useContext(StoreContext);

