
import React from 'react';
import { useObserver } from "mobx-react";
import { useStateStore } from './StoreProvider.js'
import { fetchAuthSignUp } from './FetchSuite.js'



export const AuthForm = (props) => {
    const store = useStateStore();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")

    return useObserver(() =>
        <form onSubmit={async (e) => {
            e.preventDefault();
            store.changeEmail(email);

            setEmail("")
            const returnedObject = await fetchAuthSignUp({
                email,
                password
            })
            store.changeToken(returnedObject.body.token)
        }}>
            <input
                type="text"
                value={email}
                onChange={e => { setEmail(e.target.value) }}
                placeholder='email'
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                placeholder='password'
            />
            <br />
            <button type="submit">{props.buttonLabel}</button>
        </form >
    )

}

export default AuthForm