import * as React from 'react';
import { useContext } from "react";
import {render, RenderOptions, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { AuthenticationContext } from "../context/UserContext";
import useLocalStorage from "use-local-storage";
import App from '../app/App.js';

const [authentication, setAuthentication] = useLocalStorage("auth", {guest: true, isLoggedIn: false})

test('renders login page', () => {
    <ContextObject.Provider value={{authentication, setAuthentication}}>
      <App />
    </ContextObject.Provider>
    const linkElement = screen.findByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
});
