import React from 'react';
import { useObserver } from "mobx-react";
import { StoreProvider } from './StoreProvider.js'
import { useStateStore } from './StoreProvider.js'
import AuthForm from './AuthForm.js'
import Header from './Header.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <StoreProvider>
      <Header />
      <AuthForm
        buttonLabel={'Signup'}
      />
    </StoreProvider>

  );
}

export default App;
