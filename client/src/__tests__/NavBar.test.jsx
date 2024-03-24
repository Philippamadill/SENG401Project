import React, { useContext } from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from '../components/NavBar';
import NavBar from '../components/NavBar';
import { AuthenticationContext, UserContext } from "../context/UserContext";

test.skip('renders login button', () => {
    const {getByText} = render(
        <BrowserRouter>
            element = <NavBar 
            />
        </BrowserRouter>
        
        // <BrowserRouter>
        //     <Routes>   
        //         <Route path="/Layout" element= {<NavBar />}/>
        //     </Routes>
        // </BrowserRouter>
    );
    const element = getByText(/Login/i);
    expect(element).toBeTruthy();
});

test.skip('renders search link', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="/Layout" element= {<NavBar />}/>
            </Routes>
        </BrowserRouter>
    );
    const element = screen.findByText(/Search/i);
    expect(element).toBeTruthy();
});

test.skip('renders currently reading link', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="Layout" element= {<NavBar />}/>
            </Routes>
        </BrowserRouter>
    );
    const element = screen.findByText(/kjdsfh/i);
    expect(element).toBeTruthy();
});
