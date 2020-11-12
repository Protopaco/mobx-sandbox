
import React from 'react';
import { useObserver } from "mobx-react";
import { useStateStore } from './StoreProvider.js'


export const Header = (props) => {
    const store = useStateStore();
    return useObserver(() =>
        <div>
            <div>
                <p>{store.email}</p>
                <button>Logout</button>
            </div>
            <div>
                <button>login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )

}

export default Header