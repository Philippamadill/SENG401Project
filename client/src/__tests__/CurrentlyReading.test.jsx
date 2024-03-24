import React, { useContext, createContext } from 'react';
import {render, RenderOptions, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import CurrentlyReading from '../pages/CurrentlyReading';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext, AuthenticationContext } from "../context/UserContext";

// Trying this testing format: https://stackoverflow.com/questions/56828017/testing-usecontext-with-react-testing-library
const customRender = (ui, { authProviderProps, userProviderProps, ...RenderOptions }) => {
    return render(
        <AuthenticationContext.Provider value={authProviderProps}>
            <UserContext.Provider value={userProviderProps}>
                {ui}
            </UserContext.Provider>
        </AuthenticationContext.Provider>,
        RenderOptions
    );
};

describe("Testing Context Consumer", () => {
    let authProviderProps;
    let userProviderProps;
    beforeEach(
        () =>
            userProviderProps = {
                first_name: "GUEST",
                last_name: "",
                setUserInfo: jest.fn(function (first_name, last_name){
                    userProviderProps.first_name = first_name;
                    userProviderProps.last_name = last_name;
                })
            }
            (authProviderProps = {
                guest: true,
                isLoggedIn: false,
                setAuthentication: jest.fn(function (guest, isLoggedIn){
                    authProviderProps.guest = guest;
                    authProviderProps.isLoggedIn = isLoggedIn;
                })
            })
    );

    test.skip('renders title', () => {
        customRender(<CurrentlyReading />, {authProviderProps, userProviderProps})
        const element = screen.findByText(/Currently Reading/i);
        expect(element).toBeTruthy();
    });

});


